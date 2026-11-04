/* ===== Mesin tema Jelajah: undangan berupa peta piksel yang dijelajahi dengan karakter =====
   Dipakai oleh tema jelajah-gedung, jelajah-pantai, dan jelajah-hutan (lihat tema/<id>/tema.js).
   Isi undangan tetap dibuat oleh tema/inti/inti.js; tiap bagian (mempelai, acara, galeri, ...) dipindah
   ke jendela yang terbuka saat karakter sampai di tempatnya. */
(function () {
  var T = 16; // ukuran satu petak dalam piksel asli

  /* ---------- Peta tiap latar (20 kolom) ----------
     .  lantai/rumput   ,  jalan/karpet   s pasir   w pasir basah   ~ air   = jembatan/papan
     #  dinding   T pohon   P kelapa   b semak   f bunga   L lampu   c kursi   o meja   u payung */
  var LATAR = {
    gedung: {
      peta: [
        "####################",
        "####################",
        "#..................#",
        "#..................#",
        "#..................#",
        "#........,,........#",
        "#........,,........#",
        "#..o..o..,,..o..o..#",
        "#........,,........#",
        "#........,,........#",
        "#..o..o..,,..o..o..#",
        "#........,,........#",
        "#........,,........#",
        "#..o..o..,,..o..o..#",
        "#........,,........#",
        "#........,,........#",
        "#........,,........#",
        "#........,,........#",
        "#########,,#########",
        "bf..L...f,,f...L..fb",
        "b.......,,,,.......b",
        "b..T....,,,,....T..b",
        "b.......,,,,.......b",
        "bbbbbbbb,,,,bbbbbbbb"
      ],
      tempat: {
        mempelai: { x: 7, y: 2, w: 6, h: 3, obj: "pelaminan" },
        galeri: { x: 2, y: 2, w: 2, h: 2, obj: "easel" },
        hadiah: { x: 16, y: 2, w: 2, h: 2, obj: "kado" },
        cerita: { x: 2, y: 15, w: 2, h: 1, obj: "bingkai" },
        acara: { x: 16, y: 15, w: 2, h: 1, obj: "papan" },
        ucapan: { x: 5, y: 17, w: 2, h: 1, obj: "meja-tamu", ty: 16 }
      },
      hias: [{ t: "lampu-gantung", x: 4.5, y: 8.5 }, { t: "lampu-gantung", x: 15.5, y: 8.5 }, { t: "lampu-gantung", x: 4.5, y: 14 }, { t: "lampu-gantung", x: 15.5, y: 14 }, { t: "lampu-gantung", x: 10, y: 11.5 }],
      awal: { x: 9.5, y: 22.2 }, kamera: { x: 10, y: 6 },
      warna: { latar: "#3b2a20" }
    },
    pantai: {
      peta: [
        "~~~~~~~~~~~~~~~~~~~~",
        "~~~~~~~~~~~~~~~~~~~~",
        "~~~~~~~~~~~~~~~~~~~~",
        "wwwwwwwwwwwwwwwwwwww",
        "ssssssssssssssssssss",
        "sPssssssssssssssssPs",
        "ssssssss,,,,ssssssss",
        "sssccccs,,,,sccccsss",
        "ssssssss,,,,ssssssss",
        "sssccccs,,,,sccccsss",
        "ssssssss,,,,ssssssss",
        "sssccccs,,,,sccccsss",
        "ssssssss,,,,ssssssss",
        "sPssssss,,,,ssssssPs",
        "ssssssss,,,,ssssssss",
        "ssssssss,,,,ssssssss",
        "ssssssss,,,,ssssssss",
        "sssPssss,,,,ssssPsss",
        "ssssssss,,,,ssssssss",
        "sssssssss==sssssssss",
        "bbbbbbbbb==bbbbbbbbb",
        "bbbbbbbbb==bbbbbbbbb"
      ],
      tempat: {
        mempelai: { x: 8, y: 4, w: 4, h: 2, obj: "gapura-pantai" },
        galeri: { x: 1, y: 15, w: 2, h: 1, obj: "easel" },
        hadiah: { x: 15, y: 15, w: 2, h: 1, obj: "kado" },
        cerita: { x: 2, y: 9, w: 1, h: 1, obj: "bingkai", ty: 10 },
        acara: { x: 17, y: 9, w: 1, h: 1, obj: "papan", ty: 10 },
        ucapan: { x: 5, y: 18, w: 2, h: 1, obj: "meja-tamu", ty: 17 }
      },
      hias: [{ t: "payung", x: 2, y: 13.6 }, { t: "payung", x: 16.5, y: 13.6 }],
      awal: { x: 9.5, y: 20.6 }, kamera: { x: 10, y: 6 },
      warna: { latar: "#2c8fb3" }
    },
    hutan: {
      peta: [
        "TTTTTTTTTTTTTTTTTTTT",
        "TTTTTTTTTTTTTTTTTTTT",
        "TT................TT",
        "T..................T",
        "T..................T",
        "T.f......,,......f.T",
        "T..L.cc..,,..cc.L..T",
        "T........,,........T",
        "T....cc..,,..cc....T",
        "T........,,........T",
        "Tb.......,,.......bT",
        "~~~~~~~~~==~~~~~~~~~",
        "~~~~~~~~~==~~~~~~~~~",
        "T........,,........T",
        "T.....o..,,..o.....T",
        "T........,,........T",
        "TT.......,,.......TT",
        "T.f......,,.....f..T",
        "TT.......,,.......TT",
        "TTT......,,......TTT",
        "TTTTTTTT.,,.TTTTTTTT",
        "TTTTTTTT.,,.TTTTTTTT"
      ],
      tempat: {
        mempelai: { x: 8, y: 2, w: 4, h: 2, obj: "gapura-hutan" },
        galeri: { x: 2, y: 3, w: 2, h: 1, obj: "easel" },
        hadiah: { x: 16, y: 3, w: 2, h: 1, obj: "kado" },
        cerita: { x: 2, y: 15, w: 2, h: 1, obj: "bingkai" },
        acara: { x: 15, y: 15, w: 2, h: 1, obj: "papan" },
        ucapan: { x: 5, y: 18, w: 2, h: 1, obj: "meja-tamu", ty: 17 }
      },
      hias: [{ t: "lampu-tali", x: 1, y: 6, x2: 9, y2: 6 }, { t: "lampu-tali", x: 11, y: 6, x2: 19, y2: 6 }],
      awal: { x: 9.5, y: 20.6 }, kamera: { x: 10, y: 6 },
      warna: { latar: "#1f3a24" }
    }
  };
  var AKSEN = { gedung: "#9a2f3c", pantai: "#d0654a", hutan: "#3f7d3a" };
  var NAMA_TEMPAT = { mempelai: "Mempelai", acara: "Acara", cerita: "Kisah Kami", galeri: "Foto & Video", hadiah: "Kado", ucapan: "Ucapan & RSVP" };
  var ISI_TEMPAT = { mempelai: ["mempelai"], acara: ["acara"], cerita: ["cerita"], galeri: ["galeri", "video"], hadiah: ["hadiah"], ucapan: ["ucapan"] };
  var URUT_TUR = ["ucapan", "cerita", "acara", "galeri", "mempelai", "hadiah"];

  /* ---------- Alat gambar halus ---------- */
  function acak(x, y, k) { var n = Math.sin(x * 127.1 + y * 311.7 + (k || 0) * 74.7) * 43758.5453; return n - Math.floor(n); }
  var GARIS = "rgba(70,42,24,.55)";
  function kotak(g, x, y, w, h, c) { g.fillStyle = c; g.fillRect(x, y, w, h); }
  function elips(g, cx, cy, rx, ry, c, garis) { g.beginPath(); g.ellipse(cx, cy, Math.max(.01, rx), Math.max(.01, ry), 0, 0, 6.2832); if (c) { g.fillStyle = c; g.fill(); } if (garis) { g.strokeStyle = garis === true ? GARIS : garis; g.lineWidth = .45; g.stroke(); } }
  function lingkaran(g, cx, cy, r, c, garis) { elips(g, cx, cy, r, r, c, garis); }
  function jalurBulat(g, x, y, w, h, r) { r = Math.min(r, w / 2, h / 2); g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function bulatIsi(g, x, y, w, h, r, c, garis) { jalurBulat(g, x, y, w, h, r); if (c) { g.fillStyle = c; g.fill(); } if (garis) { g.strokeStyle = garis === true ? GARIS : garis; g.lineWidth = .45; g.stroke(); } }
  function gradV(g, y0, y1, a, b) { var gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, a); gr.addColorStop(1, b); return gr; }
  function cahaya(g, cx, cy, r, warna, kuat) {
    var gr = g.createRadialGradient(cx, cy, 0, cx, cy, r);
    gr.addColorStop(0, "rgba(" + warna + "," + (kuat || .5) + ")"); gr.addColorStop(1, "rgba(" + warna + ",0)");
    g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, r, 0, 6.2832); g.fill();
  }
  function bayangan(g, cx, cy, rx, ry) { elips(g, cx, cy, rx, ry, "rgba(40,30,20,.18)"); }
  function bungaKecil(g, x, y, r, warna, tengah) {
    for (var i = 0; i < 5; i++) { var a = i * 1.2566; lingkaran(g, x + Math.cos(a) * r, y + Math.sin(a) * r, r * .85, warna); }
    lingkaran(g, x, y, r * .6, tengah || "#f7c948");
  }

  /* ---------- Orang (digambar dengan bentuk halus, gaya kartun) ---------- */
  var PALET = {
    pria: { kulit: "#f1c29b", rambut: "#3a2618", atas: "#f7f4ec", atas2: "#3d6aa8", bawah: "#2f3445", sepatu: "#3b2a1d", gaya: "rompi" },
    wanita: { kulit: "#f3c7a3", rambut: "#3a2618", atas: "#9cc7a8", atas2: "#e9f4eb", bawah: "#7a5136", motif: "#e2b36a", sepatu: "#8a5a3b", gaya: "kebaya", hias: "#ffffff" },
    mpria: { kulit: "#e8b58c", rambut: "#2a1b12", atas: "#f6e8c6", atas2: "#c9a24a", bawah: "#6b4a2e", motif: "#d8b25a", sepatu: "#3b2a1d", gaya: "beskap", kepala: "blangkon" },
    mwanita: { kulit: "#f0c09a", rambut: "#2a1b12", atas: "#fffaf2", atas2: "#d9b25a", bawah: "#c9a24a", motif: "#fff1c4", sepatu: "#c9a24a", gaya: "kebaya", kepala: "siger", hias: "#ffffff" },
    resepsionis: { kulit: "#e6b48c", rambut: "#3a2418", atas: "#d86b7a", atas2: "#f6d3d8", bawah: "#4a3a5a", motif: "#b6a6cc", sepatu: "#3b2a1d", gaya: "kebaya", hias: "#ffd36e" }
  };
  /* o: {jenis: pria|wanita, palet, arah: bawah|atas|kiri|kanan, jalan, anim}; kaki di (x, y), tinggi sekitar 24 */
  function gambarOrang(g, o, x, y, t) {
    var P = PALET[o.palet], cewek = o.jenis === "wanita";
    var ay = o.jalan ? Math.sin(o.anim * 1.25) : 0, naik = o.jalan ? Math.abs(Math.sin(o.anim * 1.25)) * .7 : Math.sin(t * 2.2 + x) * .15;
    var samping = o.arah === "kiri" || o.arah === "kanan", belakang = o.arah === "atas";
    bayangan(g, x, y, 5.2, 1.8);
    g.save(); g.translate(x, y - naik);
    if (o.arah === "kiri") g.scale(-1, 1);
    // kaki & bawahan
    if (cewek || P.gaya === "beskap") {
      if (samping) { elips(g, 1.6 + ay * 1.6, -.4, 1.5, .9, P.sepatu); elips(g, -1.2 - ay * 1.6, -.4, 1.5, .9, P.sepatu); }
      else { elips(g, -1.6, -.4 - Math.max(0, ay) * .8, 1.3, .9, P.sepatu); elips(g, 1.6, -.4 - Math.max(0, -ay) * .8, 1.3, .9, P.sepatu); }
      g.beginPath(); var lb = samping ? 3.6 : 4.4, sw = samping ? ay * .8 : 0;
      g.moveTo(-3.1, -10); g.lineTo(3.1, -10); g.quadraticCurveTo(lb + .6 + sw, -5, lb + sw, -.9); g.quadraticCurveTo(0, -.2, -lb + sw, -.9); g.quadraticCurveTo(-lb - .6 + sw, -5, -3.1, -10); g.closePath();
      g.fillStyle = P.bawah; g.fill(); g.strokeStyle = GARIS; g.lineWidth = .45; g.stroke();
      g.save(); g.clip(); g.strokeStyle = P.motif; g.lineWidth = .5; g.globalAlpha = .9;
      for (var i = -9; i < 0; i += 2.2) { g.beginPath(); for (var k = -6; k <= 6; k += 1.5) g.lineTo(k, i + ((k / 1.5) % 2 ? .6 : -.2)); g.stroke(); }
      g.restore();
    } else {
      var kk = samping ? [[-1 - ay * 1.8, 1], [1 + ay * 1.8, 1]] : [[-1.7, Math.max(0, ay)], [1.7, Math.max(0, -ay)]];
      kk.forEach(function (k) { var kx = k[0], kz = samping ? 0 : k[1] * 1; bulatIsi(g, kx - 1.35, -7.5 - kz, 2.7, 6.6, 1.2, P.bawah, true); elips(g, kx + (samping ? .5 : 0), -.6 - kz, samping ? 1.7 : 1.4, .95, P.sepatu); });
    }
    // badan
    var bw = samping ? 6.2 : 8.4;
    g.beginPath(); g.moveTo(-bw / 2 + .5, -15.5); g.quadraticCurveTo(-bw / 2 - .4, -12, -bw / 2 + .2, -8.6); g.lineTo(bw / 2 - .2, -8.6); g.quadraticCurveTo(bw / 2 + .4, -12, bw / 2 - .5, -15.5); g.closePath();
    g.fillStyle = belakang && P.gaya === "rompi" ? P.atas2 : P.atas; g.fill(); g.strokeStyle = GARIS; g.lineWidth = .45; g.stroke();
    g.save(); g.clip();
    if (P.gaya === "rompi" && !belakang) { kotak(g, -bw / 2 - 1, -16, samping ? 3.4 : 3, 8, P.atas2); if (!samping) { kotak(g, bw / 2 - 2, -16, 3, 8, P.atas2); elips(g, 0, -14.6, 1.3, .7, "#9b2f3a"); } }
    if (P.gaya === "kebaya" && !belakang) { g.fillStyle = P.atas2; g.beginPath(); g.moveTo(-1.6, -15.6); g.lineTo(0, -11.5); g.lineTo(1.6, -15.6); g.fill(); kotak(g, -bw / 2 - 1, -9.6, bw + 2, 1, P.atas2); }
    if (P.gaya === "beskap") { kotak(g, -bw / 2 - 1, -9.4, bw + 2, 1, P.atas2); if (!belakang && !samping) for (var b = 0; b < 3; b++) lingkaran(g, 1.2, -14.4 + b * 1.6, .45, P.atas2); }
    g.restore();
    // lengan
    function lengan(lx, ly) { bulatIsi(g, lx - 1.1, ly, 2.2, 5.6, 1.1, P.gaya === "rompi" ? P.atas : P.atas, true); lingkaran(g, lx, ly + 5.6, 1.05, P.kulit, true); }
    if (samping) lengan(ay * 1.2, -15);
    else { lengan(-bw / 2 - .6, -15 + (o.jalan ? ay * .7 : 0)); lengan(bw / 2 + .6, -15 - (o.jalan ? ay * .7 : 0)); }
    // kepala
    var hy = -20.2, hr = 5.3;
    if (cewek && (belakang || samping)) lingkaran(g, samping ? -3.2 : 0, hy - (samping ? 2.4 : 3.6), 2.4, P.rambut, true); // sanggul
    lingkaran(g, 0, hy, hr, P.kulit, true);
    g.save(); jalurBulat(g, -hr - 1, hy - hr - 2, hr * 2 + 2, hr * 2 + 3, 0); g.beginPath(); g.arc(0, hy, hr, 0, 6.2832); g.clip();
    g.fillStyle = P.rambut;
    if (belakang) g.fillRect(-hr, hy - hr, hr * 2, hr * 2 - (cewek ? .5 : 1.8));
    else if (samping) { g.beginPath(); g.moveTo(-hr, hy + 3); g.lineTo(-hr, hy - hr); g.lineTo(hr, hy - hr); g.lineTo(hr, hy - 2.2); g.quadraticCurveTo(1.5, hy - 2.8, .6, hy - 1); g.quadraticCurveTo(-.6, hy + 1.6, -1.2, hy + (cewek ? 4 : 2.6)); g.closePath(); g.fill(); }
    else {
      g.beginPath(); g.moveTo(-hr, hy + (cewek ? 2.5 : .8)); g.lineTo(-hr, hy - hr); g.lineTo(hr, hy - hr); g.lineTo(hr, hy + (cewek ? 2.5 : .8));
      g.quadraticCurveTo(hr - .6, hy - 2.4, 1.4, hy - 2.6); g.quadraticCurveTo(0, hy - 1.6, -.6, hy - 2.9); g.quadraticCurveTo(-3.5, hy - 2.5, -hr, hy + (cewek ? 2.5 : .8)); g.closePath(); g.fill();
    }
    g.restore();
    g.beginPath(); g.arc(0, hy, hr, 0, 6.2832); g.strokeStyle = GARIS; g.lineWidth = .45; g.stroke();
    if (cewek && !belakang && !samping) lingkaran(g, 0, hy - 5.6, 2.3, P.rambut, true);
    // wajah
    if (!belakang) {
      var ex = samping ? [2.6] : [-2, 2];
      ex.forEach(function (e) { elips(g, e, hy + .6, .62, .85, "#2a1b12"); lingkaran(g, e + .22, hy + .25, .22, "#ffffff"); elips(g, e + (samping ? .3 : (e < 0 ? -.5 : .5)), hy + 2.2, .9, .55, "rgba(240,120,120,.45)"); });
      g.beginPath(); if (samping) g.arc(3.4, hy + 2.6, .7, 1.2, 2.6); else g.arc(0, hy + 2.3, .9, .35, 2.8); g.strokeStyle = "#8a4b3a"; g.lineWidth = .4; g.stroke();
    }
    // hiasan kepala
    if (P.kepala === "blangkon") {
      g.save(); g.beginPath(); g.arc(0, hy, hr + .25, Math.PI * 1.02, Math.PI * 1.98); g.lineTo(hr + .2, hy - 1.2); g.lineTo(-hr - .2, hy - 1.2); g.closePath();
      g.fillStyle = "#5a3d22"; g.fill(); g.strokeStyle = GARIS; g.lineWidth = .45; g.stroke(); g.clip();
      g.strokeStyle = "#c9a24a"; g.lineWidth = .4; for (var m = -6; m < 6; m += 1.6) { g.beginPath(); g.moveTo(m, hy - 6); g.lineTo(m + 2.4, hy - 1); g.stroke(); }
      g.restore();
      if (belakang || samping) lingkaran(g, samping ? -4.6 : 0, hy - .4, 1.6, "#5a3d22", true);
    } else if (P.kepala === "siger") {
      g.beginPath(); g.moveTo(-4.4, hy - 3.6); g.lineTo(-3, hy - 7.6); g.lineTo(-1.4, hy - 5.6); g.lineTo(0, hy - 9); g.lineTo(1.4, hy - 5.6); g.lineTo(3, hy - 7.6); g.lineTo(4.4, hy - 3.6); g.quadraticCurveTo(0, hy - 5.2, -4.4, hy - 3.6);
      g.fillStyle = "#e6bf55"; g.fill(); g.strokeStyle = "#9c7a2a"; g.lineWidth = .4; g.stroke();
      lingkaran(g, 0, hy - 6.6, .7, "#fff7d6");
      if (!belakang) { for (var j = -1; j <= 1; j += 2) { g.strokeStyle = "rgba(255,255,255,.9)"; g.lineWidth = .7; g.beginPath(); g.moveTo(j * 4.6, hy - 1); g.quadraticCurveTo(j * 6, hy + 4, j * 4.8, hy + 7); g.stroke(); } }
    } else if (cewek && P.hias) {
      var fx = belakang ? 0 : samping ? -3.2 : 1.8, fy = belakang ? hy - 5.2 : samping ? hy - 4.4 : hy - 6.4;
      bungaKecil(g, fx, fy, .75, P.hias);
    }
    g.restore();
  }
  function potretOrang(cv, jenis, palet, potong) {
    var g = cv.getContext("2d"), s = potong ? cv.width / 13 : cv.height / 27;
    g.clearRect(0, 0, cv.width, cv.height);
    g.save(); g.scale(s, s);
    if (potong) g.translate(6.5, 26 + 0); else g.translate(cv.width / s / 2, 26);
    gambarOrang(g, { jenis: jenis, palet: palet, arah: "bawah", jalan: false, anim: 0 }, 0, 0, 0);
    g.restore();
  }

  /* ---------- Petak tanah ---------- */
  function rumput(g, X, Y, tx, ty, gelap) {
    kotak(g, X - .02, Y - .02, T + .04, T + .04, gelap ? "#64a24a" : "#7cbd5a");
    for (var i = 0; i < 2; i++) elips(g, X + acak(tx, ty, i) * T, Y + acak(ty, tx, i + 5) * T, 3 + acak(tx, i, ty) * 3, 2 + acak(i, ty, tx) * 2, gelap ? "rgba(90,150,64,.55)" : "rgba(146,206,110,.5)");
    g.strokeStyle = gelap ? "#548c3d" : "#64a447"; g.lineWidth = .5; g.lineCap = "round";
    for (i = 0; i < 3; i++) { var x = X + 2 + acak(tx, ty, i + 9) * 12, y = Y + 3 + acak(ty, tx, i + 12) * 11; g.beginPath(); g.moveTo(x - 1, y - 1.6); g.lineTo(x, y); g.lineTo(x + 1, y - 1.8); g.stroke(); }
  }
  function lantaiMarmer(g, X, Y, tx, ty) {
    kotak(g, X, Y, T, T, (tx + ty) % 2 ? "#f3eee4" : "#e9e0cf");
    g.strokeStyle = "rgba(150,128,96,.3)"; g.lineWidth = .35; g.strokeRect(X + .2, Y + .2, T - .4, T - .4);
    if (acak(tx, ty) > .5) { g.strokeStyle = "rgba(175,155,125,.16)"; g.lineWidth = .35; g.beginPath(); var a = acak(ty, tx) * 10; g.moveTo(X + 2, Y + 3 + a * .6); g.bezierCurveTo(X + 6, Y + a, X + 9, Y + 12 - a * .5, X + 14, Y + 6 + a * .4); g.stroke(); }
    kotak(g, X + 1, Y + 1, 5, .6, "rgba(255,255,255,.55)");
  }
  function karpet(g, X, Y, kiri, kanan, tx, ty) {
    kotak(g, X - .02, Y, T + .04, T, "#b3343f");
    g.fillStyle = "rgba(240,196,110,.28)"; g.beginPath(); g.moveTo(X + 8, Y + 4); g.lineTo(X + 11, Y + 8); g.lineTo(X + 8, Y + 12); g.lineTo(X + 5, Y + 8); g.closePath(); g.fill();
    if (kiri) { kotak(g, X, Y, 2, T, "#d9b260"); kotak(g, X + 2, Y, .5, T, "#8f2830"); }
    if (kanan) { kotak(g, X + 14, Y, 2, T, "#d9b260"); kotak(g, X + 13.5, Y, .5, T, "#8f2830"); }
  }
  function pasir(g, X, Y, tx, ty, basah) {
    kotak(g, X - .02, Y - .02, T + .04, T + .04, basah ? "#e6cf9b" : "#f3e1b1");
    for (var i = 0; i < 5; i++) lingkaran(g, X + acak(tx, ty, i) * T, Y + acak(ty, tx, i + 3) * T, .3 + acak(i, tx, ty) * .3, i % 2 ? "rgba(205,170,110,.55)" : "rgba(255,248,225,.8)");
    if (acak(tx, ty, 77) > .93 && !basah) { g.fillStyle = "#f2a28a"; g.beginPath(); g.moveTo(X + 6, Y + 9); g.quadraticCurveTo(X + 8, Y + 5, X + 10, Y + 9); g.closePath(); g.fill(); }
  }
  function air(g, X, Y, tx, ty) {
    kotak(g, X - .02, Y - .02, T + .04, T + .04, "#43a9cd");
    elips(g, X + acak(tx, ty) * T, Y + acak(ty, tx) * T, 4, 1.5, "rgba(120,205,230,.35)");
  }
  function kelopakJalan(g, X, Y, tx, ty, kiri, kanan) {
    pasir(g, X, Y, tx, ty);
    var x0 = X + (kiri ? 2 : -.02), x1 = X + T - (kanan ? 2 : -.02);
    kotak(g, x0, Y - .02, x1 - x0, T + .04, "#fbf7ef");
    if (kiri) kotak(g, x0, Y, .5, T, "#e8dcc4"); if (kanan) kotak(g, x1 - .5, Y, .5, T, "#e8dcc4");
    var w = ["#f6a9c0", "#ffffff", "#fbc6a4", "#f28aa7"];
    for (var i = 0; i < 4; i++) { g.save(); g.translate(X + 2 + acak(tx, ty, i + 20) * 12, Y + 1 + acak(ty, tx, i + 30) * 14); g.rotate(acak(i, tx, ty) * 6); elips(g, 0, 0, 1.1, .6, w[i % 4]); g.restore(); }
  }
  function jalanBatu(g, X, Y, tx, ty) {
    kotak(g, X - .02, Y - .02, T + .04, T + .04, "#dcc79c");
    for (var i = 0; i < 4; i++) lingkaran(g, X + acak(tx, ty, i + 60) * T, Y + acak(ty, tx, i + 61) * T, .35 + acak(i, ty, tx) * .4, i % 2 ? "rgba(170,140,95,.6)" : "rgba(250,240,215,.8)");
    if (acak(tx, ty, 62) > .45) { var bx = X + 2 + acak(tx, ty, 63) * 8, by = Y + 2 + acak(ty, tx, 64) * 8; elips(g, bx + 2.5, by + 2, 3.2, 2.2, "#e9dcbd", "rgba(150,125,85,.55)"); elips(g, bx + 1.8, by + 1.4, 1.4, .6, "rgba(255,255,255,.55)"); }
  }
  function papanKayu(g, X, Y, diAir, tx, ty) {
    if (diAir) air(g, X, Y, tx, ty);
    for (var i = 0; i < 4; i++) { bulatIsi(g, X + 1, Y + i * 4 + .3, 14, 3.5, .8, i % 2 ? "#b88a5b" : "#a97c4f", "rgba(90,58,30,.6)"); lingkaran(g, X + 2.5, Y + i * 4 + 2, .35, "#6b4426"); lingkaran(g, X + 13.5, Y + i * 4 + 2, .35, "#6b4426"); }
    if (diAir) { bulatIsi(g, X - .5, Y, 2, T, .8, "#7a5130", true); bulatIsi(g, X + 14.5, Y, 2, T, .8, "#7a5130", true); }
  }
  function dinding(g, X, Y, atas, tx) {
    if (atas) { kotak(g, X - .02, Y - .02, T + .04, T + .04, "#5a3e2e"); return; }
    kotak(g, X - .02, Y, T + .04, T, gradV(g, Y, Y + T, "#f7eedc", "#eadcc0"));
    kotak(g, X - .02, Y, T + .04, 1.2, "#d9b260");
    kotak(g, X - .02, Y + 9, T + .04, 7, gradV(g, Y + 9, Y + T, "#97633f", "#7a4d30"));
    kotak(g, X - .02, Y + 9, T + .04, .8, "#e2bf6e");
    bulatIsi(g, X + 2.5, Y + 10.8, 11, 3.6, .8, null, "rgba(60,35,20,.45)");
    if (tx % 3 === 0) { cahaya(g, X + 8, Y + 4.5, 7, "255,226,150", .45); bulatIsi(g, X + 6.6, Y + 2.5, 2.8, 4, 1, "#e2bf6e", true); elips(g, X + 8, Y + 3.6, .8, 1.1, "#fff6d6"); }
  }
  function semak(g, X, Y, tx, ty, alas) {
    alas();
    bayangan(g, X + 8, Y + 13.5, 7, 2.2);
    [[4.5, 9, 4.6], [11, 9, 4.6], [8, 6, 5.2], [8, 10.5, 5]].forEach(function (c) { lingkaran(g, X + c[0], Y + c[1], c[2], "#3f8a3e"); });
    [[4, 8, 3.2], [10.5, 8, 3.2], [7.5, 5, 3.6]].forEach(function (c) { lingkaran(g, X + c[0], Y + c[1], c[2], "#54a24c"); });
    lingkaran(g, X + 6.4, Y + 3.8, 1.5, "rgba(170,225,140,.6)");
    if (acak(tx, ty) > .45) { bungaKecil(g, X + 4.5, Y + 7, .8, "#f6a9c0"); bungaKecil(g, X + 11.5, Y + 9.5, .8, "#ffffff"); }
  }
  function bunga(g, X, Y, tx, ty) {
    var w = ["#f6a9c0", "#ffffff", "#fbd38d", "#c9a0e8"];
    for (var i = 0; i < 5; i++) { var x = X + 3 + acak(tx, ty, i + 40) * 10, y = Y + 3 + acak(ty, tx, i + 50) * 10; g.strokeStyle = "#4f8f3e"; g.lineWidth = .5; g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 2.6); g.stroke(); bungaKecil(g, x, y, .8, w[i % 4]); }
  }
  function rumputPantai(g, X, Y, tx, ty) {
    pasir(g, X, Y, tx, ty);
    g.strokeStyle = "#93ad57"; g.lineWidth = .6; g.lineCap = "round";
    for (var i = 0; i < 6; i++) { var x = X + 1.5 + i * 2.5 + acak(tx, ty, i) * 1.5, h = 6 + acak(ty, tx, i) * 5, c = (acak(i, tx, ty) - .5) * 4; g.beginPath(); g.moveTo(x, Y + 14); g.quadraticCurveTo(x + c * .4, Y + 14 - h * .6, x + c, Y + 14 - h); g.stroke(); }
  }

  /* ---------- Objek tinggi: bagian bawah di lapisan tanah, bagian atas di lapisan atas ---------- */
  function pohon(gt, ga, X, Y, tx, ty) {
    bayangan(gt, X + 8, Y + 14.5, 7, 2.4);
    bulatIsi(gt, X + 6, Y + 4, 4, 11, 1.5, gradV(gt, Y, Y + 15, "#8a5a33", "#6b4426"), true);
    var cx = X + 8, cy = Y - 1;
    lingkaran(ga, cx, cy + 1.5, 11, "#2f6e35", "rgba(30,60,30,.5)");
    lingkaran(ga, cx - 3, cy - 2, 7.5, "#3d8240");
    lingkaran(ga, cx + 3.5, cy - 1, 6.5, "#3d8240");
    lingkaran(ga, cx - 3.5, cy - 4.5, 4, "#57a04f");
    lingkaran(ga, cx + 2, cy - 5, 2.6, "rgba(140,205,120,.55)");
    if (acak(tx, ty) > .6) { lingkaran(ga, cx + 4, cy + 2, 1, "#e85a5a"); lingkaran(ga, cx - 5, cy + 4, 1, "#e85a5a"); lingkaran(ga, cx + 1, cy - 2, 1, "#e85a5a"); }
  }
  function kelapa(gt, ga, X, Y) {
    bayangan(gt, X + 10, Y + 14.5, 6, 2);
    function batang(g, y0, y1) {
      g.strokeStyle = "#8a6a45"; g.lineWidth = 3.2; g.lineCap = "round"; g.beginPath(); g.moveTo(X + 8, Y + 14); g.quadraticCurveTo(X + 6, Y - 2, X + 10, Y - 16); g.stroke();
      g.strokeStyle = "#6e5233"; g.lineWidth = .5;
      for (var i = 0; i < 12; i++) { var t = i / 12, px = (1 - t) * (1 - t) * (X + 8) + 2 * (1 - t) * t * (X + 6) + t * t * (X + 10), py = (1 - t) * (1 - t) * (Y + 14) + 2 * (1 - t) * t * (Y - 2) + t * t * (Y - 16); if (py > y0 && py < y1) { g.beginPath(); g.moveTo(px - 1.6, py); g.lineTo(px + 1.6, py - .6); g.stroke(); } }
    }
    batang(gt, Y + 1, Y + 20); batang(ga, Y - 30, Y + 1);
    var cx = X + 10, cy = Y - 16;
    [[-1, .15], [1, .1], [-.75, .7], [.8, .7], [-.4, -.6], [.45, -.65], [0, .9]].forEach(function (d, k) {
      var ex = cx + d[0] * 13, ey = cy + d[1] * 8 + 4;
      ga.beginPath(); ga.moveTo(cx, cy); ga.quadraticCurveTo(cx + d[0] * 7, cy + d[1] * 4 - 4, ex, ey);
      ga.quadraticCurveTo(cx + d[0] * 7 + 1.4, cy + d[1] * 4 - 1, cx, cy + 1); ga.closePath();
      ga.fillStyle = k % 2 ? "#3a8a4c" : "#2f7a42"; ga.fill(); ga.strokeStyle = "rgba(20,60,30,.5)"; ga.lineWidth = .4; ga.stroke();
    });
    lingkaran(ga, cx - 1.4, cy + 1.6, 1.5, "#7a5530", true); lingkaran(ga, cx + 1.2, cy + 2.2, 1.5, "#6b4426", true);
  }
  function kursi(g, X, Y, latar) {
    if (latar === "hutan") {
      bayangan(g, X + 8, Y + 13, 7.5, 1.8);
      bulatIsi(g, X + 2, Y + 9, 2, 4.5, .6, "#6b4426"); bulatIsi(g, X + 12, Y + 9, 2, 4.5, .6, "#6b4426");
      bulatIsi(g, X + .5, Y + 6, 15, 4, 1.2, gradV(g, Y + 6, Y + 10, "#b4844f", "#8a5a33"), true);
      kotak(g, X + 1.5, Y + 7, 13, .5, "rgba(255,255,255,.3)");
      return;
    }
    bayangan(g, X + 8, Y + 13.6, 4.8, 1.4);
    kotak(g, X + 4.6, Y + 9, .9, 4.6, "#d8d0c0"); kotak(g, X + 10.5, Y + 9, .9, 4.6, "#d8d0c0");
    bulatIsi(g, X + 4, Y + 2, 8, 6.5, 2, "#ffffff", "rgba(140,120,90,.6)");
    for (var i = 0; i < 3; i++) kotak(g, X + 5.6 + i * 2, Y + 3.2, .5, 4.4, "#e7e0d2");
    bulatIsi(g, X + 3.6, Y + 7.8, 8.8, 2.4, 1, "#f6f2ea", "rgba(140,120,90,.6)");
    elips(g, X + 6.6, Y + 2.6, 1.2, .8, "#f6a9c0"); elips(g, X + 9.4, Y + 2.6, 1.2, .8, "#f6a9c0"); lingkaran(g, X + 8, Y + 2.7, .6, "#e57a9a");
  }
  function meja(g, X, Y, latar) {
    if (latar === "hutan") {
      bayangan(g, X + 8, Y + 13, 13, 2.6);
      bulatIsi(g, X - 4, Y + 2, 24, 3, 1, "#8a5a33", true); bulatIsi(g, X - 4, Y + 11, 24, 3, 1, "#8a5a33", true);
      bulatIsi(g, X - 2, Y + 4.6, 20, 7, 1.4, gradV(g, Y + 4, Y + 12, "#c09060", "#9a6b40"), true);
      kotak(g, X + 5, Y + 4.6, 6, 7, "rgba(255,255,255,.75)");
      bungaKecil(g, X + 8, Y + 7.5, .9, "#f6a9c0"); bungaKecil(g, X + 6.4, Y + 9, .7, "#ffffff"); bungaKecil(g, X + 9.8, Y + 9, .7, "#fbd38d");
      return;
    }
    [[-6.5, 7], [22.5, 7], [8, -3.5], [8, 17.5]].forEach(function (c) { bayangan(g, X + c[0], Y + c[1] + 2, 2.6, 1); lingkaran(g, X + c[0], Y + c[1], 2.4, "#e2bf6e", true); lingkaran(g, X + c[0], Y + c[1] - .4, 1.5, "#fff6dd"); });
    bayangan(g, X + 8, Y + 9.5, 10, 4);
    lingkaran(g, X + 8, Y + 7.6, 9.6, "#e4dccb", true);
    lingkaran(g, X + 8, Y + 6.8, 9, "#ffffff");
    for (var i = 0; i < 12; i++) { var a = i / 12 * 6.2832; lingkaran(g, X + 8 + Math.cos(a) * 8.6, Y + 6.8 + Math.sin(a) * 8.6 + .6, .55, "rgba(228,214,190,.9)"); }
    [[0, 0, "#f6a9c0"], [-1.6, 1, "#ffffff"], [1.6, 1, "#fbc6a4"], [0, -1.6, "#f28aa7"]].forEach(function (b) { bungaKecil(g, X + 8 + b[0], Y + 6.6 + b[1], .8, b[2]); });
    elips(g, X + 4.2, Y + 9.6, .9, .6, "#9cc7a8"); elips(g, X + 11.8, Y + 9.6, .9, .6, "#9cc7a8");
  }
  function lampuTaman(gt, ga, X, Y) {
    bayangan(gt, X + 8, Y + 14.5, 3, 1);
    bulatIsi(gt, X + 7.2, Y + 1, 1.6, 14, .6, "#3d3d48"); bulatIsi(gt, X + 5.5, Y + 13.5, 5, 2, .8, "#2e2e38");
    cahaya(ga, X + 8, Y - 1, 12, "255,222,140", .45);
    bulatIsi(ga, X + 5.2, Y - 4.6, 5.6, 7, 1.4, "#3d3d48"); bulatIsi(ga, X + 6.2, Y - 3.6, 3.6, 5, 1, "#ffe7a3");
    g_atap(ga, X + 8, Y - 4.6);
  }
  function g_atap(g, cx, y) { g.fillStyle = "#2e2e38"; g.beginPath(); g.moveTo(cx - 3.6, y); g.lineTo(cx, y - 2.6); g.lineTo(cx + 3.6, y); g.closePath(); g.fill(); }

  /* ---------- Objek tempat ---------- */
  function bingkaiFoto(g, x, y, w, h, isi) {
    bulatIsi(g, x, y, w, h, .8, "#d9b260", "rgba(110,80,30,.7)");
    kotak(g, x + 1, y + 1, w - 2, h - 2, isi === 1 ? "#d6e6f2" : "#f8dcc8");
    elips(g, x + w / 2, y + h - 1.2, w / 2 - 1, 2.2, isi === 1 ? "#9cc7a8" : "#e8b49a");
    lingkaran(g, x + w / 2 - 1.2, y + h / 2 - .3, 1.1, "#7a5136"); lingkaran(g, x + w / 2 + 1.2, y + h / 2 - .3, 1.1, "#3a2618");
    g.fillStyle = "#e85a7a"; g.beginPath(); var hx = x + w / 2, hy = y + 2.6; g.moveTo(hx, hy + 1.3); g.bezierCurveTo(hx - 1.6, hy, hx - .9, hy - 1, hx, hy - .2); g.bezierCurveTo(hx + .9, hy - 1, hx + 1.6, hy, hx, hy + 1.3); g.fill();
  }
  function gambarTempat(gt, ga, key, t, latar) {
    var X = t.x * T, Y = t.y * T, W = t.w * T, H = t.h * T, o = t.obj, i;
    if (o === "pelaminan") {
      bayangan(gt, X + W / 2, Y + H - 2, W / 2 + 6, 4);
      bulatIsi(gt, X - 6, Y + H - 11, W + 12, 11, 2, gradV(gt, Y + H - 11, Y + H, "#e2bf6e", "#b78f3c"), "rgba(110,80,30,.7)");
      kotak(gt, X - 5, Y + H - 10.5, W + 10, .8, "rgba(255,245,210,.8)");
      bulatIsi(gt, X - 2, Y + H - 6, W + 4, 6, 1.5, "#b3343f", "rgba(100,20,30,.6)");
      // dinding latar dengan tiga lengkung
      bulatIsi(gt, X, Y - 6, W, H - 3, 3, gradV(gt, Y - 6, Y + H, "#fffaf0", "#f3e6cc"), "rgba(150,120,70,.6)");
      [X + W * .17, X + W * .5, X + W * .83].forEach(function (cx, k) {
        var r = k === 1 ? 10 : 7, top = Y - 1 + (k === 1 ? 0 : 4);
        gt.beginPath(); gt.moveTo(cx - r, Y + H - 9); gt.lineTo(cx - r, top + r); gt.arc(cx, top + r, r, Math.PI, 0); gt.lineTo(cx + r, Y + H - 9); gt.closePath();
        gt.fillStyle = k === 1 ? "#f6e3c0" : "#f8ecd6"; gt.fill(); gt.strokeStyle = "#d9b260"; gt.lineWidth = .8; gt.stroke();
      });
      // sofa
      bulatIsi(gt, X + W / 2 - 15, Y + 10, 30, 10, 4, gradV(gt, Y + 10, Y + 20, "#c94a55", "#9c2f3a"), "rgba(90,20,25,.7)");
      bulatIsi(gt, X + W / 2 - 17, Y + 14, 5, 9, 2.4, "#b03a45", true); bulatIsi(gt, X + W / 2 + 12, Y + 14, 5, 9, 2.4, "#b03a45", true);
      kotak(gt, X + W / 2 - 13, Y + 11.2, 26, .8, "#e2bf6e");
      // tirai dan bunga
      [-1, 1].forEach(function (s) {
        var ex = s < 0 ? X + 1 : X + W - 1;
        gt.fillStyle = "rgba(255,255,255,.85)"; gt.beginPath(); gt.moveTo(ex, Y - 6); gt.quadraticCurveTo(ex + s * 9, Y + 4, ex + s * 3, Y + H - 10); gt.lineTo(ex, Y + H - 10); gt.closePath(); gt.fill();
        for (var k = 0; k < 9; k++) bungaKecil(gt, ex + s * (2 + acak(k, s) * 6), Y + H - 14 + acak(s, k) * 6 - k * .4, 1.1, ["#f6a9c0", "#ffffff", "#fbc6a4", "#e57a9a"][k % 4]);
        lingkaran(gt, ex + s * 4, Y + H - 9, 2.6, "#4f9446");
      });
      for (i = 0; i < 16; i++) bungaKecil(gt, X + 6 + i * (W - 12) / 15, Y - 6 + Math.sin(i / 15 * Math.PI) * -3 + acak(i, 5) * 2, 1.1, ["#f6a9c0", "#ffffff", "#fbc6a4", "#e57a9a"][i % 4]);
    } else if (o === "gapura-pantai" || o === "gapura-hutan") {
      var pantai = o === "gapura-pantai", kayu = pantai ? "#fbf8f2" : "#8a5a33", gelap = pantai ? "rgba(150,140,120,.7)" : "rgba(60,35,20,.8)";
      bayangan(gt, X + W / 2, Y + H - 1, W / 2, 3);
      bulatIsi(gt, X + 5, Y + 2, 3.4, H - 2, 1.2, kayu, gelap); bulatIsi(gt, X + W - 8.4, Y + 2, 3.4, H - 2, 1.2, kayu, gelap);
      ga.beginPath(); ga.moveTo(X + 6.7, Y + 4); ga.quadraticCurveTo(X + W / 2, Y - 22, X + W - 6.7, Y + 4);
      ga.strokeStyle = kayu; ga.lineWidth = 3.4; ga.lineCap = "round"; ga.stroke(); ga.strokeStyle = gelap; ga.lineWidth = .4; ga.stroke();
      if (pantai) {
        [-1, 1].forEach(function (s) { ga.fillStyle = "rgba(255,255,255,.7)"; ga.beginPath(); var bx = s < 0 ? X + 6.7 : X + W - 6.7; ga.moveTo(bx, Y - 2); ga.quadraticCurveTo(bx + s * 8, Y + 6, bx + s * 2, Y + H - 2); ga.lineTo(bx, Y + H - 2); ga.closePath(); ga.fill(); });
      } else {
        for (i = 0; i < 18; i++) { var tt = i / 17, vx = (1 - tt) * (1 - tt) * (X + 6.7) + 2 * (1 - tt) * tt * (X + W / 2) + tt * tt * (X + W - 6.7), vy = (1 - tt) * (1 - tt) * (Y + 4) + 2 * (1 - tt) * tt * (Y - 22) + tt * tt * (Y + 4); lingkaran(ga, vx + (acak(i, 2) - .5) * 3, vy + (acak(2, i) - .5) * 3, 2.4, i % 2 ? "#3f8a3e" : "#54a24c"); }
        for (i = 0; i < 6; i++) { lingkaran(gt, X + 5 + acak(i, 7) * 3, Y + 4 + i * 4, 1.8, "#4f9446"); lingkaran(gt, X + W - 6 - acak(7, i) * 3, Y + 4 + i * 4, 1.8, "#4f9446"); }
      }
      for (i = 0; i < 14; i++) { var t2 = .05 + i / 13 * .9, fx = (1 - t2) * (1 - t2) * (X + 6.7) + 2 * (1 - t2) * t2 * (X + W / 2) + t2 * t2 * (X + W - 6.7), fy = (1 - t2) * (1 - t2) * (Y + 4) + 2 * (1 - t2) * t2 * (Y - 22) + t2 * t2 * (Y + 4); bungaKecil(ga, fx + (acak(i, 9) - .5) * 2, fy + (acak(9, i) - .5) * 2, 1.2, ["#ffffff", "#f6a9c0", "#fbc6a4", "#e85a7a"][i % 4]); }
      [X + 6.7, X + W - 6.7].forEach(function (bx, s) { for (var k = 0; k < 5; k++) bungaKecil(gt, bx + (acak(k, s) - .5) * 5, Y + H - 4 - acak(s, k) * 4, 1.1, ["#ffffff", "#f6a9c0", "#fbc6a4"][k % 3]); lingkaran(gt, bx, Y + H - 2, 2.2, "#4f9446"); });
    } else if (o === "easel") {
      for (i = 0; i < t.w; i++) {
        var ex2 = X + i * T;
        bayangan(gt, ex2 + 8, Y + 15, 5, 1.4);
        gt.strokeStyle = "#7a5130"; gt.lineWidth = 1; gt.lineCap = "round";
        gt.beginPath(); gt.moveTo(ex2 + 4, Y + 15); gt.lineTo(ex2 + 8, Y + 2); gt.lineTo(ex2 + 12, Y + 15); gt.moveTo(ex2 + 8, Y + 2); gt.lineTo(ex2 + 8, Y + 14); gt.stroke();
        bulatIsi(ga, ex2 + 1.5, Y - 7, 13, 12, .8, "#9a6b40", "rgba(60,35,20,.7)");
        kotak(ga, ex2 + 2.5, Y - 6, 11, 10, i % 2 ? gradV(ga, Y - 6, Y + 4, "#bfe0f0", "#e8f4fa") : gradV(ga, Y - 6, Y + 4, "#fbd7c0", "#fff1e6"));
        elips(ga, ex2 + 6, Y + 3.5, 5, 3, i % 2 ? "#8cc28a" : "#e8a27e"); elips(ga, ex2 + 11, Y + 4, 4, 2.4, i % 2 ? "#6aa86c" : "#d58463");
        lingkaran(ga, ex2 + 10.5, Y - 3, 1.6, i % 2 ? "#fff8d0" : "#ffffff");
        kotak(ga, ex2 + 3, Y + 4.6, 10, 1, "#7a5130");
      }
    } else if (o === "kado") {
      var mx = X + W / 2, alas = Y + H - 3;
      bayangan(gt, mx, alas + 1, W / 2, 2.4);
      bulatIsi(gt, X + 1, alas - 6, W - 2, 6, 1.2, latar === "gedung" ? "#ffffff" : latar === "pantai" ? "#fbf3e3" : "#a97c4f", true);
      [["#e05d6f", 3, 9, 8], ["#5a8ad4", 12.5, 8, 9], ["#f0b84f", 22, 7, 7], ["#7fbf8a", 8, 6.5, 13], ["#c48ad8", 17, 6, 12.5]].forEach(function (b) {
        var bx = X + b[1], s = b[2], by = alas - 6 - s - (b[3] > 10 ? 6.5 : 0);
        bulatIsi(ga, bx, by, s, s, 1, b[0], "rgba(60,35,30,.6)");
        kotak(ga, bx + s / 2 - .6, by, 1.2, s, "#fff3d0"); kotak(ga, bx, by + s / 2 - .6, s, 1.2, "#fff3d0");
        elips(ga, bx + s / 2 - 1.2, by - .6, 1.3, .8, "#fff3d0"); elips(ga, bx + s / 2 + 1.2, by - .6, 1.3, .8, "#fff3d0");
      });
    } else if (o === "bingkai") {
      bayangan(gt, X + W / 2, Y + 14.5, W / 2, 1.8);
      bulatIsi(gt, X + 1, Y + 8, W - 2, 5, 1, gradV(gt, Y + 8, Y + 13, "#b4844f", "#8a5a33"), true);
      kotak(gt, X + 2.5, Y + 13, 1.2, 2.2, "#6b4426"); kotak(gt, X + W - 3.7, Y + 13, 1.2, 2.2, "#6b4426");
      for (i = 0; i < Math.max(2, t.w * 2 - 1); i++) bingkaiFoto(ga, X + 2 + i * ((W - 12) / Math.max(1, t.w * 2 - 2)), Y - 2 - (i % 2) * 3, 8, 10, i % 2);
    } else if (o === "papan") {
      bayangan(gt, X + W / 2, Y + 15, W / 2 - 2, 1.6);
      bulatIsi(gt, X + 4, Y + 2, 1.8, 13.5, .6, "#7a5130", true); bulatIsi(gt, X + W - 5.8, Y + 2, 1.8, 13.5, .6, "#7a5130", true);
      bulatIsi(ga, X + 1, Y - 9, W - 2, 14, 1.6, gradV(ga, Y - 9, Y + 5, "#a97c4f", "#86592f"), "rgba(60,35,20,.8)");
      bulatIsi(ga, X + 2.5, Y - 7.5, W - 5, 11, 1, "#fbf1d8");
      bulatIsi(ga, X + W / 2 - 5, Y - 6, 10, 8.5, 1, "#ffffff", "rgba(120,90,60,.6)");
      bulatIsi(ga, X + W / 2 - 5, Y - 6, 10, 2.6, 1, "#e05d6f");
      lingkaran(ga, X + W / 2 - 2.5, Y - 6.2, .6, "#5a3a22"); lingkaran(ga, X + W / 2 + 2.5, Y - 6.2, .6, "#5a3a22");
      g_hati(ga, X + W / 2, Y - 1, 1.6, "#e05d6f");
    } else if (o === "meja-tamu") {
      bayangan(gt, X + W / 2, Y + 14.5, W / 2 + 1, 2);
      bulatIsi(gt, X, Y + 3, W, 11, 1.4, gradV(gt, Y + 3, Y + 14, "#ffffff", "#ece6da"), "rgba(130,110,80,.7)");
      kotak(gt, X, Y + 3, W, 1.4, "#d9b260");
      for (i = 0; i < 6; i++) elips(gt, X + 2.6 + i * (W - 5) / 5, Y + 13.2, 2.4, 1, "rgba(220,205,180,.7)");
      bulatIsi(gt, X + 5, Y + 4.6, 13, 6, .6, "#fbf5e6", "rgba(120,90,60,.6)"); kotak(gt, X + 11.3, Y + 4.6, .5, 6, "#c9b48a");
      gt.strokeStyle = "#2f2a26"; gt.lineWidth = .6; gt.beginPath(); gt.moveTo(X + 20, Y + 9); gt.lineTo(X + 23, Y + 4); gt.stroke();
      bulatIsi(gt, X + 24.5, Y + 2, 4, 6, 1.2, "#cfe6e8", true);
      bungaKecil(gt, X + 26.5, Y + 1, 1, "#f6a9c0"); bungaKecil(gt, X + 25, Y + 2.4, .8, "#ffffff"); bungaKecil(gt, X + 28, Y + 2.4, .8, "#fbd38d");
    }
  }
  function g_hati(g, x, y, s, c) { g.fillStyle = c; g.beginPath(); g.moveTo(x, y + s); g.bezierCurveTo(x - s * 1.6, y, x - s * .8, y - s * 1.1, x, y - s * .3); g.bezierCurveTo(x + s * .8, y - s * 1.1, x + s * 1.6, y, x, y + s); g.fill(); }
  function gambarHias(ga, h) {
    if (h.t === "lampu-gantung") {
      var X = h.x * T, Y = h.y * T;
      cahaya(ga, X, Y + 1, 16, "255,232,170", .35);
      ga.strokeStyle = "#c9a24a"; ga.lineWidth = .5; ga.beginPath(); ga.moveTo(X, Y - 10); ga.lineTo(X, Y - 3); ga.stroke();
      elips(ga, X, Y, 7.5, 2.6, null, "#d9b260"); ga.lineWidth = .9; ga.strokeStyle = "#d9b260"; ga.beginPath(); ga.ellipse(X, Y, 7.5, 2.6, 0, 0, 6.2832); ga.stroke();
      elips(ga, X, Y - 3, 4, 1.4, "#e2bf6e", true);
      for (var i = 0; i < 8; i++) { var a = i / 8 * 6.2832, cx = X + Math.cos(a) * 7.5, cy = Y + Math.sin(a) * 2.6; kotak(ga, cx - .4, cy - 2.4, .8, 2.4, "#fffaf0"); elips(ga, cx, cy - 3, .5, .9, "#ffcf5a"); lingkaran(ga, cx, cy + 1.2, .5, "rgba(220,240,255,.9)"); }
    } else if (h.t === "payung") {
      var px = h.x * T, py = h.y * T;
      bayangan(ga, px, py + 18, 9, 2.4);
      kotak(ga, px - .5, py - 1, 1, 19, "#8a6a45");
      for (var k = 0; k < 8; k++) {
        var a0 = Math.PI + k / 8 * Math.PI, a1 = Math.PI + (k + 1) / 8 * Math.PI;
        ga.beginPath(); ga.moveTo(px, py - 9); ga.lineTo(px + Math.cos(a0) * 13, py + Math.sin(a0) * 4 + 1); ga.quadraticCurveTo(px + Math.cos((a0 + a1) / 2) * 11.5, py + 2.6, px + Math.cos(a1) * 13, py + Math.sin(a1) * 4 + 1); ga.closePath();
        ga.fillStyle = k % 2 ? "#e47b5f" : "#fff6e6"; ga.fill(); ga.strokeStyle = "rgba(120,60,40,.45)"; ga.lineWidth = .35; ga.stroke();
      }
      lingkaran(ga, px, py - 9, .8, "#8a6a45");
    } else if (h.t === "lampu-tali") {
      var x1 = h.x * T, x2 = h.x2 * T, yy = h.y * T - 18, n = Math.round((x2 - x1) / 6);
      ga.strokeStyle = "#3b2a1d"; ga.lineWidth = .4; ga.beginPath(); ga.moveTo(x1, yy); ga.quadraticCurveTo((x1 + x2) / 2, yy + 20, x2, yy); ga.stroke();
      for (var j = 1; j < n; j++) {
        var tt = j / n, bx = (1 - tt) * (1 - tt) * x1 + 2 * (1 - tt) * tt * (x1 + x2) / 2 + tt * tt * x2, by = (1 - tt) * (1 - tt) * yy + 2 * (1 - tt) * tt * (yy + 20) + tt * tt * yy;
        var w = ["255,225,140", "255,200,150", "255,245,200"][j % 3];
        cahaya(ga, bx, by + 1.6, 4, w, .55); elips(ga, bx, by + 1.6, .9, 1.2, "rgb(" + w + ")");
      }
    }
  }

  /* ---------- Membangun dunia (digambar sekali dalam resolusi tinggi) ---------- */
  function bangunDunia(latar, R, adaIsi) {
    var L = LATAR[latar], peta = L.peta, rows = peta.length, cols = peta[0].length;
    var PX = 9, PY = 6, W = cols + PX * 2, H = rows + PY * 2;
    function ch(x, y) { return peta[Math.max(0, Math.min(rows - 1, y))].charAt(Math.max(0, Math.min(cols - 1, x))); }
    var tanah = document.createElement("canvas"), atas = document.createElement("canvas");
    tanah.width = atas.width = Math.round(W * T * R); tanah.height = atas.height = Math.round(H * T * R);
    var gt = tanah.getContext("2d"), ga = atas.getContext("2d");
    gt.setTransform(R, 0, 0, R, 0, 0); ga.setTransform(R, 0, 0, R, 0, 0);
    var padat = [], tinggi = [];
    for (var ty = 0; ty < H; ty++) {
      padat.push([]);
      for (var tx = 0; tx < W; tx++) {
        var mx = tx - PX, my = ty - PY, c = ch(mx, my), luar = mx < 0 || my < 0 || mx >= cols || my >= rows;
        padat[ty].push(luar || "#~TPbLcou|".indexOf(c) >= 0);
      }
    }
    // dua lintasan: alas dulu, lalu objek (agar bayangan & tajuk tidak terpotong petak tetangga)
    for (var pass = 0; pass < 2; pass++) for (ty = 0; ty < H; ty++) for (tx = 0; tx < W; tx++) {
      mx = tx - PX; my = ty - PY; c = ch(mx, my);
      var X = tx * T, Y = ty * T;
      var rumputTaman = latar === "gedung" && my >= 19;
      var alas = latar === "gedung" ? (rumputTaman ? function () { rumput(gt, X, Y, tx, ty); } : function () { lantaiMarmer(gt, X, Y, tx, ty); })
        : latar === "pantai" ? function () { pasir(gt, X, Y, tx, ty); } : function () { rumput(gt, X, Y, tx, ty); };
      if (pass === 0) {
        if (c === ",") { if (latar === "gedung" && !rumputTaman) karpet(gt, X, Y, ch(mx - 1, my) !== ",", ch(mx + 1, my) !== ",", tx, ty); else if (latar === "pantai") kelopakJalan(gt, X, Y, tx, ty, ch(mx - 1, my) !== ",", ch(mx + 1, my) !== ","); else jalanBatu(gt, X, Y, tx, ty); }
        else if (c === "s") pasir(gt, X, Y, tx, ty);
        else if (c === "w") pasir(gt, X, Y, tx, ty, true);
        else if (c === "~") air(gt, X, Y, tx, ty);
        else if (c === "=") papanKayu(gt, X, Y, latar !== "pantai", tx, ty);
        else if (c === "#") dinding(gt, X, Y, ch(mx, my + 1) === "#" || mx <= 0 || mx >= cols - 1, tx);
        else if (c === "T") rumput(gt, X, Y, tx, ty, true);
        else if (c === "b" && latar === "pantai") rumputPantai(gt, X, Y, tx, ty);
        else alas();
      } else {
        if (c === "T") pohon(gt, ga, X, Y, tx, ty);
        else if (c === "P") kelapa(gt, ga, X, Y);
        else if (c === "b" && latar !== "pantai") semak(gt, X, Y, tx, ty, function () {});
        else if (c === "f") bunga(gt, X, Y, tx, ty);
        else if (c === "L") lampuTaman(gt, ga, X, Y);
        else if (c === "c") kursi(gt, X, Y, latar);
        else if (c === "o") meja(gt, X, Y, latar);
      }
    }
    var tempat = {};
    Object.keys(L.tempat).forEach(function (key) {
      if (adaIsi && adaIsi.indexOf(key) < 0) return;
      var t = L.tempat[key], tt = { x: t.x + PX, y: t.y + PY, w: t.w, h: t.h, obj: t.obj, ty: (t.ty != null ? t.ty : t.y + t.h) + PY };
      tempat[key] = tt;
      for (var y = tt.y; y < tt.y + tt.h; y++) for (var x = tt.x; x < tt.x + tt.w; x++) padat[y][x] = true;
    });
    Object.keys(tempat).forEach(function (key) { var tt = tempat[key]; for (var x = tt.x; x < tt.x + tt.w; x++) padat[tt.ty][x] = false; });
    Object.keys(tempat).forEach(function (key) { gambarTempat(gt, ga, key, tempat[key], latar); });
    (L.hias || []).forEach(function (h) { var hh = {}; for (var k in h) hh[k] = h[k]; hh.x += PX; hh.y += PY; if (hh.x2 != null) { hh.x2 += PX; hh.y2 += PY; } gambarHias(ga, hh); });
    return { tanah: tanah, atas: atas, R: R, padat: padat, W: W, H: H, PX: PX, PY: PY, tempat: tempat, awal: { x: (L.awal.x + PX) * T, y: (L.awal.y + PY) * T }, kamera: { x: (L.kamera.x + PX) * T, y: (L.kamera.y + PY) * T }, latar: latar };
  }
  /* ---------- Antarmuka ---------- */
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  function buatTema(latar, opsi) {
    opsi = opsi || {};
    var dunia = null, cv, g, S = 3, cam = { x: 0, y: 0 }, pemain = null, npc = [], jenis = "", kunjungan = {}, daftar = [], modalTerbuka = false;
    var input = { x: 0, y: 0 }, kunci = {}, jalur = null, tur = false, waktu = 0, petunjuk = null, ctxU = null, simpanan = null;

    function ukur() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(innerWidth * dpr); cv.height = Math.round(innerHeight * dpr);
      cv.style.width = innerWidth + "px"; cv.style.height = innerHeight + "px";
      S = Math.max(2, Math.min(innerWidth / (T * 8.5), innerHeight / (T * 14))) * dpr;
      g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
    }
    function solid(px, py) {
      var tx = Math.floor(px / T), ty = Math.floor(py / T);
      if (tx < 0 || ty < 0 || tx >= dunia.W || ty >= dunia.H) return true;
      return dunia.padat[ty][tx];
    }
    function bisaDi(x, y) { return !solid(x - 4, y - 2) && !solid(x + 4, y - 2) && !solid(x - 4, y + 1) && !solid(x + 4, y + 1); }
    function cariJalur(sx, sy, gx, gy) {
      var W = dunia.W, H = dunia.H, mulai = sy * W + sx, tujuan = gy * W + gx, asal = {}, antrian = [mulai];
      asal[mulai] = -1;
      while (antrian.length) {
        var cur = antrian.shift();
        if (cur === tujuan) break;
        var cx = cur % W, cy = (cur - cx) / W;
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
          var nx = cx + d[0], ny = cy + d[1], n = ny * W + nx;
          if (nx < 0 || ny < 0 || nx >= W || ny >= H || asal[n] !== undefined || dunia.padat[ny][nx]) return;
          asal[n] = cur; antrian.push(n);
        });
      }
      if (asal[tujuan] === undefined) return null;
      var hasil = [], p = tujuan;
      while (p !== -1) { hasil.unshift({ x: (p % W) * T + 8, y: Math.floor(p / W) * T + 10 }); p = asal[p]; }
      return hasil.slice(1);
    }

    function gerak(dt) {
      if (!pemain || modalTerbuka) { if (pemain) pemain.jalan = false; return; }
      var vx = input.x, vy = input.y;
      if (kunci.ArrowLeft || kunci.a) vx -= 1; if (kunci.ArrowRight || kunci.d) vx += 1; if (kunci.ArrowUp || kunci.w) vy -= 1; if (kunci.ArrowDown || kunci.s) vy += 1;
      if (vx || vy) { jalur = null; jalurBuka = null; if (tur) hentikanTur(); }
      else if (jalur && jalur.length) {
        var tgt = jalur[0], dx = tgt.x - pemain.x, dy = tgt.y - pemain.y, d = Math.hypot(dx, dy);
        if (d < 2) { jalur.shift(); if (!jalur.length) { jalur = null; var kb = jalurBuka; jalurBuka = null; terakhir = tempatDekat(); if (kb) bukaTempat(kb); } }
        else { vx = dx / d; vy = dy / d; }
      }
      var len = Math.hypot(vx, vy);
      if (len > 1) { vx /= len; vy /= len; }
      var cepat = 64 * dt;
      if (len > .05) {
        var nx = pemain.x + vx * cepat, ny = pemain.y + vy * cepat;
        if (bisaDi(nx, pemain.y)) pemain.x = nx;
        if (bisaDi(pemain.x, ny)) pemain.y = ny;
        pemain.arah = Math.abs(vx) > Math.abs(vy) ? (vx > 0 ? "kanan" : "kiri") : (vy > 0 ? "bawah" : "atas");
        pemain.jalan = true; pemain.anim += dt * 8;
        cekTempat(false);
      } else pemain.jalan = false;
    }
    function tempatDekat() {
      var hasil = null;
      daftar.forEach(function (key) {
        var t = dunia.tempat[key], cx = (t.x + t.w / 2) * T, cy = t.ty * T + 8;
        if (Math.abs(pemain.x - cx) < (t.w / 2) * T + 6 && Math.abs(pemain.y - cy) < 12) hasil = key;
      });
      return hasil;
    }
    var terakhir = null, jalurBuka = null, tujuanTur = null, turKunjung = {}, ulangTur = false, kotakLabel = [];
    /* Masuk ke tempat: terbuka sendiri hanya pada kunjungan pertama. Setelah itu label tempat diklik untuk membuka.
       Saat tur otomatis berjalan, hanya tempat tujuan yang dibuka. */
    function cekTempat() {
      var key = tempatDekat();
      if (!key) { terakhir = null; return; }
      if (key === terakhir) return;
      terakhir = key;
      if (tur || jalurBuka) return;
      if (!kunjungan[key]) bukaTempat(key);
    }

    /* kamera & gambar */
    function gambar() {
      var vw = cv.width / S, vh = cv.height / S;
      var fx = pemain ? pemain.x : cam.tx, fy = pemain ? pemain.y - 10 : cam.ty;
      cam.x += (fx - cam.x) * .12; cam.y += (fy - cam.y) * .12;
      var minX = vw / 2, maxX = dunia.W * T - vw / 2, minY = vh / 2, maxY = dunia.H * T - vh / 2;
      var x0 = Math.max(minX, Math.min(maxX, cam.x)) - vw / 2, y0 = Math.max(minY, Math.min(maxY, cam.y)) - vh / 2;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.fillStyle = LATAR[latar].warna.latar; g.fillRect(0, 0, cv.width, cv.height);
      g.setTransform(S, 0, 0, S, -x0 * S, -y0 * S);
      var R = dunia.R, sx0 = Math.max(0, x0), sy0 = Math.max(0, y0), sw = Math.min(vw, dunia.W * T - sx0), sh = Math.min(vh, dunia.H * T - sy0);
      g.imageSmoothingEnabled = true;
      g.drawImage(dunia.tanah, sx0 * R, sy0 * R, sw * R, sh * R, sx0, sy0, sw, sh);
      animasiAir(x0, y0, vw, vh);
      var tokoh = npc.slice(); if (pemain) tokoh.push(pemain);
      tokoh.sort(function (a, b) { return a.y - b.y; });
      tokoh.forEach(function (o) { gambarOrang(g, o, o.x, o.y, waktu); });
      g.drawImage(dunia.atas, sx0 * R, sy0 * R, sw * R, sh * R, sx0, sy0, sw, sh);
      efek(x0, y0, vw, vh);
      // label tempat (dalam ukuran layar)
      g.setTransform(1, 0, 0, 1, 0, 0);
      var px = Math.round(Math.max(14 * (cv.width / innerWidth), S * 4.8)), dekat = pemain ? tempatDekat() : null;
      g.font = "600 " + px + "px 'Fredoka', 'Nunito', sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
      kotakLabel = [];
      daftar.forEach(function (key) {
        var t = dunia.tempat[key], sudah = kunjungan[key], disini = dekat === key;
        var sx = ((t.x + t.w / 2) * T - x0) * S, sy = (t.y * T - 20 - y0) * S + (sudah && !disini ? 0 : Math.sin(waktu * 3 + t.x) * S * .9);
        var teks = NAMA_TEMPAT[key], tw = g.measureText(teks).width, ik = sudah ? px * 1.05 : 0, w = tw + ik + px * 1.6, h = px * 2;
        if (sx < -w || sx > cv.width + w || sy < -h || sy > cv.height + h) return;
        var x = sx - w / 2, y = sy - h / 2, warna = AKSEN[latar];
        g.shadowColor = "rgba(0,0,0,.28)"; g.shadowBlur = px * .6; g.shadowOffsetY = px * .18;
        g.fillStyle = sudah ? "#fffaf0" : warna; bulat(g, x, y, w, h, h / 2); g.fill();
        g.shadowColor = "transparent"; g.shadowBlur = 0; g.shadowOffsetY = 0;
        g.lineWidth = Math.max(2, px * .16); g.strokeStyle = sudah ? warna : "rgba(255,250,240,.9)"; bulat(g, x + g.lineWidth / 2, y + g.lineWidth / 2, w - g.lineWidth, h - g.lineWidth, h / 2); g.stroke();
        if (!sudah) { g.fillStyle = warna; g.beginPath(); g.moveTo(sx - px * .45, y + h - 1); g.lineTo(sx + px * .45, y + h - 1); g.lineTo(sx, y + h + px * .55); g.closePath(); g.fill(); }
        if (sudah) { var cx = x + px * .8 + ik / 2, cy = sy; g.fillStyle = warna; g.beginPath(); g.arc(cx, cy, ik * .45, 0, 6.2832); g.fill(); g.strokeStyle = "#fffaf0"; g.lineWidth = Math.max(1.5, px * .13); g.beginPath(); g.moveTo(cx - ik * .2, cy); g.lineTo(cx - ik * .04, cy + ik * .17); g.lineTo(cx + ik * .22, cy - ik * .17); g.stroke(); }
        g.fillStyle = sudah ? warna : "#fffaf0"; g.fillText(teks, sx + ik / 2, sy + px * .06);
        if (disini && sudah && !modalTerbuka) { g.font = "500 " + Math.round(px * .78) + "px 'Fredoka', 'Nunito', sans-serif"; g.fillStyle = "rgba(255,250,240,.95)"; g.shadowColor = "rgba(0,0,0,.5)"; g.shadowBlur = px * .4; g.fillText("ketuk untuk membuka", sx, y - px * .7); g.shadowColor = "transparent"; g.shadowBlur = 0; g.font = "600 " + px + "px 'Fredoka', 'Nunito', sans-serif"; }
        kotakLabel.push({ key: key, x: x, y: y, w: w, h: h });
      });
      if (jalur && jalur.length) { var last = jalur[jalur.length - 1]; g.strokeStyle = "rgba(255,243,214,.9)"; g.lineWidth = Math.max(2, S * .6); g.beginPath(); g.arc((last.x - x0) * S, (last.y - y0) * S, S * (3 + Math.sin(waktu * 6)), 0, 6.29); g.stroke(); }
    }
    function bulat(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
    function animasiAir(x0, y0, vw, vh) {
      var tx0 = Math.max(0, Math.floor(x0 / T)), ty0 = Math.max(0, Math.floor(y0 / T)), tx1 = Math.min(dunia.W - 1, Math.ceil((x0 + vw) / T)), ty1 = Math.min(dunia.H - 1, Math.ceil((y0 + vh) / T));
      var peta = LATAR[latar].peta;
      for (var ty = ty0; ty <= ty1; ty++) for (var tx = tx0; tx <= tx1; tx++) {
        var my = Math.max(0, Math.min(peta.length - 1, ty - dunia.PY)), mx = Math.max(0, Math.min(peta[0].length - 1, tx - dunia.PX));
        var c = peta[my].charAt(mx);
        if (c === "~") {
          var ph = waktu * 1.4 + tx * .9 + ty * 1.7, ox = tx * T + 3 + Math.sin(ph) * 2.5, oy = ty * T + 5 + (tx * 7 + ty * 3) % 7;
          g.strokeStyle = "rgba(230,250,255," + (.35 + Math.sin(ph * 1.3) * .2) + ")"; g.lineWidth = .6; g.lineCap = "round";
          g.beginPath(); g.moveTo(ox, oy); g.quadraticCurveTo(ox + 2.5, oy - 1.2, ox + 5, oy); g.stroke();
        } else if (c === "w") {
          var o = Math.sin(waktu * 1.3 + tx * .35) * 1.6;
          g.fillStyle = "rgba(255,255,255,.8)"; g.beginPath(); g.moveTo(tx * T, ty * T - 2 + o);
          g.quadraticCurveTo(tx * T + 4, ty * T + 2 + o, tx * T + 8, ty * T + o); g.quadraticCurveTo(tx * T + 12, ty * T - 2 + o, tx * T + 16, ty * T + 1 + o);
          g.lineTo(tx * T + 16, ty * T - 3); g.lineTo(tx * T, ty * T - 3); g.closePath(); g.fill();
        }
      }
    }
    var kunang = [];
    function efek(x0, y0, vw, vh) {
      if (latar === "hutan" || latar === "gedung") {
        if (!kunang.length) for (var i = 0; i < 26; i++) kunang.push({ x: Math.random() * dunia.W * T, y: Math.random() * dunia.H * T, p: Math.random() * 6 });
        kunang.forEach(function (k) {
          var a = (Math.sin(waktu * 2 + k.p) + 1) / 2;
          var x = k.x + Math.sin(waktu * .5 + k.p) * 8, y = k.y + Math.cos(waktu * .4 + k.p) * 6;
          if (x < x0 || x > x0 + vw || y < y0 || y > y0 + vh) return;
          cahaya(g, x, y, latar === "hutan" ? 2.4 : 1.6, latar === "hutan" ? "255,236,140" : "255,248,220", latar === "hutan" ? .2 + a * .7 : a * .5);
          lingkaran(g, x, y, .35, "rgba(255,250,220," + (.4 + a * .6) + ")");
        });
      }
    }

    var lalu = 0;
    function putar(t) {
      var dt = Math.min(.05, (t - lalu) / 1000 || 0); lalu = t; waktu += dt;
      gerak(dt); gambar();
      requestAnimationFrame(putar);
    }

    /* jendela / modal */
    var modal, panel, isi, tutupBtn, holder;
    function bukaModal(html, kelas, aksiTutup) {
      isi.innerHTML = ""; panel.className = "jl-panel " + (kelas || "");
      if (typeof html === "string") isi.innerHTML = html; else isi.appendChild(html);
      modal.hidden = false; modalTerbuka = true; input.x = input.y = 0;
      modal._tutup = aksiTutup || null;
      isi.scrollTop = 0;
      setTimeout(function () { tutupBtn.focus({ preventScroll: true }); }, 50);
    }
    function tutupModal() {
      if (modal.hidden) return;
      // kembalikan bagian undangan ke tempat simpannya
      Array.prototype.slice.call(isi.querySelectorAll("section.sec")).forEach(function (s) { holder.appendChild(s); });
      modal.hidden = true; modalTerbuka = false;
      var f = modal._tutup; modal._tutup = null;
      if (f) f();
    }
    function bukaTempat(key) {
      if (tur) turKunjung[key] = true;
      jalurBuka = null;
      jalur = null; input.x = input.y = 0;
      var wadah = el("div", "jl-isi-tempat"), ada = false;
      ISI_TEMPAT[key].forEach(function (id) {
        var s = document.getElementById(id);
        if (s) { wadah.appendChild(s); ada = true; Array.prototype.forEach.call(s.querySelectorAll(".reveal"), function (r) { r.classList.add("in"); }); }
      });
      if (!ada) wadah.innerHTML = '<p class="lead">Bagian ini belum diisi.</p>';
      var semua;
      kunjungan[key] = true; perbaruiHud();
      semua = daftar.every(function (k) { return kunjungan[k]; });
      bukaModal(wadah, "tempat-" + key, function () {
        if (semua && !simpanan && !ulangTur) { simpanan = true; setTimeout(penutup, 250); }
        else if (tur) setTimeout(langkahTur, 400);
      });
    }

    function perbaruiHud() {
      var sisa = daftar.filter(function (k) { return !kunjungan[k]; }).length;
      var s = document.getElementById("jlSisa");
      if (s) s.textContent = sisa ? sisa + " tempat belum dikunjungi" : "Semua tempat sudah dikunjungi";
    }
    var LATAR_NAMA = { gedung: "gedung", pantai: "pantai", hutan: "hutan" };

    function pilihKarakter(lanjut) {
      var box = el("div", "jl-pilih", '<h3>Pilih karakter kamu</h3><div class="jl-kartu-wrap"></div>');
      ["pria", "wanita"].forEach(function (j) {
        var b = el("button", "jl-kartu"); b.type = "button";
        var c = document.createElement("canvas"); c.width = 180; c.height = 240; potretOrang(c, j, j);
        b.appendChild(c); b.appendChild(el("span", "", j === "pria" ? "Laki-laki" : "Perempuan"));
        b.addEventListener("click", function () { jenis = j; tutupModal(); lanjut(); });
        box.querySelector(".jl-kartu-wrap").appendChild(b);
      });
      bukaModal(box, "pilih", function () { if (!jenis) { jenis = "pria"; lanjut(); } });
    }
    function sambutan() {
      var D = ctxU.D, ay = D.ayat || {}, tamu = (document.getElementById("guestName") || {}).textContent || "Tamu Undangan";
      var pembuka = D.pembuka || "Dengan memohon rahmat dan ridho Tuhan Yang Maha Esa, kami mengundang Anda di hari pernikahan kami.";
      var html = '<div class="jl-sambut"><small>' + ctxU.esc(ctxU.kepada) + '</small><h3>' + ctxU.esc(tamu) + '</h3>' +
        '<p>' + ctxU.esc(pembuka) + '</p>' +
        (ay.teks ? '<blockquote>“' + ctxU.esc(ay.teks) + '”<cite>' + ctxU.esc(ay.sumber || "") + '</cite></blockquote>' : "") +
        '<p class="jl-tip">Jelajahi ' + LATAR_NAMA[latar] + ' dan datangi setiap tempat yang bertanda. Geser lingkaran di bawah, pakai tombol panah, atau ketuk tujuan untuk berjalan.</p>' +
        '<div class="jl-ttd">' + ctxU.duaNama + '<span>' + ctxU.esc(ctxU.tanggalPendek) + '</span></div>' +
        '<button type="button" class="jl-btn" id="jlMulai">Mulai Menjelajah</button></div>';
      bukaModal(html, "sambut", function () { mulaiMain(); });
      document.getElementById("jlMulai").addEventListener("click", tutupModal);
    }
    function penutup() {
      var D = ctxU.D;
      var html = '<div class="jl-sambut"><h3>Terima kasih sudah berkunjung!</h3><p>' + ctxU.esc(D.penutup || "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.") + '</p>' +
        '<div class="jl-mono">' + ctxU.monoHtml + '</div><div class="jl-ttd">' + ctxU.duaNama + '<span>' + ctxU.esc(ctxU.tanggalPanjang) + '</span></div>' +
        '<button type="button" class="jl-btn" id="jlLanjut">Lanjut menjelajah</button></div>';
      hentikanTur();
      bukaModal(html, "sambut");
      document.getElementById("jlLanjut").addEventListener("click", tutupModal);
    }
    function mulaiMain() {
      pemain = { x: dunia.awal.x, y: dunia.awal.y, arah: "atas", jalan: false, anim: 0, jenis: jenis, palet: jenis };
      document.body.classList.add("jl-main");
      var av = document.getElementById("jlAvatar");
      if (av) potretOrang(av, jenis, jenis, true);
      perbaruiHud();
      if (petunjuk) { petunjuk.hidden = false; setTimeout(function () { petunjuk.hidden = true; }, 5000); }
    }

    /* tur otomatis */
    var autoBtn;
    function langkahTur() {
      if (!tur || modalTerbuka) return;
      var key = URUT_TUR.filter(function (k) { return daftar.indexOf(k) >= 0 && !turKunjung[k] && (ulangTur || !kunjungan[k]); })[0];
      if (!key) { var ulang = ulangTur; hentikanTur(); if (ulang) setTimeout(penutup, 250); return; }
      tujuanTur = key;
      var t = dunia.tempat[key], gx = t.x + Math.floor(t.w / 2), gy = t.ty;
      jalur = cariJalur(Math.floor(pemain.x / T), Math.floor((pemain.y - 2) / T), gx, gy);
      if (!jalur) { turKunjung[key] = true; langkahTur(); return; }
      if (!jalur.length) { jalur = null; bukaTempat(key); return; }
      jalurBuka = key;
    }
    function mulaiTur() {
      if (!pemain || modalTerbuka) return;
      tur = true; turKunjung = {}; ulangTur = daftar.every(function (k) { return kunjungan[k]; });
      if (autoBtn) { autoBtn.classList.add("on"); autoBtn.setAttribute("aria-pressed", "true"); }
      langkahTur();
    }
    function hentikanTur() {
      if (tur) { jalur = null; jalurBuka = null; }
      tur = false; ulangTur = false; tujuanTur = null;
      if (autoBtn) { autoBtn.classList.remove("on"); autoBtn.setAttribute("aria-pressed", "false"); }
    }
    function bukaAtauDatangi(key) {
      if (tempatDekat() === key) { jalur = null; jalurBuka = null; bukaTempat(key); return; }
      var t = dunia.tempat[key];
      jalur = cariJalur(Math.floor(pemain.x / T), Math.floor((pemain.y - 2) / T), t.x + Math.floor(t.w / 2), t.ty);
      if (jalur && !jalur.length) { jalur = null; bukaTempat(key); return; }
      jalurBuka = jalur ? key : null;
    }

    function pasangKontrol() {
      // joystick
      var joy = el("div", "jl-joy", '<div class="jl-knob"></div>'), knob = joy.firstChild, aktif = null;
      document.body.appendChild(joy);
      petunjuk = el("div", "jl-petunjuk", "Geser lingkaran ini untuk berjalan"); petunjuk.hidden = true; document.body.appendChild(petunjuk);
      function gerakJoy(e) {
        var r = joy.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, dx = e.clientX - cx, dy = e.clientY - cy, max = r.width * .38, d = Math.hypot(dx, dy);
        if (d > max) { dx = dx / d * max; dy = dy / d * max; }
        knob.style.transform = "translate(" + dx + "px," + dy + "px)";
        input.x = Math.abs(dx) > 4 ? dx / max : 0; input.y = Math.abs(dy) > 4 ? dy / max : 0;
      }
      joy.addEventListener("pointerdown", function (e) { aktif = e.pointerId; joy.setPointerCapture(e.pointerId); if (petunjuk) petunjuk.hidden = true; gerakJoy(e); e.preventDefault(); });
      joy.addEventListener("pointermove", function (e) { if (e.pointerId === aktif) gerakJoy(e); });
      function lepas(e) { if (e.pointerId !== aktif) return; aktif = null; input.x = input.y = 0; knob.style.transform = ""; }
      joy.addEventListener("pointerup", lepas); joy.addEventListener("pointercancel", lepas);
      // ketuk untuk berjalan
      cv.addEventListener("pointerdown", function (e) {
        if (!pemain || modalTerbuka) return;
        var dpr = cv.width / innerWidth, vw = cv.width / S, vh = cv.height / S;
        var x0 = Math.max(vw / 2, Math.min(dunia.W * T - vw / 2, cam.x)) - vw / 2, y0 = Math.max(vh / 2, Math.min(dunia.H * T - vh / 2, cam.y)) - vh / 2;
        var wx = x0 + e.clientX * dpr / S, wy = y0 + e.clientY * dpr / S, px = e.clientX * dpr, py = e.clientY * dpr;
        // ketuk label tempat = buka (atau berjalan ke sana lalu buka)
        var kena = null;
        kotakLabel.forEach(function (k) { if (px >= k.x - 6 && px <= k.x + k.w + 6 && py >= k.y - 6 && py <= k.y + k.h + 6) kena = k.key; });
        if (!kena) daftar.forEach(function (key) { var t = dunia.tempat[key]; if (wx >= t.x * T - 4 && wx <= (t.x + t.w) * T + 4 && wy >= t.y * T - 20 && wy <= (t.y + t.h) * T) kena = key; });
        hentikanTur();
        if (kena) { bukaAtauDatangi(kena); return; }
        var tujuan = { x: Math.floor(wx / T), y: Math.floor(wy / T) };
        if (tujuan.y < 0 || tujuan.x < 0 || tujuan.y >= dunia.H || tujuan.x >= dunia.W || dunia.padat[tujuan.y][tujuan.x]) return;
        jalur = cariJalur(Math.floor(pemain.x / T), Math.floor((pemain.y - 2) / T), tujuan.x, tujuan.y);
        jalurBuka = null;
      });
      addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.hidden && !modal.classList.contains("wajib")) { tutupModal(); return; }
        if (modalTerbuka || /INPUT|TEXTAREA|SELECT|BUTTON/.test((e.target || {}).tagName || "")) return;
        if ((e.key === "Enter" || e.key === " ") && pemain && tempatDekat()) { e.preventDefault(); bukaTempat(tempatDekat()); return; }
        var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (/^Arrow|^[wasd]$/.test(k)) { kunci[k] = true; e.preventDefault(); }
      });
      addEventListener("keyup", function (e) { var k = e.key.length === 1 ? e.key.toLowerCase() : e.key; kunci[k] = false; });
      addEventListener("blur", function () { kunci = {}; });
    }

    var tema = {
      id: "jelajah-" + latar,
      hitung: "kotak",
      galeri: "grid",
      partikel: opsi.partikel || { jenis: "kelopak", warna: ["#ffffff"], min: 0, max: 0, jumlah: 0 },
      label: opsi.label,
      kata: opsi.kata || { buka: "Buka Undangan" },
      jedaBuka: 500, lamaBuka: 900,
      sampul: function (c) {
        return '<div class="cover-text"><div class="jl-sampul"><div class="eyebrow">The Wedding of</div><div class="jl-nama"><span>' + c.esc(c.nama1) + '</span><b>&amp;</b><span>' + c.esc(c.nama2) + '</span></div>' +
          '<div class="jl-tgl">' + c.esc(c.tanggalPendek) + '</div></div>' +
          '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
          '<button class="btn-open jl-btn" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
      },
      samping: function () { return ""; },
      pembuka: function () { return ""; },
      siap: function (c) {
        ctxU = c;
        document.body.classList.add("tema-jelajah", "latar-" + latar);
        var dpr0 = Math.min(window.devicePixelRatio || 1, 2), s0 = Math.max(2, Math.min(innerWidth / (T * 8.5), innerHeight / (T * 14))) * dpr0;
        daftar = URUT_TUR.filter(function (k) { return LATAR[latar].tempat[k] && ISI_TEMPAT[k].some(function (id) { return document.getElementById(id); }); });
        if (daftar.indexOf("mempelai") < 0) daftar.push("mempelai");
        dunia = bangunDunia(latar, Math.max(3, Math.min(4, Math.ceil(s0))), daftar);
        cv = el("canvas", "jl-dunia"); cv.setAttribute("aria-label", "Peta " + LATAR_NAMA[latar] + " acara pernikahan"); cv.setAttribute("role", "img");
        document.body.insertBefore(cv, document.body.firstChild);
        g = cv.getContext("2d");
        cam.x = cam.tx = dunia.kamera.x; cam.y = cam.ty = dunia.kamera.y;
        ukur(); addEventListener("resize", ukur);
        // pengantin berdiri di tempat mempelai
        var tm = dunia.tempat.mempelai;
        if (tm) {
          var yy = (tm.y + tm.h) * T - (tm.obj === "pelaminan" ? 10 : 4), cx = (tm.x + tm.w / 2) * T;
          npc.push({ x: cx - 7, y: yy, arah: "bawah", jalan: false, anim: 0, jenis: "pria", palet: "mpria" });
          npc.push({ x: cx + 7, y: yy, arah: "bawah", jalan: false, anim: 0, jenis: "wanita", palet: "mwanita" });
        }
        var tu = dunia.tempat.ucapan;
        if (tu) { npc.push({ x: (tu.x + tu.w) * T + 8, y: (tu.y + 1) * T - 2, arah: "kiri", jalan: false, anim: 0, jenis: "wanita", palet: "resepsionis" }); dunia.padat[tu.y][tu.x + tu.w] = true; }
        // HUD
        var hud = el("div", "jl-hud", '<div class="jl-judul"><b>' + c.duaNama + '</b><small id="jlSisa"></small></div><canvas id="jlAvatar" width="96" height="96" aria-hidden="true"></canvas>');
        document.body.appendChild(hud);
        holder = el("div", "jl-simpan"); holder.hidden = true; document.body.appendChild(holder);
        modal = el("div", "jl-modal", '<div class="jl-panel" role="dialog" aria-modal="true"><button type="button" class="jl-tutup" aria-label="Tutup">&times;</button><div class="jl-isi"></div></div>');
        modal.hidden = true; document.body.appendChild(modal);
        panel = modal.firstChild; isi = panel.querySelector(".jl-isi"); tutupBtn = panel.querySelector(".jl-tutup");
        tutupBtn.addEventListener("click", tutupModal);
        modal.addEventListener("click", function (e) { if (e.target === modal) tutupModal(); });
        // tombol scroll otomatis dijadikan tur otomatis
        var lama = document.getElementById("autoBtn");
        if (lama) {
          autoBtn = lama.cloneNode(true); autoBtn.setAttribute("aria-label", "Jalan otomatis ke semua tempat"); autoBtn.title = "Jalan otomatis";
          autoBtn.innerHTML = '<svg class="i-play" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 3h2v18H5zM8 4h11l-3 4 3 4H8z"/></svg><svg class="i-pause" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 5h4v14H7zm6 0h4v14h-4z"/></svg>';
          lama.parentNode.replaceChild(autoBtn, lama);
          autoBtn.addEventListener("click", function () { if (tur) hentikanTur(); else mulaiTur(); });
        }
        pasangKontrol();
        requestAnimationFrame(putar);
      },
      saatBuka: function () {
        daftar = URUT_TUR.filter(function (k) { return dunia.tempat[k] && ISI_TEMPAT[k].some(function (id) { return document.getElementById(id); }); });
        perbaruiHud();
        setTimeout(function () { pilihKarakter(sambutan); }, 450);
      }
    };
    return tema;
  }

  window.JELAJAH = { buat: buatTema };
})();
