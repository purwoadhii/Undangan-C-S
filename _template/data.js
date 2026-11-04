/* =====================================================================
   DATA UNDANGAN — cukup ubah teks di antara tanda kutip "...".
   Foto taruh di folder assets/ dengan nama yang sama seperti di bawah.
   Bagian yang tidak dipakai boleh dikosongkan, contoh: cerita: [],
   ===================================================================== */
window.UNDANGAN = {

  // Tema undangan. Pilihan: lihat tema/daftar.js (contoh: "taman")
  tema: "taman",

  // Kata pembuka dari mempelai (opsional). Kosongkan untuk memakai kalimat bawaan tema.
  pembuka: "",

  pria: {
    panggilan: "Nama Pria",
    lengkap:   "Nama Lengkap Pria",
    orangTua:  "Putra dari Bapak ... & Ibu ...",
    foto:      "assets/pria.jpg"
  },

  wanita: {
    panggilan: "Nama Wanita",
    lengkap:   "Nama Lengkap Wanita",
    orangTua:  "Putri dari Bapak ... & Ibu ...",
    foto:      "assets/wanita.jpg"
  },

  // Huruf besar di sampul. Kosongkan ("") untuk memakai huruf depan nama.
  monogram: "",

  // Waktu untuk hitung mundur: tahun-bulan-tanggal T jam:menit (+07:00 = WIB, +08:00 = WITA, +09:00 = WIT)
  tanggal: "2026-12-19T08:00:00+07:00",

  // Foto berdua di bingkai lengkung (foto potret)
  fotoPasangan: "assets/couple.jpg",

  acara: [
    {
      nama:    "Akad Nikah",
      tanggal: "2026-12-19",
      jam:     "08.00 – 10.00 WIB",
      tempat:  "Nama Tempat Akad",
      alamat:  "Alamat lengkap",
      peta:    "https://maps.google.com/?q=Nama+Tempat"
    },
    {
      nama:    "Resepsi",
      tanggal: "2026-12-19",
      jam:     "11.00 – 14.00 WIB",
      tempat:  "Nama Tempat Resepsi",
      alamat:  "Alamat lengkap",
      peta:    "https://maps.google.com/?q=Nama+Tempat"
    }
  ],

  ayat: {
    teks:   "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum : 21"
  },

  // Tiap cerita boleh diberi foto: "assets/cerita1.jpg", video: "assets/cerita1.mp4", atau youtube: "link". Semuanya opsional.
  cerita: [
    { waktu: "Bulan Tahun", judul: "Pertama Bertemu", isi: "Ceritakan singkat di sini." },
    { waktu: "Bulan Tahun", judul: "Lamaran",         isi: "Ceritakan singkat di sini." }
  ],

  // Video khusus (opsional): isi link YouTube ATAU file mp4 di assets. Kosongkan keduanya bila tidak ada, bagiannya tidak tampil.
  video: { youtube: "", src: "", judul: "Our Moment" },

  // Galeri foto & video. Kosongkan (galeri: [],) bila tidak ada, bagiannya tidak tampil.
  galeri: [
    "assets/foto1.jpg", "assets/foto2.jpg", "assets/foto3.jpg",
    "assets/foto4.jpg", "assets/foto5.jpg", "assets/foto6.jpg"
  ],

  rekening: [
    { bank: "BCA",     atasNama: "Nama Pemilik", nomor: "0000 0000 00" },
    { bank: "Mandiri", atasNama: "Nama Pemilik", nomor: "0000 0000 00" }
  ],

  // Musik latar (mp3). Kosongkan ("") bila tanpa musik.
  musik: "assets/music.mp3",

  // Opsional: URL Google Apps Script agar ucapan tamu tersimpan di Google Sheet.
  ucapanScriptUrl: "",

  // Contoh ucapan yang tampil di awal. Kosongkan: contohUcapan: [],
  contohUcapan: [
    { nama: "Keluarga Bapak Hendra", hadir: "Hadir", ucapan: "Selamat menempuh hidup baru. Semoga menjadi keluarga sakinah, mawaddah, warahmah." }
  ]
};
