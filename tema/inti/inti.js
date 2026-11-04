/* Mesin undangan bersama untuk semua tema.
   Tema mendaftarkan diri lewat window.TEMA (lihat tema/<nama>/tema.js), data pasangan lewat window.UNDANGAN.
   Mesin ini mengurus isi undangan, hitung mundur, peta, galeri, video, musik, ucapan, navigasi, dan scroll otomatis. */
(function () {
  var D = window.UNDANGAN || {};
  var T = window.TEMA || {};
  var pria = D.pria || {}, wanita = D.wanita || {};
  var HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function tgl(iso) {
    var p = String(iso || "").slice(0, 10).split("-");
    if (p.length < 3) return null;
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    return { hari: HARI[d.getDay()], tgl: d.getDate(), bulan: BULAN[d.getMonth()], bln: d.getMonth() + 1, tahun: d.getFullYear() };
  }
  function lbl(key, def) { var l = (T.label || {})[key]; return l || def; }
  function kata(key, def) { return (T.kata || {})[key] || def; }

  var nama1 = pria.panggilan || "Mempelai Pria";
  var nama2 = wanita.panggilan || "Mempelai Wanita";
  var mono = (D.monogram || (nama1.charAt(0) + nama2.charAt(0))).toUpperCase().slice(0, 3);
  var acara = D.acara || [];
  var utama = tgl(D.tanggal || (acara[0] && acara[0].tanggal));
  var ctx = {
    D: D, esc: esc, tgl: tgl,
    nama1: nama1, nama2: nama2,
    duaNama: esc(nama1) + ' <span class="amp-s">&amp;</span> ' + esc(nama2),
    mono: mono,
    monoA: esc(mono.charAt(0)), monoB: esc(mono.slice(1)),
    monoHtml: '<span class="m1">' + esc(mono.charAt(0)) + '</span><span class="amp">&amp;</span><span class="m2">' + esc(mono.slice(1)) + '</span>',
    tanggalPanjang: utama ? utama.hari + ", " + utama.tgl + " " + utama.bulan + " " + utama.tahun : "",
    tanggalPendek: utama ? ("0" + utama.tgl).slice(-2) + " · " + ("0" + utama.bln).slice(-2) + " · " + utama.tahun : "",
    utama: utama,
    fotoPasangan: D.fotoPasangan ? '<img class="foto" src="' + esc(D.fotoPasangan) + '" alt="' + esc(nama1 + " dan " + nama2) + '" onerror="this.remove()">' : "",
    kepada: kata("kepada", "Kepada Yth. Bapak/Ibu/Saudara/i"),
    tombolBuka: kata("buka", "Buka Undangan")
  };
  ctx.siluet = '<svg class="siluet" viewBox="0 0 300 260" aria-hidden="true"><circle cx="118" cy="96" r="34"/><circle cx="186" cy="84" r="36"/><path d="M50 260c4-70 34-110 68-110s50 30 60 70"/><path d="M130 260c6-80 28-128 56-128s54 44 62 128z"/></svg>';
  window.UNDANGAN_CTX = ctx;
  if (!document.title || document.title === "Undangan") document.title = nama1 + " & " + nama2;

  /* ---------- Bagian isi ---------- */
  var siluetOrang = '<svg class="siluet" viewBox="0 0 150 120" aria-hidden="true"><circle cx="75" cy="45" r="26"/><path d="M20 120c4-38 26-52 55-52s51 14 55 52z"/></svg>';
  function orang(p, cls) {
    var foto = (p.foto ? '<img src="' + esc(p.foto) + '" alt="' + esc(p.panggilan) + '" onerror="this.remove()">' : "");
    var pic = T.bingkaiOrang ? T.bingkaiOrang(siluetOrang + foto, cls) : '<div class="pic ' + cls + '">' + siluetOrang + foto + '</div>';
    return '<div class="person ' + cls + ' reveal">' + pic +
      '<h3>' + esc(p.panggilan) + '</h3><div class="full">' + esc(p.lengkap) + '</div><p>' + esc(p.orangTua) + '</p></div>';
  }
  function petaUrl(a) {
    if (a.lokasi && a.lokasi.lat != null) return "https://www.google.com/maps/search/?api=1&query=" + a.lokasi.lat + "," + a.lokasi.lng;
    if (a.peta) return a.peta;
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((a.tempat || "") + ", " + (a.alamat || ""));
  }
  function embedUrl(a) {
    var q = a.lokasi && a.lokasi.lat != null ? a.lokasi.lat + "," + a.lokasi.lng : (a.tempat || "") + ", " + (a.alamat || "");
    return "https://maps.google.com/maps?q=" + encodeURIComponent(q) + "&z=16&output=embed";
  }
  var acaraHtml = acara.map(function (a, i) {
    var t = tgl(a.tanggal) || {};
    var url = esc(petaUrl(a));
    return '<article class="event reveal ev' + i + '">' + (T.hiasAcara ? T.hiasAcara(i) : "") + '<h3>' + esc(a.nama) + '</h3>' +
      '<div class="day">' + esc(t.hari || "") + '</div><div class="bigdate">' + esc(t.tgl) + '</div>' +
      '<div class="month">' + esc((t.bulan || "") + " " + (t.tahun || "")) + '</div>' +
      '<div class="time">' + esc(a.jam) + '</div><div class="place">' + esc(a.tempat) + '</div>' +
      '<a class="addr" href="' + url + '" target="_blank" rel="noopener"><address>' + esc(a.alamat) + '</address></a>' +
      ((a.lokasi && a.lokasi.lat != null) || a.alamat ? '<a class="map" href="' + url + '" target="_blank" rel="noopener" aria-label="Buka lokasi ' + esc(a.tempat) + ' di Google Maps">' +
        '<iframe src="' + esc(embedUrl(a)) + '" loading="lazy" tabindex="-1" title="Peta ' + esc(a.tempat) + '"></iframe><span>Ketuk untuk buka Google Maps</span></a>' : "") +
      '<a class="btn" href="' + url + '" target="_blank" rel="noopener">Lihat Lokasi</a></article>';
  }).join("");

  var cerita = D.cerita || [];
  var ceritaHtml = cerita.map(function (c) {
    var yt = youtubeId(c.youtube), media = "";
    if (c.foto) media += '<figure class="story-media" tabindex="0" data-video="0" data-src="' + esc(c.foto) + '"><img src="' + esc(c.foto) + '" alt="' + esc(c.judul || "") + '" loading="lazy" onerror="this.parentNode.remove()"></figure>';
    if (c.video) media += '<div class="story-media vid"><video src="' + esc(c.video) + '#t=0.1" controls playsinline preload="metadata" onerror="this.parentNode.remove()"></video></div>';
    if (yt) media += '<div class="story-media vid"><iframe src="https://www.youtube-nocookie.com/embed/' + yt + '?rel=0" title="' + esc(c.judul || "Video") + '" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>';
    return '<li class="reveal">' + (c.waktu ? '<time>' + esc(c.waktu) + '</time>' : "") + (c.judul ? '<h4>' + esc(c.judul) + '</h4>' : "") + (c.isi ? '<p>' + esc(c.isi) + '</p>' : "") + media + '</li>';
  }).join("");

  var galeri = Array.isArray(D.galeri) ? D.galeri.filter(function (g) { return g && (typeof g === "string" || g.src); }) : [];
  window.__undanganHilang = function (el) {
    var fig = el.closest("figure"); if (fig) fig.remove();
    var gal = document.querySelector(".gallery");
    if (gal && !gal.querySelector("figure")) sembunyikan("galeri");
  };
  window.__videoHilang = function () { sembunyikan("video"); };
  function sembunyikan(id) {
    var sec = document.getElementById(id); if (sec) sec.remove();
    var a = document.querySelector('.nav a[href="#' + id + '"]');
    if (a && id === "galeri" && document.getElementById("video")) { a.setAttribute("href", "#video"); a.setAttribute("aria-label", "Video"); a.querySelector("span").textContent = "Video"; }
    else if (a) a.remove();
  }
  function youtubeId(v) {
    var m = String(v || "").match(/(?:youtu\.be\/|v=|embed\/|shorts\/|live\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(String(v || "")) ? v : "");
  }
  var vid = D.video || {};
  var ytId = youtubeId(vid.youtube);
  var videoHtml = ytId
    ? '<div class="video-box reveal"><iframe src="https://www.youtube-nocookie.com/embed/' + ytId + '?rel=0" title="Video" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>'
    : vid.src ? '<div class="video-box reveal"><video src="' + esc(vid.src) + '" controls playsinline preload="metadata" onerror="__videoHilang()"></video></div>' : "";
  function isVideo(item) {
    if (item && typeof item === "object") return item.tipe === "video";
    return /\.(mp4|webm|mov|m4v)$/i.test(String(item));
  }
  function srcOf(item) { return item && typeof item === "object" ? item.src : item; }
  var galeriHtml = galeri.map(function (item, i) {
    var src = esc(srcOf(item));
    var media = isVideo(item)
      ? '<video src="' + src + '#t=0.1" muted playsinline preload="metadata" onerror="__undanganHilang(this)"></video><span class="play" aria-hidden="true"></span>'
      : '<img src="' + src + '" alt="" onerror="__undanganHilang(this)">';
    return '<figure tabindex="0" data-video="' + (isVideo(item) ? 1 : 0) + '" data-src="' + src + '">' + media + '</figure>';
  }).join("");

  var rekening = D.rekening || [];
  var rekHtml = rekening.map(function (r, i) {
    return '<div class="acc reveal"><div><small>' + esc(r.bank) + ' · a.n. ' + esc(r.atasNama) + '</small><strong id="acc' + i + '">' + esc(r.nomor) + '</strong></div>' +
      '<button class="btn line" type="button" data-copy="acc' + i + '">Salin</button></div>';
  }).join("");

  var ayat = D.ayat || {};
  function bagian(id, key, isi, extra) {
    var l = lbl(key, ["", ""]);
    return '<section id="' + id + '" class="sec sec-' + key + (extra ? " " + extra : "") + '">' + (T.hiasBagian ? T.hiasBagian(key) : "") +
      (l[0] ? '<h2 class="reveal">' + l[0] + '</h2>' : "") + (l[1] ? '<p class="kicker reveal">' + l[1] + '</p>' : "") + isi + '</section>';
  }
  var hitung = '<div class="countdown cd-' + (T.hitung || "kotak") + ' reveal"><div><b id="cd-d">00</b><span>Hari</span></div><div><b id="cd-h">00</b><span>Jam</span></div><div><b id="cd-m">00</b><span>Menit</span></div><div><b id="cd-s">00</b><span>Detik</span></div></div>';
  var pembuka = D.pembuka || kata("pembuka", "Dengan memohon rahmat dan ridho Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan pernikahan putra-putri kami:");
  var salam = kata("salam", "");

  var BAGIAN = {
    ayat: function () { return ayat.teks ? '<section class="sec sec-ayat">' + (T.hiasBagian ? T.hiasBagian("ayat") : "") + '<p class="lead reveal">“' + esc(ayat.teks) + '”<cite>' + esc(ayat.sumber) + '</cite></p></section>' : ""; },
    mempelai: function () {
      return bagian("mempelai", "mempelai", (salam ? '<p class="salam reveal">' + esc(salam) + '</p>' : "") + '<p class="pembuka reveal">' + esc(pembuka) + '</p>' +
        '<div class="couple">' + orang(pria, "pria") + '<div class="and reveal" aria-hidden="true">&amp;</div>' + orang(wanita, "wanita") + '</div>');
    },
    acara: function () { return bagian("acara", "acara", hitung + '<div class="events">' + acaraHtml + '</div>'); },
    cerita: function () { return cerita.length ? bagian("cerita", "cerita", '<ol class="story">' + ceritaHtml + '</ol>') : ""; },
    video: function () { return videoHtml ? bagian("video", "video", videoHtml) : ""; },
    galeri: function () { return galeri.length ? bagian("galeri", "galeri", '<div class="gallery gal-' + (T.galeri || "mozaik") + ' reveal">' + galeriHtml + '</div>') : ""; },
    hadiah: function () { return rekening.length ? bagian("hadiah", "hadiah", '<p class="lead small reveal">' + esc(kata("hadiah", "Doa restu Anda adalah hadiah terindah. Bila ingin memberi tanda kasih, dapat melalui:")) + '</p><div class="gift">' + rekHtml + '</div>') : ""; },
    ucapan: function () {
      return bagian("ucapan", "ucapan",
        '<form class="rsvp reveal" id="rsvpForm"><div><label for="f-name">Nama</label><input id="f-name" name="nama" required placeholder="Nama Anda"></div>' +
        '<div><label for="f-att">Kehadiran</label><select id="f-att" name="hadir"><option>Hadir</option><option>Tidak Hadir</option><option>Masih Ragu</option></select></div>' +
        '<div><label for="f-pax">Jumlah Tamu</label><select id="f-pax" name="jumlah"><option>1</option><option selected>2</option><option>3</option><option>4</option></select></div>' +
        '<div><label for="f-msg">Ucapan &amp; Doa</label><textarea id="f-msg" name="ucapan" required placeholder="Tulis ucapan untuk kedua mempelai"></textarea></div>' +
        '<button class="btn" type="submit">Kirim Ucapan</button><p class="toast" id="toast" role="status"></p></form><div class="wishes" id="wishes"></div>');
    }
  };
  var urutan = T.urutan || ["ayat", "mempelai", "acara", "cerita", "video", "galeri", "hadiah", "ucapan"];

  var IKON = {
    mempelai: '<path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.5 1.2 4.5 2.6 1-1.4 2.3-2.6 4.5-2.6 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z" fill="currentColor" stroke="none"/>',
    acara: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    galeri: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/>',
    hadiah: '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M3 13h18M12 9v12M12 9c-2-4-6-4-6-1s6 1 6 1zm0 0c2-4 6-4 6-1s-6 1-6 1z"/>',
    ucapan: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>'
  };
  var NAV = (T.nav || ["Couple", "Event", "Gallery", "Gift", "Wishes"]);
  var navItems = [["mempelai", NAV[0]], ["acara", NAV[1]], ["galeri", NAV[2]], ["hadiah", NAV[3]], ["ucapan", NAV[4]]].filter(function (n) {
    if (n[0] === "hadiah") return rekening.length;
    if (n[0] === "galeri") return galeri.length || videoHtml;
    return true;
  }).map(function (n) { return n[0] === "galeri" && !galeri.length ? ["video", "Video", "galeri"] : [n[0], n[1], n[0]]; });

  var penutup = D.penutup || kata("penutup", "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.");

  var html = (T.gambar || "") +
    '<div id="cover" class="cover" role="dialog" aria-label="Sampul undangan">' + (T.sampul ? T.sampul(ctx) : "") + '</div>' +
    '<aside class="side" aria-hidden="true">' + (T.samping ? T.samping(ctx) : "") + '</aside>' +
    '<canvas id="partikel" aria-hidden="true"></canvas>' +
    '<div class="floating">' +
      '<button class="fbtn music" id="musicBtn" type="button" aria-label="Putar atau hentikan musik"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h11v2H3zm0 4h11v2H3zm0 4h7v2H3zm13-8v9.2A3 3 0 1 0 18 17V8h3V5z"/></svg></button>' +
      '<button class="fbtn auto" id="autoBtn" type="button" aria-pressed="false" aria-label="Scroll otomatis"><svg class="i-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4v12.2l-4.6-4.6L6 13l6 6 6-6-1.4-1.4-4.6 4.6V4z"/></svg><svg class="i-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z"/></svg></button>' +
    '</div>' +
    '<audio id="music" loop preload="none"' + (D.musik ? ' src="' + esc(D.musik) + '"' : "") + '></audio>' +
    '<div class="app" id="app">' +
      (T.pembuka ? T.pembuka(ctx) : "") +
      urutan.map(function (k) { return BAGIAN[k] ? BAGIAN[k]() : ""; }).join("") +
      '<footer class="penutup">' + (T.hiasBagian ? T.hiasBagian("penutup") : "") + '<p class="reveal">' + esc(penutup) + '</p>' +
        '<p class="terima reveal">' + esc(kata("terima", "Terima kasih")) + '</p>' +
        '<div class="mono reveal" aria-hidden="true">' + ctx.monoHtml + '</div><div class="names reveal">' + ctx.duaNama + '</div></footer>' +
    '</div>' +
    '<div class="lightbox" id="lightbox" hidden><button type="button" class="lb-close" aria-label="Tutup">&times;</button><div class="lb-body" id="lbBody"></div></div>' +
    '<nav class="nav" aria-label="Navigasi undangan">' + navItems.map(function (n, i) {
      return '<a href="#' + n[0] + '"' + (i ? "" : ' class="on"') + ' aria-label="' + n[1] + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + IKON[n[2]] + '</svg><span>' + n[1] + '</span></a>';
    }).join("") + '</nav>';

  document.body.classList.add("locked", "tema-" + (T.id || "x"));
  document.body.insertAdjacentHTML("afterbegin", html);

  /* ================= Interaksi ================= */
  var body = document.body;
  var WEDDING_DATE = new Date(D.tanggal || ((acara[0] && acara[0].tanggal) + "T08:00:00+07:00"));
  var SCRIPT_URL = D.ucapanScriptUrl || "";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  try {
    var to = new URLSearchParams(location.search).get("to");
    var gn = document.getElementById("guestName");
    if (to && gn) gn.textContent = to.slice(0, 60);
  } catch (e) {}

  var cover = document.getElementById("cover");
  var audio = document.getElementById("music");
  var musicBtn = document.getElementById("musicBtn");
  var hasMusic = !!D.musik;
  if (!hasMusic) musicBtn.hidden = true;
  audio.addEventListener("error", function () { hasMusic = false; musicBtn.hidden = true; });
  function playMusic() {
    if (!hasMusic) return;
    var p = audio.play(); if (p && p.then) p.then(function () { musicBtn.classList.add("spin"); }, function () {});
  }
  musicBtn.addEventListener("click", function () {
    if (audio.paused) playMusic(); else { audio.pause(); musicBtn.classList.remove("spin"); }
  });
  var openBtn = document.getElementById("openBtn");
  if (openBtn) openBtn.addEventListener("click", function () {
    window.scrollTo(0, 0);
    body.classList.add("opening");
    cover.classList.add("open");
    body.classList.remove("locked");
    setTimeout(function () { body.classList.add("play"); startPartikel(); if (T.saatBuka) T.saatBuka(ctx); }, T.jedaBuka || 700);
    setTimeout(function () { cover.hidden = true; body.classList.remove("opening"); }, T.lamaBuka || 1700);
    playMusic();
  });

  /* Scroll otomatis */
  var autoBtn = document.getElementById("autoBtn"), autoOn = false, lastT = 0, acc = 0;
  function autoStep(t) {
    if (!autoOn) return;
    if (lastT) {
      acc += (t - lastT) * 0.045;
      if (acc >= 1) { var n = Math.floor(acc); acc -= n; window.scrollBy(0, n); }
    }
    lastT = t;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) { setAuto(false); return; }
    requestAnimationFrame(autoStep);
  }
  function setAuto(on) {
    autoOn = on; lastT = 0; acc = 0;
    autoBtn.classList.toggle("on", on); autoBtn.setAttribute("aria-pressed", on ? "true" : "false");
    document.documentElement.style.scrollBehavior = on ? "auto" : "";
    if (on) requestAnimationFrame(autoStep);
  }
  autoBtn.addEventListener("click", function () { setAuto(!autoOn); });
  ["wheel", "touchstart", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, function (e) { if (autoOn && !(ev === "keydown" && e.target === autoBtn)) setAuto(false); }, { passive: true });
  });

  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    var s = Math.max(0, Math.floor((WEDDING_DATE - new Date()) / 1000)) || 0;
    document.getElementById("cd-d").textContent = pad(Math.floor(s / 86400));
    document.getElementById("cd-h").textContent = pad(Math.floor(s % 86400 / 3600));
    document.getElementById("cd-m").textContent = pad(Math.floor(s % 3600 / 60));
    document.getElementById("cd-s").textContent = pad(s % 60);
  }
  tick(); setInterval(tick, 1000);

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else reveals.forEach(function (el) { el.classList.add("in"); });

  function setActive() {
    var links = document.querySelectorAll(".nav a"), y = window.innerHeight * .45, idx = 0;
    Array.prototype.forEach.call(links, function (a, i) { var s = document.querySelector(a.getAttribute("href")); if (s && s.getBoundingClientRect().top < y) idx = i; });
    Array.prototype.forEach.call(links, function (a, i) { a.classList.toggle("on", i === idx); });
  }
  window.addEventListener("scroll", setActive, { passive: true }); setActive();

  /* Ucapan */
  var KEY = "ucapan-" + location.pathname;
  var sample = D.contohUcapan || [];
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(l) { try { localStorage.setItem(KEY, JSON.stringify(l)); } catch (e) {} }
  function render(list) {
    var box = document.getElementById("wishes"); box.innerHTML = "";
    list.forEach(function (w) {
      var d = document.createElement("div"); d.className = "wish";
      var b = document.createElement("b"); b.textContent = w.nama;
      var t = document.createElement("span"); t.className = "tag"; t.textContent = w.hadir;
      var p = document.createElement("p"); p.textContent = w.ucapan;
      d.append(b, t, p); box.appendChild(d);
    });
  }
  function refresh() {
    if (SCRIPT_URL) {
      fetch(SCRIPT_URL).then(function (r) { return r.json(); }).then(function (rows) { render(rows.concat(sample)); })
        .catch(function () { render(load().concat(sample)); });
    } else render(load().concat(sample));
  }
  refresh();
  document.getElementById("rsvpForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, item = { nama: f.nama.value.trim(), hadir: f.hadir.value, jumlah: f.jumlah.value, ucapan: f.ucapan.value.trim() };
    if (!item.nama || !item.ucapan) return;
    var l = load(); l.unshift(item); save(l);
    if (SCRIPT_URL) {
      var fd = new FormData(); Object.keys(item).forEach(function (k) { fd.append(k, item[k]); });
      fetch(SCRIPT_URL, { method: "POST", body: fd }).then(refresh, refresh);
    } else refresh();
    f.ucapan.value = "";
    document.getElementById("toast").textContent = "Terima kasih, " + item.nama + ". Ucapan Anda sudah terkirim.";
  });

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var el = document.getElementById(btn.dataset.copy), txt = el.textContent.replace(/\s/g, "");
      function ok() { btn.textContent = "Tersalin"; setTimeout(function () { btn.textContent = "Salin"; }, 1800); }
      function fb() { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = "Tekan Ctrl+C"; }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(ok, fb); else fb();
    });
  });

  /* Lightbox galeri */
  var lb = document.getElementById("lightbox"), lbBody = document.getElementById("lbBody");
  function openLb(fig) {
    var src = fig.getAttribute("data-src"), isV = fig.getAttribute("data-video") === "1";
    lbBody.innerHTML = isV ? '<video src="' + src + '" controls autoplay playsinline></video>' : '<img src="' + src + '" alt="">';
    lb.hidden = false;
    if (autoOn) setAuto(false);
    if (!audio.paused && isV) { audio.pause(); musicBtn.classList.remove("spin"); lb.dataset.resume = "1"; }
  }
  function closeLb() {
    lb.hidden = true; lbBody.innerHTML = "";
    if (lb.dataset.resume) { delete lb.dataset.resume; playMusic(); }
  }
  document.querySelectorAll(".gallery figure, figure.story-media").forEach(function (fig) {
    fig.addEventListener("click", function () { if (fig.querySelector("img,video")) openLb(fig); });
    fig.addEventListener("keydown", function (e) { if (e.key === "Enter" && fig.querySelector("img,video")) openLb(fig); });
  });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-close")) closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLb(); });

  /* Partikel (kelopak, daun, gelembung, debu emas, bintang, melati, salju) */
  function startPartikel() {
    var P = T.partikel; if (!P || reduce) return;
    var cv = document.getElementById("partikel"), c = cv.getContext("2d"), W, H;
    var cols = P.warna || ["#fff"];
    function rs() { var d = Math.min(2, window.devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; c.setTransform(d, 0, 0, d, 0, 0); }
    rs(); addEventListener("resize", rs);
    function r(a, b) { return a + Math.random() * (b - a); }
    var naik = P.jenis === "gelembung", diam = P.jenis === "bintang" || P.jenis === "debu";
    function mk(awal) {
      var s = r(P.min || 4, P.max || 10);
      return { x: r(0, W), y: awal ? r(0, H) : (naik ? H + 20 : -20), s: s, vy: (naik ? -1 : 1) * r(.3, 1) * (P.laju || 1), ph: r(0, 6.3), rot: r(0, 6.3), vr: r(-.03, .03), c: cols[Math.floor(Math.random() * cols.length)], life: r(0, 6.3) };
    }
    var n = Math.min(P.jumlah || 26, Math.round(W / 26) + 10), ps = [];
    for (var i = 0; i < n; i++) ps.push(mk(true));
    function petal(p) { c.beginPath(); c.moveTo(0, -p.s); c.bezierCurveTo(p.s, -p.s * .6, p.s * .7, p.s * .7, 0, p.s); c.bezierCurveTo(-p.s * .7, p.s * .7, -p.s, -p.s * .6, 0, -p.s); c.fill(); }
    function leaf(p) { c.beginPath(); c.moveTo(0, -p.s); c.quadraticCurveTo(p.s * .8, 0, 0, p.s); c.quadraticCurveTo(-p.s * .8, 0, 0, -p.s); c.fill(); }
    function melati(p) { for (var k = 0; k < 5; k++) { c.save(); c.rotate(k * 1.2566); c.beginPath(); c.ellipse(0, -p.s * .55, p.s * .32, p.s * .55, 0, 0, 6.29); c.fill(); c.restore(); } c.fillStyle = "#f2d27a"; c.beginPath(); c.arc(0, 0, p.s * .18, 0, 6.29); c.fill(); }
    (function f() {
      c.clearRect(0, 0, W, H);
      ps.forEach(function (p, i) {
        p.ph += .02; p.life += .03;
        if (!diam) { p.y += p.vy; p.x += Math.sin(p.ph) * (naik ? .5 : .8) + (P.angin || .2); p.rot += p.vr; }
        else { p.y += p.vy * .15; p.x += Math.sin(p.ph) * .15; }
        if ((naik && p.y < -20) || (!naik && p.y > H + 20) || p.x > W + 30) { ps[i] = mk(false); return; }
        c.save(); c.translate(p.x, p.y); c.rotate(p.rot);
        c.fillStyle = p.c; c.strokeStyle = p.c;
        if (P.jenis === "gelembung") { c.globalAlpha = .55; c.lineWidth = 1.2; c.beginPath(); c.arc(0, 0, p.s * .6, 0, 6.29); c.stroke(); c.globalAlpha = .35; c.beginPath(); c.arc(-p.s * .2, -p.s * .2, p.s * .15, 0, 6.29); c.fill(); }
        else if (diam) { var a = (Math.sin(p.life) + 1) / 2; c.globalAlpha = .15 + a * .75; var g = p.s * (P.jenis === "bintang" ? .5 : .35); c.beginPath(); c.moveTo(0, -g * 2); c.lineTo(g * .35, -g * .35); c.lineTo(g * 2, 0); c.lineTo(g * .35, g * .35); c.lineTo(0, g * 2); c.lineTo(-g * .35, g * .35); c.lineTo(-g * 2, 0); c.lineTo(-g * .35, -g * .35); c.closePath(); c.fill(); }
        else {
          c.scale(1, Math.cos(p.ph * 1.4) * .45 + .6); c.globalAlpha = .82;
          if (P.jenis === "daun") leaf(p); else if (P.jenis === "melati") melati(p); else if (P.jenis === "salju") { c.beginPath(); c.arc(0, 0, p.s * .3, 0, 6.29); c.fill(); } else petal(p);
        }
        c.restore();
      });
      requestAnimationFrame(f);
    })();
  }
  if (T.siap) T.siap(ctx);
})();
