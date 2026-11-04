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
  var NAMA_TEMPAT = { mempelai: "Mempelai", acara: "Acara", cerita: "Kisah Kami", galeri: "Galeri", hadiah: "Kado", ucapan: "Ucapan & RSVP" };
  var ISI_TEMPAT = { mempelai: ["mempelai"], acara: ["acara"], cerita: ["cerita"], galeri: ["galeri", "video"], hadiah: ["hadiah"], ucapan: ["ucapan"] };
  var URUT_TUR = ["mempelai", "acara", "cerita", "galeri", "hadiah", "ucapan"];

  /* ---------- Sprite karakter (12 x 18 piksel) ---------- */
  var SPRITE = {
    pria: {
      depan: ["...cccccc...", "..cccccccc..", "..hhhhhhhh..", "..hssssssh..", "..sesssses..", "..ssssssss..", "...sSSSSs...", "....ssss....", "..vvwwwwvv..", ".svvvwwvvvs.", ".svvvwwvvvs.", ".s.vvwwvv.s.", "...pppppp...", "...pppppp..."],
      belakang: ["...cccccc...", "..cccccccc..", "..hhhhhhhh..", "..hhhhhhhh..", "..hhhhhhhh..", "..shhhhhhs..", "...SSSSSS...", "....ssss....", "..vvvvvvvv..", ".svvvvvvvvs.", ".svvvvvvvvs.", ".s.vvvvvv.s.", "...pppppp...", "...pppppp..."],
      samping: ["...cccccc...", "..ccccccc...", "..hhhhhhh...", "..hhsssss...", "..hssssse...", "..hsssssss..", "...sSSSs....", "....sss.....", "...vvwwv....", "...vvwsw....", "...vvwsw....", "...vvwwv....", "....ppp.....", "....ppp....."],
      kaki: { depan: [["...pp..pp...", "...pp..pp...", "...ff..ff..."], ["...pp..pp...", "...pp..ff...", "...ff......."], ["...pp..pp...", "...ff..pp...", ".......ff..."]],
        samping: [["....pp......", "....pp......", "....fff....."], ["...p..p.....", "..p....p....", "..f....ff..."], ["....pp......", "....pp......", "....fff....."]] }
    },
    wanita: {
      depan: ["....hhhh....", "...hhhhhho..", "..hhhhhhhh..", "..hssssssh..", "..sesssses..", "..ssssssss..", "...sSSSSs...", "....ssss....", "..kkkkkkkk..", ".skkkkkkkks.", ".skkkkkkkks.", ".s.kkkkkk.s.", "...gGggGg...", "...gggGgg..."],
      belakang: ["....hhhh....", "...hhhhhho..", "..hhhhhhhh..", "..hhhhhhhh..", "..hhhhhhhh..", "..shhhhhhs..", "...SSSSSS...", "....ssss....", "..kkkkkkkk..", ".skkkkkkkks.", ".skkkkkkkks.", ".s.kkkkkk.s.", "...gGggGg...", "...gggGgg..."],
      samping: ["....hhhh....", "..ohhhhhh...", "..hhhhhhh...", "..hhsssss...", "..hssssse...", "..hsssssss..", "...sSSSs....", "....sss.....", "...kkkkk....", "...kkkks....", "...kkkks....", "...kkkkk....", "...gGgggG...", "...ggGgg...."],
      kaki: { depan: [["...gGgggG...", "...ggGggg...", "....f..f...."], ["...gGgggG...", "...ggGggg...", "....f......."], ["...gGgggG...", "...ggGggg...", ".......f...."]],
        samping: [["...gGgggG...", "...ggGggg...", "....ff......"], ["...gGgggG...", "...ggGggg...", "...f...f...."], ["...gGgggG...", "...ggGggg...", "....ff......"]] }
    }
  };
  var PALET = {
    pria: { c: "#1c1c22", h: "#2a1b12", s: "#e2aa7c", S: "#c88c60", e: "#2a1b12", w: "#f4f1e8", v: "#355a8a", p: "#2a2c36", f: "#3b2a1d" },
    wanita: { h: "#2a1b12", o: "#ffffff", s: "#e8b48a", S: "#cf9468", e: "#2a1b12", k: "#9cc7a8", g: "#6e4a33", G: "#d1a15b", f: "#8a5a3b" },
    mpria: { c: "#5a3d22", h: "#2a1b12", s: "#d9a072", S: "#bf8558", e: "#2a1b12", w: "#fff4d6", v: "#c9a24a", p: "#6b4a2e", f: "#3b2a1d" },
    mwanita: { h: "#2a1b12", o: "#f4d77a", s: "#e3ad82", S: "#c98f63", e: "#2a1b12", k: "#fffaf0", g: "#c9a24a", G: "#fff4d6", f: "#c9a24a" },
    resepsionis: { h: "#3a2418", o: "#ffd36e", s: "#d8a074", S: "#be865a", e: "#2a1b12", k: "#c95b6a", g: "#4a3a5a", G: "#9a8ab0", f: "#3b2a1d" }
  };
  var cacheSprite = {};
  function gambarSprite(jenis, palet, arah, frame) {
    var key = jenis + palet + arah + frame;
    if (cacheSprite[key]) return cacheSprite[key];
    var sp = SPRITE[jenis], P = PALET[palet];
    var badan = arah === "atas" ? sp.belakang : arah === "bawah" ? sp.depan : sp.samping;
    var kaki = (arah === "kiri" || arah === "kanan") ? sp.kaki.samping[frame] : sp.kaki.depan[frame];
    var rows = badan.concat(kaki), cv = document.createElement("canvas");
    cv.width = 12; cv.height = 18;
    var g = cv.getContext("2d");
    for (var y = 0; y < rows.length; y++) for (var x = 0; x < 12; x++) {
      var ch = rows[y].charAt(x); if (ch === "." || !P[ch]) continue;
      var xx = arah === "kiri" ? 11 - x : x;
      g.fillStyle = P[ch]; g.fillRect(xx, y, 1, 1);
    }
    // garis luar tipis agar karakter terbaca di atas latar apa pun
    var img = g.getImageData(0, 0, 12, 18), out = document.createElement("canvas");
    out.width = 14; out.height = 20;
    var o = out.getContext("2d");
    o.fillStyle = "rgba(30,18,10,.55)";
    for (y = 0; y < 18; y++) for (x = 0; x < 12; x++) if (img.data[(y * 12 + x) * 4 + 3]) {
      [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) {
        var nx = x + d[0], ny = y + d[1];
        if (nx < 0 || ny < 0 || nx > 11 || ny > 17 || !img.data[(ny * 12 + nx) * 4 + 3]) o.fillRect(nx + 1, ny + 1, 1, 1);
      });
    }
    o.drawImage(cv, 1, 1);
    cacheSprite[key] = out;
    return out;
  }

  /* ---------- Gambar petak (piksel) ---------- */
  function acak(x, y, k) { var n = Math.sin(x * 127.1 + y * 311.7 + (k || 0) * 74.7) * 43758.5453; return n - Math.floor(n); }
  function kotak(g, x, y, w, h, c) { g.fillStyle = c; g.fillRect(x, y, w, h); }

  function rumput(g, X, Y, tx, ty, gelap) {
    kotak(g, X, Y, T, T, gelap ? "#5c9440" : "#74b14e");
    for (var i = 0; i < 7; i++) {
      var a = acak(tx, ty, i), b = acak(ty, tx, i + 9);
      kotak(g, X + Math.floor(a * 15), Y + Math.floor(b * 15), 1, 2, i % 2 ? "#5f9a3d" : "#8cc65e");
    }
  }
  function lantaiMarmer(g, X, Y, tx, ty) {
    kotak(g, X, Y, T, T, (tx + ty) % 2 ? "#efe7d8" : "#e3d7c3");
    kotak(g, X, Y, T, 1, "rgba(255,255,255,.35)");
    if (acak(tx, ty) > .6) kotak(g, X + 3 + Math.floor(acak(ty, tx) * 8), Y + 5, 4, 1, "rgba(160,140,110,.25)");
  }
  function jalanBatu(g, X, Y, tx, ty) {
    kotak(g, X, Y, T, T, "#d8c39a");
    kotak(g, X + 1, Y + 1, 6, 6, "#e3d1ab"); kotak(g, X + 9, Y + 2, 6, 5, "#e0cca3"); kotak(g, X + 2, Y + 9, 5, 6, "#e3d0a9"); kotak(g, X + 8, Y + 9, 7, 5, "#dfcaa0");
    kotak(g, X, Y + 7, T, 1, "#b9a377"); kotak(g, X + 7, Y, 1, 7, "#b9a377"); kotak(g, X + 7, Y + 8, 1, 8, "#b9a377");
  }
  function pasir(g, X, Y, tx, ty, basah) {
    kotak(g, X, Y, T, T, basah ? "#dcc48f" : "#f0dca7");
    for (var i = 0; i < 6; i++) kotak(g, X + Math.floor(acak(tx, ty, i) * 15), Y + Math.floor(acak(ty, tx, i + 3) * 15), 1, 1, i % 2 ? "#e2c98d" : "#f8ebc6");
    if (basah) { kotak(g, X, Y, T, 3, "#f4fbfb"); kotak(g, X + (tx * 5 % 9), Y + 3, 6, 1, "#f4fbfb"); }
  }
  function air(g, X, Y, tx, ty) {
    kotak(g, X, Y, T, T, "#3aa6c8");
    kotak(g, X + Math.floor(acak(tx, ty) * 8), Y + 4 + Math.floor(acak(ty, tx) * 6), 5, 1, "#7fd3e6");
    kotak(g, X + 9, Y + 12, 4, 1, "#2c8fb3");
  }
  function karpet(g, X, Y, kiri, kanan) {
    kotak(g, X, Y, T, T, "#a8323a");
    kotak(g, X, Y + 3, T, 1, "#8f2830"); kotak(g, X, Y + 11, T, 1, "#8f2830");
    if (kiri) kotak(g, X, Y, 2, T, "#d4ac55");
    if (kanan) kotak(g, X + 14, Y, 2, T, "#d4ac55");
  }
  function kelopakJalan(g, X, Y, tx, ty, kiri, kanan) {
    pasir(g, X, Y, tx, ty);
    kotak(g, X + (kiri ? 2 : 0), Y, T - (kiri ? 2 : 0) - (kanan ? 2 : 0), T, "#fbf6ec");
    if (kiri) kotak(g, X + 2, Y, 1, T, "#e6d8bd"); if (kanan) kotak(g, X + 13, Y, 1, T, "#e6d8bd");
    var w = ["#ffffff", "#f6a9c0", "#fbd38d"];
    for (var i = 0; i < 5; i++) kotak(g, X + Math.floor(acak(tx, ty, i + 20) * 14), Y + Math.floor(acak(ty, tx, i + 30) * 14), 2, 1, w[i % 3]);
  }
  function papanKayu(g, X, Y, diAir) {
    if (diAir) kotak(g, X, Y, T, T, "#3aa6c8");
    kotak(g, X + 1, Y, 14, T, "#a8794a");
    for (var i = 0; i < 4; i++) kotak(g, X + 1, Y + i * 4 + 3, 14, 1, "#7c5530");
    if (diAir) { kotak(g, X, Y, 2, T, "#6b4426"); kotak(g, X + 14, Y, 2, T, "#6b4426"); }
  }
  function dinding(g, X, Y, bawahDinding, tx) {
    if (bawahDinding) { kotak(g, X, Y, T, T, "#4a3226"); kotak(g, X, Y + 14, T, 2, "#5e4232"); return; }
    kotak(g, X, Y, T, T, "#efe2c8");
    kotak(g, X, Y, T, 2, "#d4ac55");
    kotak(g, X, Y + 9, T, 7, "#8a5a3b"); kotak(g, X, Y + 9, T, 1, "#d4ac55");
    kotak(g, X + 3, Y + 11, 10, 3, "#7a4e32");
    if (tx % 3 === 0) { kotak(g, X + 6, Y + 3, 4, 4, "#d4ac55"); kotak(g, X + 7, Y + 4, 2, 2, "#fff3c4"); }
  }
  function semak(g, X, Y, tx, ty, alas) {
    alas(); kotak(g, X + 1, Y + 4, 14, 11, "#3f7d3a"); kotak(g, X + 3, Y + 2, 10, 4, "#4f9446"); kotak(g, X + 3, Y + 6, 4, 3, "#66ad5a"); kotak(g, X + 9, Y + 8, 3, 2, "#66ad5a");
    if (acak(tx, ty) > .5) { kotak(g, X + 5, Y + 5, 2, 2, "#f6a9c0"); kotak(g, X + 11, Y + 10, 2, 2, "#ffffff"); }
  }
  function bunga(g, X, Y, tx, ty) {
    var w = ["#f6a9c0", "#ffffff", "#fbd38d", "#c9a0e8"];
    for (var i = 0; i < 6; i++) { var x = X + 2 + Math.floor(acak(tx, ty, i + 40) * 11), y = Y + 2 + Math.floor(acak(ty, tx, i + 50) * 11); kotak(g, x, y + 2, 1, 2, "#3f7d3a"); kotak(g, x - 1, y, 3, 2, w[i % 4]); kotak(g, x, y, 1, 1, "#fbd38d"); }
  }

  /* objek tinggi: bagian bawah di lapisan tanah, bagian atas (kanopi, atap) di lapisan atas */
  function pohon(gt, ga, X, Y, tx, ty) {
    kotak(gt, X + 6, Y + 6, 4, 10, "#6b4426"); kotak(gt, X + 6, Y + 6, 1, 10, "#8a5a33");
    kotak(gt, X + 2, Y + 14, 12, 2, "rgba(0,0,0,.18)");
    var c = ["#2f6b34", "#3a7d3c", "#4c9446"];
    var cx = X + 8, cy = Y - 1;
    lingkaran(ga, cx, cy, 11, c[0]); lingkaran(ga, cx - 2, cy - 2, 8, c[1]); lingkaran(ga, cx - 4, cy - 4, 4, c[2]);
    if (acak(tx, ty) > .7) { kotak(ga, cx + 3, cy - 2, 2, 2, "#e85a5a"); kotak(ga, cx - 5, cy + 4, 2, 2, "#e85a5a"); }
  }
  function lingkaran(g, cx, cy, r, c) {
    g.fillStyle = c;
    for (var y = -r; y <= r; y++) { var w = Math.round(Math.sqrt(r * r - y * y)); g.fillRect(cx - w, cy + y, w * 2, 1); }
  }
  function kelapa(gt, ga, X, Y) {
    for (var i = 0; i < 14; i++) kotak(gt, X + 7 + Math.round(Math.sin(i / 5) * 2), Y + 2 + i, 3, 1, i % 3 ? "#8a6a45" : "#6e5233");
    for (i = 0; i < 18; i++) kotak(ga, X + 8 + Math.round(Math.sin(i / 6) * 3), Y - 14 + i, 3, 1, i % 3 ? "#8a6a45" : "#6e5233");
    var cx = X + 9, cy = Y - 16;
    [[-1, 0], [1, 0], [-.7, .6], [.7, .6], [-.4, -.5], [.4, -.5]].forEach(function (d, k) {
      for (var j = 0; j < 12; j++) { var x = Math.round(cx + d[0] * j * 1.2), y = Math.round(cy + d[1] * j + j * j * .06); kotak(ga, x, y, 2, 2, k % 2 ? "#3c8a4e" : "#2f7140"); kotak(ga, x, y + 2, 1, 1, "#4fa862"); }
    });
    kotak(ga, cx - 2, cy + 1, 3, 3, "#7a5530"); kotak(ga, cx + 1, cy + 2, 3, 3, "#6b4426");
  }
  function kursi(g, X, Y, latar) {
    if (latar === "hutan") { kotak(g, X + 1, Y + 6, 14, 4, "#8a5a33"); kotak(g, X + 1, Y + 6, 14, 1, "#a8794a"); kotak(g, X + 2, Y + 10, 2, 4, "#6b4426"); kotak(g, X + 12, Y + 10, 2, 4, "#6b4426"); return; }
    kotak(g, X + 4, Y + 3, 8, 3, "#ffffff"); kotak(g, X + 4, Y + 6, 8, 5, "#f2efe8"); kotak(g, X + 4, Y + 11, 1, 4, "#d8d2c4"); kotak(g, X + 11, Y + 11, 1, 4, "#d8d2c4");
    kotak(g, X + 7, Y + 3, 2, 3, "#f6a9c0");
  }
  function meja(g, X, Y, latar) {
    if (latar === "hutan") {
      kotak(g, X - 4, Y + 2, 24, 3, "#8a5a33"); kotak(g, X - 4, Y + 5, 24, 6, "#a8794a"); kotak(g, X - 4, Y + 11, 24, 3, "#8a5a33");
      kotak(g, X + 3, Y + 6, 3, 3, "#f6a9c0"); kotak(g, X + 10, Y + 7, 4, 2, "#ffffff"); return;
    }
    kotak(g, X - 5, Y + 3, 4, 4, "#d4ac55"); kotak(g, X + 17, Y + 3, 4, 4, "#d4ac55"); kotak(g, X + 6, Y - 3, 4, 3, "#d4ac55"); kotak(g, X + 6, Y + 15, 4, 3, "#d4ac55");
    lingkaran(g, X + 8, Y + 7, 9, "#d9d2c4"); lingkaran(g, X + 8, Y + 6, 9, "#ffffff");
    lingkaran(g, X + 8, Y + 6, 3, "#f6a9c0"); kotak(g, X + 7, Y + 5, 2, 2, "#fbd38d");
  }
  function lampuTaman(gt, ga, X, Y) {
    kotak(gt, X + 7, Y + 2, 2, 13, "#3b3b44"); kotak(gt, X + 5, Y + 14, 6, 2, "#2b2b33");
    kotak(ga, X + 5, Y - 4, 6, 7, "#3b3b44"); kotak(ga, X + 6, Y - 3, 4, 5, "#ffe7a3");
  }

  /* objek tempat */
  function gambarTempat(gt, ga, key, t, latar) {
    var X = t.x * T, Y = t.y * T, W = t.w * T, H = t.h * T;
    var o = t.obj;
    if (o === "pelaminan") {
      kotak(gt, X - 6, Y + H - 10, W + 12, 12, "#c9a24a"); kotak(gt, X - 6, Y + H - 10, W + 12, 2, "#f4dc98");
      kotak(gt, X, Y - 2, W, H - 8, "#fff7e8");
      for (var i = 0; i < W; i += 8) kotak(gt, X + i, Y - 2, 4, H - 8, "#f6ecd8");
      kotak(gt, X, Y - 4, W, 4, "#c9a24a");
      kotak(gt, X + W / 2 - 18, Y + 12, 36, 12, "#b8323a"); kotak(gt, X + W / 2 - 18, Y + 12, 36, 3, "#d4505a");
      [X + 2, X + W - 16].forEach(function (x) { for (var k = 0; k < 10; k++) kotak(gt, x + Math.floor(acak(x, k) * 12), Y + 4 + Math.floor(acak(k, x) * 22), 3, 3, ["#ffffff", "#f6a9c0", "#fbd38d"][k % 3]); kotak(gt, x + 4, Y + 28, 6, 8, "#3f7d3a"); });
    } else if (o === "gapura-pantai" || o === "gapura-hutan") {
      var kayu = o === "gapura-pantai" ? "#f4efe4" : "#7a5230";
      kotak(gt, X + 6, Y + 4, 4, H - 4, kayu); kotak(gt, X + W - 10, Y + 4, 4, H - 4, kayu);
      kotak(ga, X + 2, Y - 10, W - 4, 4, kayu); kotak(ga, X + 6, Y - 14, W - 12, 4, kayu);
      if (o === "gapura-pantai") { for (i = 0; i < 6; i++) { kotak(ga, X + 6 + i * 3, Y - 6 + i * 3, 3, 4, "rgba(255,255,255,.85)"); kotak(ga, X + W - 9 - i * 3, Y - 6 + i * 3, 3, 4, "rgba(255,255,255,.85)"); } }
      else { for (i = 0; i < 16; i++) kotak(ga, X + 4 + i * 3.5, Y - 16 + Math.round(acak(i, 3) * 4), 4, 4, i % 2 ? "#3f7d3a" : "#4f9446"); }
      for (i = 0; i < 14; i++) kotak(ga, X + 2 + Math.floor(acak(i, 9) * (W - 6)), Y - 15 + Math.floor(acak(9, i) * 8), 3, 3, ["#ffffff", "#f6a9c0", "#fbd38d", "#e85a7a"][i % 4]);
      kotak(gt, X + 2, Y + H - 2, W - 4, 2, "rgba(0,0,0,.12)");
    } else if (o === "easel") {
      for (i = 0; i < t.w; i++) {
        var ex = X + i * T;
        kotak(gt, ex + 3, Y + 6, 2, 10, "#6b4426"); kotak(gt, ex + 11, Y + 6, 2, 10, "#6b4426");
        kotak(ga, ex + 1, Y - 6, 14, 14, "#8a5a33"); kotak(ga, ex + 2, Y - 5, 12, 12, i % 2 ? "#cfe3ef" : "#f6d6c0");
        kotak(ga, ex + 4, Y + 1, 8, 4, i % 2 ? "#7fb38a" : "#e3a07a"); lingkaran(ga, ex + 10, Y - 2, 2, "#ffffff");
      }
    } else if (o === "kado") {
      kotak(gt, X + 1, Y + T * t.h - 9, W - 2, 8, latar === "gedung" ? "#ffffff" : "#a8794a");
      [["#d4505a", 2, -4, 10], ["#5a8ad4", 13, -2, 9], ["#e8b84f", 22, -6, 8], ["#7fb38a", 8, -12, 8]].forEach(function (b) {
        kotak(ga, X + b[1], Y + T * t.h - 9 + b[2] - b[3], b[3], b[3], b[0]); kotak(ga, X + b[1] + b[3] / 2 - 1, Y + T * t.h - 9 + b[2] - b[3], 2, b[3], "#fff3c4"); kotak(ga, X + b[1], Y + T * t.h - 9 + b[2] - b[3] / 2 - 1, b[3], 2, "#fff3c4");
      });
    } else if (o === "bingkai") {
      kotak(gt, X + 1, Y + 8, W - 2, 6, "#8a5a33"); kotak(gt, X + 2, Y + 14, 2, 2, "#6b4426"); kotak(gt, X + W - 4, Y + 14, 2, 2, "#6b4426");
      for (i = 0; i < t.w; i++) { kotak(ga, X + i * T + 3, Y - 4, 10, 13, "#d4ac55"); kotak(ga, X + i * T + 4, Y - 3, 8, 9, i % 2 ? "#f6d6c0" : "#d6e6f2"); lingkaran(ga, X + i * T + 8, Y + 1, 2, "#e85a7a"); }
    } else if (o === "papan") {
      kotak(gt, X + 4, Y + 4, 2, 12, "#6b4426"); kotak(gt, X + W - 6, Y + 4, 2, 12, "#6b4426");
      kotak(ga, X + 1, Y - 8, W - 2, 14, "#8a5a33"); kotak(ga, X + 2, Y - 7, W - 4, 12, "#f4e6c4");
      kotak(ga, X + W / 2 - 5, Y - 5, 10, 8, "#ffffff"); kotak(ga, X + W / 2 - 5, Y - 5, 10, 2, "#d4505a"); kotak(ga, X + W / 2 - 2, Y - 1, 4, 3, "#d4505a");
    } else if (o === "meja-tamu") {
      kotak(gt, X, Y + 4, W, 10, "#ffffff"); kotak(gt, X, Y + 12, W, 2, "#d8d2c4"); kotak(gt, X, Y + 4, W, 2, "#d4ac55");
      kotak(gt, X + 6, Y + 5, 12, 6, "#f8f1df"); kotak(gt, X + 12, Y + 5, 1, 6, "#c9b48a"); kotak(gt, X + 20, Y + 3, 1, 6, "#3b2a1d");
      kotak(gt, X + 24, Y + 2, 4, 6, "#7fb38a"); kotak(gt, X + 25, Y, 2, 2, "#f6a9c0");
    }
  }
  function gambarHias(ga, h) {
    if (h.t === "lampu-gantung") {
      var X = h.x * T, Y = h.y * T;
      lingkaran(ga, X, Y, 9, "rgba(255,230,160,.18)");
      kotak(ga, X - 7, Y - 1, 14, 2, "#d4ac55"); kotak(ga, X - 5, Y - 4, 10, 2, "#d4ac55"); kotak(ga, X - 1, Y - 8, 2, 4, "#d4ac55");
      [-7, -3, 1, 5].forEach(function (d) { kotak(ga, X + d, Y + 1, 2, 3, "#fff3c4"); });
    } else if (h.t === "payung") {
      var cx = h.x * T, cy = h.y * T;
      kotak(ga, cx - 1, cy, 2, 18, "#8a6a45");
      for (var y = 0; y < 9; y++) { var w = 4 + y * 2; for (var x = -w; x < w; x += 4) kotak(ga, cx + x, cy - 9 + y, 4, 1, ((x + 40) / 4) % 2 ? "#e0785c" : "#fff4e0"); }
    } else if (h.t === "lampu-tali") {
      var x1 = h.x * T, x2 = h.x2 * T, yy = h.y * T - 18;
      for (var i = 0; i <= (x2 - x1); i += 2) { var sag = Math.sin(i / (x2 - x1) * Math.PI) * 10; kotak(ga, x1 + i, Math.round(yy + sag), 2, 1, "#3b2a1d"); if (i % 10 === 0) kotak(ga, x1 + i, Math.round(yy + sag) + 1, 2, 3, ["#ffe7a3", "#fbd38d", "#fff3c4"][(i / 10) % 3]); }
    }
  }

  /* ---------- Membangun dunia ---------- */
  function bangunDunia(latar) {
    var L = LATAR[latar], peta = L.peta, rows = peta.length, cols = peta[0].length;
    var PX = 12, PY = 8, W = cols + PX * 2, H = rows + PY * 2;
    function ch(x, y) { return peta[Math.max(0, Math.min(rows - 1, y))].charAt(Math.max(0, Math.min(cols - 1, x))); }
    var tanah = document.createElement("canvas"), atas = document.createElement("canvas");
    tanah.width = atas.width = W * T; tanah.height = atas.height = H * T;
    var gt = tanah.getContext("2d"), ga = atas.getContext("2d");
    var padat = [];
    for (var ty = 0; ty < H; ty++) {
      padat.push([]);
      for (var tx = 0; tx < W; tx++) {
        var mx = tx - PX, my = ty - PY, c = ch(mx, my), X = tx * T, Y = ty * T, luar = mx < 0 || my < 0 || mx >= cols || my >= rows;
        var alas = latar === "gedung" ? (my >= 19 ? function () { rumput(gt, X, Y, tx, ty); } : function () { lantaiMarmer(gt, X, Y, tx, ty); })
          : latar === "pantai" ? function () { pasir(gt, X, Y, tx, ty); } : function () { rumput(gt, X, Y, tx, ty); };
        var solid = luar || "#~TPbLcou|".indexOf(c) >= 0;
        if (c === ".") alas();
        else if (c === ",") { if (latar === "gedung" && my < 19) karpet(gt, X, Y, ch(mx - 1, my) !== ",", ch(mx + 1, my) !== ","); else if (latar === "pantai") kelopakJalan(gt, X, Y, tx, ty, ch(mx - 1, my) !== ",", ch(mx + 1, my) !== ","); else jalanBatu(gt, X, Y, tx, ty); }
        else if (c === "s") pasir(gt, X, Y, tx, ty);
        else if (c === "w") pasir(gt, X, Y, tx, ty, true);
        else if (c === "~") air(gt, X, Y, tx, ty);
        else if (c === "=") papanKayu(gt, X, Y, latar !== "pantai");
        else if (c === "#") dinding(gt, X, Y, ch(mx, my + 1) === "#" || mx <= 0 || mx >= cols - 1, tx);
        else if (c === "T") { rumput(gt, X, Y, tx, ty, true); pohon(gt, ga, X, Y, tx, ty); }
        else if (c === "P") { alas(); kelapa(gt, ga, X, Y); }
        else if (c === "b") { if (latar === "pantai") { pasir(gt, X, Y, tx, ty); for (var k = 0; k < 6; k++) kotak(gt, X + 1 + k * 2.5, Y + 4 + (k % 3), 1, 10 - (k % 3), k % 2 ? "#8faa52" : "#a8c06a"); } else semak(gt, X, Y, tx, ty, alas); }
        else if (c === "f") { alas(); bunga(gt, X, Y, tx, ty); }
        else if (c === "L") { alas(); lampuTaman(gt, ga, X, Y); }
        else if (c === "c") { alas(); kursi(gt, X, Y, latar); }
        else if (c === "o") { alas(); meja(gt, X, Y, latar); }
        else alas();
        padat[ty].push(solid);
      }
    }
    var tempat = {};
    Object.keys(L.tempat).forEach(function (key) {
      var t = L.tempat[key], tt = { x: t.x + PX, y: t.y + PY, w: t.w, h: t.h, obj: t.obj, ty: (t.ty != null ? t.ty : t.y + t.h) + PY };
      tempat[key] = tt;
      for (var y = tt.y; y < tt.y + tt.h; y++) for (var x = tt.x; x < tt.x + tt.w; x++) padat[y][x] = true;
    });
    // pastikan tidak ada objek tempat yang menutupi jalan masuk ke pemicunya
    Object.keys(tempat).forEach(function (key) {
      var tt = tempat[key];
      for (var x = tt.x; x < tt.x + tt.w; x++) padat[tt.ty][x] = false;
    });
    Object.keys(tempat).forEach(function (key) { gambarTempat(gt, ga, key, tempat[key], latar); });
    (L.hias || []).forEach(function (h) { var hh = {}; for (var k in h) hh[k] = h[k]; hh.x += PX; hh.y += PY; if (hh.x2 != null) { hh.x2 += PX; hh.y2 += PY; } gambarHias(ga, hh); });
    return { tanah: tanah, atas: atas, padat: padat, W: W, H: H, PX: PX, PY: PY, tempat: tempat, awal: { x: (L.awal.x + PX) * T, y: (L.awal.y + PY) * T }, kamera: { x: (L.kamera.x + PX) * T, y: (L.kamera.y + PY) * T }, latar: latar, air: [] };
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
      S = Math.max(2, Math.round(Math.min(innerWidth / (T * 8.5), innerHeight / (T * 14)))) * dpr;
      g.imageSmoothingEnabled = false;
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
      if (vx || vy) { jalur = null; if (tur) hentikanTur(); }
      else if (jalur && jalur.length) {
        var tgt = jalur[0], dx = tgt.x - pemain.x, dy = tgt.y - pemain.y, d = Math.hypot(dx, dy);
        if (d < 2) { jalur.shift(); if (!jalur.length) { jalur = null; cekTempat(true); } }
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
    var terakhir = null;
    function cekTempat(paksa) {
      var key = tempatDekat();
      if (key && (key !== terakhir || paksa)) { terakhir = key; bukaTempat(key); }
      if (!key) terakhir = null;
    }

    /* kamera & gambar */
    function gambar() {
      var vw = cv.width / S, vh = cv.height / S;
      var fx = pemain ? pemain.x : cam.tx, fy = pemain ? pemain.y - 10 : cam.ty;
      cam.x += (fx - cam.x) * .12; cam.y += (fy - cam.y) * .12;
      var minX = vw / 2, maxX = dunia.W * T - vw / 2, minY = vh / 2, maxY = dunia.H * T - vh / 2;
      var x0 = Math.round((Math.max(minX, Math.min(maxX, cam.x)) - vw / 2) * S) / S, y0 = Math.round((Math.max(minY, Math.min(maxY, cam.y)) - vh / 2) * S) / S;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.fillStyle = LATAR[latar].warna.latar; g.fillRect(0, 0, cv.width, cv.height);
      g.setTransform(S, 0, 0, S, -x0 * S, -y0 * S);
      g.imageSmoothingEnabled = false;
      g.drawImage(dunia.tanah, 0, 0);
      animasiAir(x0, y0, vw, vh);
      var tokoh = npc.slice(); if (pemain) tokoh.push(pemain);
      tokoh.sort(function (a, b) { return a.y - b.y; });
      tokoh.forEach(function (o) {
        var fr = o.jalan ? [0, 1, 0, 2][Math.floor(o.anim) % 4] : 0;
        var bob = o.jalan && fr ? -1 : 0;
        g.fillStyle = "rgba(0,0,0,.2)"; g.fillRect(Math.round(o.x - 5), Math.round(o.y - 1), 10, 3);
        g.drawImage(gambarSprite(o.jenis, o.palet, o.arah, fr), Math.round(o.x - 7), Math.round(o.y - 19 + bob));
      });
      g.drawImage(dunia.atas, 0, 0);
      efek(x0, y0, vw, vh);
      // label tempat (dalam ukuran layar)
      g.setTransform(1, 0, 0, 1, 0, 0);
      var px = Math.max(11, Math.round(S * 4.2));
      g.font = "600 " + px + "px 'Pixelify Sans', 'Nunito', sans-serif"; g.textAlign = "center"; g.textBaseline = "middle";
      daftar.forEach(function (key) {
        var t = dunia.tempat[key], sx = ((t.x + t.w / 2) * T - x0) * S, sy = (t.y * T - 18 - x0 * 0 - y0) * S + Math.sin(waktu * 3 + t.x) * S;
        var teks = (kunjungan[key] ? "✓ " : "") + NAMA_TEMPAT[key], w = g.measureText(teks).width + px * 1.4, h = px * 1.8;
        if (sx < -w || sx > cv.width + w || sy < -h || sy > cv.height + h) return;
        g.globalAlpha = kunjungan[key] ? .7 : 1;
        g.fillStyle = "rgba(40,26,16,.82)"; bulat(g, sx - w / 2, sy - h / 2, w, h, h / 2); g.fill();
        g.fillStyle = kunjungan[key] ? "#cfe8c0" : "#fff3d6"; g.fillText(teks, sx, sy + 1);
        if (!kunjungan[key]) { g.fillStyle = "#ffd36e"; g.beginPath(); g.moveTo(sx - px * .4, sy + h / 2 + 2); g.lineTo(sx + px * .4, sy + h / 2 + 2); g.lineTo(sx, sy + h / 2 + px * .6); g.fill(); }
        g.globalAlpha = 1;
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
          var ph = (waktu * 1.6 + tx * .7 + ty * 1.3) % 4;
          g.fillStyle = "rgba(220,248,255,.55)"; g.fillRect(tx * T + Math.floor(ph * 3), ty * T + 3 + (tx % 3) * 3, 4, 1);
        } else if (c === "w") {
          var o = Math.sin(waktu * 1.5 + tx * .4) * 2;
          g.fillStyle = "rgba(255,255,255,.75)"; g.fillRect(tx * T, ty * T - 1 + o, T, 2);
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
          g.fillStyle = latar === "hutan" ? "rgba(255,236,140," + (.25 + a * .7) + ")" : "rgba(255,245,210," + (a * .5) + ")";
          g.fillRect(Math.round(x), Math.round(y), 1, 1);
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
        if (semua && !simpanan) { simpanan = true; setTimeout(penutup, 250); }
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
        var c = document.createElement("canvas"); c.width = 14 * 6; c.height = 20 * 6;
        var cg = c.getContext("2d"); cg.imageSmoothingEnabled = false; cg.drawImage(gambarSprite(j, j, "bawah", 0), 0, 0, 84, 120);
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
      if (av) { var cg = av.getContext("2d"); cg.imageSmoothingEnabled = false; cg.clearRect(0, 0, av.width, av.height); cg.drawImage(gambarSprite(jenis, jenis, "bawah", 0), 0, 0, 14, 11, 0, 0, av.width, av.width * 11 / 14); }
      perbaruiHud();
      if (petunjuk) { petunjuk.hidden = false; setTimeout(function () { petunjuk.hidden = true; }, 5000); }
    }

    /* tur otomatis */
    var autoBtn;
    function langkahTur() {
      if (!tur) return;
      var key = URUT_TUR.filter(function (k) { return daftar.indexOf(k) >= 0 && !kunjungan[k]; })[0];
      if (!key) { hentikanTur(); return; }
      var t = dunia.tempat[key], gx = t.x + Math.floor(t.w / 2), gy = t.ty;
      jalur = cariJalur(Math.floor(pemain.x / T), Math.floor((pemain.y - 2) / T), gx, gy);
      if (!jalur) { kunjungan[key] = true; langkahTur(); }
      else if (!jalur.length) { jalur = null; bukaTempat(key); }
    }
    function mulaiTur() { if (!pemain || modalTerbuka) return; tur = true; if (autoBtn) { autoBtn.classList.add("on"); autoBtn.setAttribute("aria-pressed", "true"); } langkahTur(); }
    function hentikanTur() { tur = false; if (autoBtn) { autoBtn.classList.remove("on"); autoBtn.setAttribute("aria-pressed", "false"); } }

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
        var wx = x0 + e.clientX * dpr / S, wy = y0 + e.clientY * dpr / S;
        // ketuk label atau objek tempat = berjalan ke tempat itu
        var tujuan = null;
        daftar.forEach(function (key) { var t = dunia.tempat[key]; if (wx >= t.x * T - 6 && wx <= (t.x + t.w) * T + 6 && wy >= t.y * T - 30 && wy <= (t.ty + 1) * T) tujuan = { x: t.x + Math.floor(t.w / 2), y: t.ty }; });
        if (!tujuan) tujuan = { x: Math.floor(wx / T), y: Math.floor(wy / T) };
        if (tujuan.y < 0 || tujuan.x < 0 || tujuan.y >= dunia.H || tujuan.x >= dunia.W || dunia.padat[tujuan.y][tujuan.x]) return;
        hentikanTur();
        jalur = cariJalur(Math.floor(pemain.x / T), Math.floor((pemain.y - 2) / T), tujuan.x, tujuan.y);
        terakhir = null;
      });
      addEventListener("keydown", function (e) {
        if (e.key === "Escape" && !modal.hidden && !modal.classList.contains("wajib")) { tutupModal(); return; }
        if (modalTerbuka || /INPUT|TEXTAREA|SELECT/.test((e.target || {}).tagName || "")) return;
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
        return '<div class="cover-text"><div class="eyebrow">The Wedding of</div><div class="jl-nama"><span>' + c.esc(c.nama1) + '</span><b>&amp;</b><span>' + c.esc(c.nama2) + '</span></div>' +
          '<div class="jl-tgl">' + c.esc(c.tanggalPendek) + '</div>' +
          '<div class="cover-bottom"><div class="guest"><small>' + c.kepada + '</small><strong id="guestName">Tamu Undangan</strong></div>' +
          '<button class="btn-open jl-btn" id="openBtn" type="button">' + c.tombolBuka + '</button></div></div>';
      },
      samping: function () { return ""; },
      pembuka: function () { return ""; },
      siap: function (c) {
        ctxU = c;
        document.body.classList.add("tema-jelajah", "latar-" + latar);
        dunia = bangunDunia(latar);
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
        var hud = el("div", "jl-hud", '<div class="jl-judul"><b>' + c.duaNama + '</b><small id="jlSisa"></small></div><canvas id="jlAvatar" width="44" height="34" aria-hidden="true"></canvas>');
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
        setTimeout(function () { pilihKarakter(sambutan); }, 450);
      }
    };
    return tema;
  }

  window.JELAJAH = { buat: buatTema };
})();
