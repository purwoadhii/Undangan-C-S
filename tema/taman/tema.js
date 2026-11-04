/* Tema "Taman" untuk undangan online.
   File ini dipakai bersama oleh semua pasangan. Data tiap pasangan ada di <folder-pasangan>/data.js.
   Tidak perlu diubah untuk membuat undangan baru. */
(function () {
  var D = window.UNDANGAN || {};
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
    return { hari: HARI[d.getDay()], tgl: d.getDate(), bulan: BULAN[d.getMonth()], tahun: d.getFullYear() };
  }

  var nama1 = pria.panggilan || "Mempelai Pria";
  var nama2 = wanita.panggilan || "Mempelai Wanita";
  var duaNama = esc(nama1) + " &amp; " + esc(nama2);
  var mono = (D.monogram || (nama1.charAt(0) + nama2.charAt(0))).toUpperCase().slice(0, 3);
  var monoHtml = esc(mono) + '<span class="amp">&amp;</span>';
  var acara = D.acara || [];
  var utama = tgl(D.tanggal || (acara[0] && acara[0].tanggal));
  var tanggalPanjang = utama ? utama.hari + ", " + utama.tgl + " " + utama.bulan + " " + utama.tahun : "";
  var tanggalPendek = utama ? ("0" + utama.tgl).slice(-2) + " · " + ("0" + (BULAN.indexOf(utama.bulan) + 1)).slice(-2) + " · " + utama.tahun : "";

  if (!document.title || document.title === "Undangan") document.title = nama1 + " & " + nama2;

  var orang = function (p, cls) {
    return '<div class="person reveal"><div class="pic' + cls + '">' +
      '<svg viewBox="0 0 150 120" aria-hidden="true"><circle cx="75" cy="45" r="26" fill="#fff" opacity=".8"/><path d="M20 120c4-38 26-52 55-52s51 14 55 52z" fill="#fff" opacity=".8"/></svg>' +
      (p.foto ? '<img src="' + esc(p.foto) + '" alt="' + esc(p.panggilan) + '" onerror="this.remove()">' : "") +
      '</div><h3>' + esc(p.panggilan) + '</h3><div class="full">' + esc(p.lengkap) + '</div><p>' + esc(p.orangTua) + '</p></div>';
  };

  function petaUrl(a) {
    if (a.lokasi && a.lokasi.lat != null) return "https://www.google.com/maps/search/?api=1&query=" + a.lokasi.lat + "," + a.lokasi.lng;
    if (a.peta) return a.peta;
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent((a.tempat || "") + ", " + (a.alamat || ""));
  }
  function embedUrl(a) {
    var q = a.lokasi && a.lokasi.lat != null ? a.lokasi.lat + "," + a.lokasi.lng : (a.tempat || "") + ", " + (a.alamat || "");
    return "https://maps.google.com/maps?q=" + encodeURIComponent(q) + "&z=16&output=embed";
  }
  var acaraHtml = acara.map(function (a) {
    var t = tgl(a.tanggal) || {};
    var url = esc(petaUrl(a));
    return '<article class="event reveal"><h3>' + esc(a.nama) + '</h3>' +
      '<div class="day">' + esc((t.hari || "").toUpperCase()) + '</div><div class="bigdate">' + esc(t.tgl) + '</div>' +
      '<div class="day">' + esc(((t.bulan || "") + " " + (t.tahun || "")).toUpperCase()) + '</div>' +
      '<div class="time">' + esc(a.jam) + '</div><div class="place">' + esc(a.tempat) + '</div>' +
      '<a class="addr" href="' + url + '" target="_blank" rel="noopener"><address>' + esc(a.alamat) + '</address></a>' +
      ((a.lokasi && a.lokasi.lat != null) || a.alamat ? '<a class="map" href="' + url + '" target="_blank" rel="noopener" aria-label="Buka lokasi ' + esc(a.tempat) + ' di Google Maps">' +
        '<iframe src="' + esc(embedUrl(a)) + '" loading="lazy" tabindex="-1" title="Peta ' + esc(a.tempat) + '"></iframe><span>Ketuk untuk buka Google Maps</span></a>' : "") +
      '<a class="btn" href="' + url + '" target="_blank" rel="noopener">Lihat Lokasi</a></article>';
  }).join("");

  var cerita = D.cerita || [];
  var ceritaHtml = cerita.map(function (c) {
    return '<li class="reveal"><time>' + esc(String(c.waktu || "").toUpperCase()) + '</time><h4>' + esc(c.judul) + '</h4><p>' + esc(c.isi) + '</p></li>';
  }).join("");

  var galeri = Array.isArray(D.galeri) ? D.galeri.filter(function (g) { return g && (typeof g === "string" || g.src); }) : [];
  /* File yang hilang dibuang; bagian yang jadi kosong disembunyikan (tidak ada kotak kosong). */
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
    return '<figure tabindex="0" data-i="' + i + '" data-video="' + (isVideo(item) ? 1 : 0) + '" data-src="' + src + '">' + media + '<figcaption>' + (isVideo(item) ? "VIDEO " : "FOTO ") + (i + 1) + '</figcaption></figure>';
  }).join("");

  var rekening = D.rekening || [];
  var rekHtml = rekening.map(function (r, i) {
    return '<div class="acc reveal"><div><small>' + esc(r.bank) + ' · a.n. ' + esc(r.atasNama) + '</small><strong id="acc' + i + '">' + esc(r.nomor) + '</strong></div>' +
      '<button class="btn line" type="button" data-copy="acc' + i + '">Salin</button></div>';
  }).join("");

  var ayat = D.ayat || {};
  var cerah = function (id, judul, kicker, isi, tint) {
    return '<section id="' + id + '"' + (tint ? ' class="tint"' : "") + '><h2 class="reveal">' + judul + '</h2><p class="kicker reveal">' + kicker + '</p>' + isi + '</section>';
  };
  var navItems = [
    ["mempelai", "Couple", '<path d="M12 21s-7.5-4.6-10-9.3C.4 8.5 2.3 4.5 6 4.5c2.2 0 3.5 1.2 4.5 2.6 1-1.4 2.3-2.6 4.5-2.6 3.7 0 5.6 4 4 7.2C19.5 16.4 12 21 12 21z" fill="currentColor" stroke="none"/>'],
    ["acara", "Event", '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'],
    ["galeri", "Gallery", '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 17l-5-5-9 8"/>'],
    ["hadiah", "Gift", '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M3 13h18M12 9v12M12 9c-2-4-6-4-6-1s6 1 6 1zm0 0c2-4 6-4 6-1s-6 1-6 1z"/>'],
    ["ucapan", "Wishes", '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>']
  ].filter(function (n) {
    if (n[0] === "hadiah") return rekening.length;
    if (n[0] === "galeri") return galeri.length || videoHtml;
    return true;
  }).map(function (n) { return n[0] === "galeri" && !galeri.length ? ["video", "Video", n[2]] : n; });

  var html = (window.TEMA_TAMAN_GAMBAR || "") +
  '<div id="cover" role="dialog" aria-label="Sampul undangan"><div class="lace" aria-hidden="true"></div>' +
    '<svg class="scene tall" aria-hidden="true"><use href="#garden"/></svg><svg class="scene wide" aria-hidden="true"><use href="#gardenWide"/></svg>' +
    '<div class="cover-text"><div class="eyebrow">THE WEDDING OF</div><div class="mono" aria-hidden="true">' + monoHtml + '</div>' +
    '<div class="mono-sub">' + duaNama + '</div><div class="cover-bottom"><div class="guest"><small>Kepada Yth. Bapak/Ibu/Saudara/i</small>' +
    '<strong id="guestName">Tamu Undangan</strong></div><button class="btn-open" id="openBtn" type="button">Open Invitation</button></div></div></div>' +
  '<aside class="side" aria-hidden="true"><svg class="scene"><use href="#gardenWide"/></svg><div class="side-text"><div class="names">' + duaNama + '</div><p>' + tanggalPendek + '</p></div></aside>' +
  '<canvas id="petals" aria-hidden="true"></canvas>' +
  '<button class="music" id="musicBtn" type="button" aria-label="Putar atau hentikan musik"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 5h11v2H3zm0 4h11v2H3zm0 4h7v2H3zm13-8v9.2A3 3 0 1 0 18 17V8h3V5z"/></svg></button>' +
  '<audio id="music" loop preload="none"' + (D.musik ? ' src="' + esc(D.musik) + '"' : "") + '></audio>' +
  '<div class="app" id="app">' +
    '<div class="hero" id="top"><svg class="ghost-trees" aria-hidden="true"><use href="#ghost"/></svg>' +
      '<div class="birds" aria-hidden="true">' + new Array(5).join('<svg class="bird" viewBox="0 0 26 12"><path class="wing" d="M1 9Q7 1 13 9Q19 1 25 9"/></svg>') + '</div>' +
      '<div class="arch"><div class="arch-in"><svg class="ph" viewBox="0 0 300 260" aria-hidden="true"><circle cx="118" cy="96" r="34" fill="#fff" opacity=".75"/><circle cx="186" cy="84" r="36" fill="#fff" opacity=".75"/><path d="M50 260c4-70 34-110 68-110s50 30 60 70" fill="#fff" opacity=".75"/><path d="M130 260c6-80 28-128 56-128s54 44 62 128z" fill="#fff" opacity=".85"/></svg>' +
        '<div class="ph-label">Foto Pasangan</div>' + (D.fotoPasangan ? '<img src="' + esc(D.fotoPasangan) + '" alt="' + esc(nama1 + " dan " + nama2) + '" onerror="this.remove()">' : "") + '</div></div>' +
      '<svg class="deco cyp-l grow d1" viewBox="0 0 160 240" aria-hidden="true"><g class="sway"><use href="#cypress" x="0" y="20" width="60" height="220"/><use href="#cypress" x="44" y="0" width="64" height="240"/><use href="#cypress" x="96" y="50" width="50" height="190"/></g></svg>' +
      '<svg class="deco cyp-r grow d2" viewBox="0 0 120 240" aria-hidden="true"><g class="sway alt"><use href="#cypress" x="10" y="0" width="64" height="240"/><use href="#cypress" x="60" y="40" width="54" height="200"/></g></svg>' +
      '<svg class="deco rail grow d3" viewBox="0 0 200 90" aria-hidden="true"><use href="#rail"/></svg>' +
      '<svg class="deco urn grow d3" viewBox="0 0 120 180" aria-hidden="true"><g class="sway"><use href="#urn"/></g></svg>' +
      '<svg class="deco fl-l grow d4" viewBox="0 0 260 200" aria-hidden="true"><g class="sway"><use href="#bouquetL"/></g></svg>' +
      '<svg class="deco fl-r grow d5" viewBox="0 0 260 200" aria-hidden="true"><g class="sway alt"><use href="#bouquetR"/></g></svg>' +
      '<svg class="deco bf grow d6" viewBox="0 0 34 28" aria-hidden="true"><use href="#butterfly"/></svg></div>' +
    '<div class="title-block"><div class="eyebrow">THE WEDDING OF</div><div class="mono" aria-hidden="true">' + monoHtml + '</div><div class="names">' + duaNama + '</div><div class="date">' + esc(tanggalPanjang.toUpperCase()) + '</div></div>' +
    (ayat.teks ? '<section class="reveal"><p class="lead">“' + esc(ayat.teks) + '”<cite>' + esc(String(ayat.sumber || "").toUpperCase()) + '</cite></p></section>' : "") +
    cerah("mempelai", "Mempelai", "BRIDE &amp; GROOM", orang(pria, "") + '<div class="and reveal" aria-hidden="true">&amp;</div>' + orang(wanita, " b"), true) +
    cerah("acara", "Save the Date", "MENUJU HARI BAHAGIA",
      '<div class="countdown reveal"><div><b id="cd-d">00</b><span>Hari</span></div><div><b id="cd-h">00</b><span>Jam</span></div><div><b id="cd-m">00</b><span>Menit</span></div><div><b id="cd-s">00</b><span>Detik</span></div></div><div style="height:34px"></div>' + acaraHtml, false) +
    (cerita.length ? cerah("cerita", "Our Story", "CERITA KAMI", '<ol class="story">' + ceritaHtml + '</ol>', true) : "") +
    (videoHtml ? cerah("video", esc(vid.judul || "Our Moment"), "VIDEO KAMI", videoHtml, true) : "") +
    (galeri.length ? cerah("galeri", "Gallery", "MOMEN BAHAGIA", '<div class="gallery reveal">' + galeriHtml + '</div>', false) : "") +
    (rekening.length ? cerah("hadiah", "Wedding Gift", "TANDA KASIH", '<p class="lead reveal" style="margin-bottom:22px">Doa restu Anda adalah hadiah terindah. Bila ingin memberi tanda kasih, dapat melalui:</p><div class="gift">' + rekHtml + '</div>', true) : "") +
    cerah("ucapan", "Wishes", "KONFIRMASI KEHADIRAN &amp; UCAPAN",
      '<form class="rsvp reveal" id="rsvpForm"><div><label for="f-name">Nama</label><input id="f-name" name="nama" required placeholder="Nama Anda"></div>' +
      '<div><label for="f-att">Kehadiran</label><select id="f-att" name="hadir"><option>Hadir</option><option>Tidak Hadir</option><option>Masih Ragu</option></select></div>' +
      '<div><label for="f-pax">Jumlah Tamu</label><select id="f-pax" name="jumlah"><option>1</option><option selected>2</option><option>3</option><option>4</option></select></div>' +
      '<div><label for="f-msg">Ucapan &amp; Doa</label><textarea id="f-msg" name="ucapan" required placeholder="Tulis ucapan untuk kedua mempelai"></textarea></div>' +
      '<button class="btn" type="submit" style="justify-self:start;margin-top:2px">Kirim Ucapan</button><p class="toast" id="toast" role="status"></p></form><div class="wishes" id="wishes"></div>', false) +
    '<footer><p>' + esc(D.penutup || "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.") + '</p>' +
      '<div class="mono" aria-hidden="true" style="margin-top:18px">' + monoHtml + '</div><div style="font-family:var(--font-script);font-size:34px">' + duaNama + '</div></footer>' +
  '</div>' +
  '<div class="lightbox" id="lightbox" hidden><button type="button" class="lb-close" aria-label="Tutup">&times;</button><div class="lb-body" id="lbBody"></div></div>' +
  '<nav class="nav" aria-label="Navigasi undangan">' + navItems.map(function (n, i) {
    return '<a href="#' + n[0] + '"' + (i ? "" : ' class="on"') + ' aria-label="' + n[1] + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' + n[2] + '</svg><span>' + n[1] + '</span></a>';
  }).join("") + '</nav>';

  document.body.classList.add("locked");
  document.body.insertAdjacentHTML("afterbegin", html);

  /* ================= Interaksi ================= */
  var body = document.body;
  var WEDDING_DATE = new Date(D.tanggal || ((acara[0] && acara[0].tanggal) + "T08:00:00+07:00"));
  var SCRIPT_URL = D.ucapanScriptUrl || "";

  try {
    var to = new URLSearchParams(location.search).get("to");
    if (to) document.getElementById("guestName").textContent = to.slice(0, 60);
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
  document.getElementById("openBtn").addEventListener("click", function () {
    window.scrollTo(0, 0);
    cover.classList.add("open");
    body.classList.remove("locked");
    setTimeout(function () { body.classList.add("play"); startPetals(); }, 700);
    setTimeout(function () { cover.hidden = true; }, 1600);
    playMusic();
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

  var lb = document.getElementById("lightbox"), lbBody = document.getElementById("lbBody");
  function openLb(fig) {
    var src = fig.getAttribute("data-src");
    lbBody.innerHTML = fig.getAttribute("data-video") === "1"
      ? '<video src="' + src + '" controls autoplay playsinline></video>'
      : '<img src="' + src + '" alt="">';
    lb.hidden = false;
    if (!audio.paused && fig.getAttribute("data-video") === "1") { audio.pause(); musicBtn.classList.remove("spin"); lb.dataset.resume = "1"; }
  }
  function closeLb() {
    lb.hidden = true; lbBody.innerHTML = "";
    if (lb.dataset.resume) { delete lb.dataset.resume; playMusic(); }
  }
  document.querySelectorAll(".gallery figure").forEach(function (fig) {
    fig.addEventListener("click", function () { if (fig.querySelector("img,video")) openLb(fig); });
    fig.addEventListener("keydown", function (e) { if (e.key === "Enter" && fig.querySelector("img,video")) openLb(fig); });
  });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-close")) closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lb.hidden) closeLb(); });

  function startPetals() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var cv = document.getElementById("petals"), ctx = cv.getContext("2d"), W, H;
    var cols = ["#f2a6c8", "#e57aa9", "#f7d2e1", "#f4b77a", "#b9a3d6", "#a9bba3"];
    function rs() { var d = Math.min(2, window.devicePixelRatio || 1); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); }
    rs(); addEventListener("resize", rs);
    function r(a, b) { return a + Math.random() * (b - a); }
    function mk(top) { return { x: r(0, W), y: top ? -20 : r(-H, H), s: r(5, 10), vy: r(.5, 1.2), ph: r(0, 6.3), rot: r(0, 6.3), vr: r(-.03, .03), c: cols[Math.floor(Math.random() * cols.length)] }; }
    var ps = []; for (var i = 0; i < Math.min(28, Math.round(W / 30) + 10); i++) ps.push(mk(false));
    (function f() {
      ctx.clearRect(0, 0, W, H);
      ps.forEach(function (p, i) {
        p.ph += .02; p.y += p.vy; p.x += Math.sin(p.ph) * .8 + .2; p.rot += p.vr;
        if (p.y > H + 20) ps[i] = mk(true);
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(1, Math.cos(p.ph * 1.4) * .45 + .6);
        ctx.globalAlpha = .8; ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.moveTo(0, -p.s); ctx.bezierCurveTo(p.s, -p.s * .6, p.s * .7, p.s * .7, 0, p.s); ctx.bezierCurveTo(-p.s * .7, p.s * .7, -p.s, -p.s * .6, 0, -p.s); ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(f);
    })();
  }
})();
