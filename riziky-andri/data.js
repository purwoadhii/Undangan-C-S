/* =====================================================================
   DATA UNDANGAN — cukup ubah teks di antara tanda kutip "...".
   Foto taruh di folder assets/ dengan nama yang sama seperti di bawah.
   Bagian yang tidak dipakai boleh dikosongkan, contoh: cerita: [],
   ===================================================================== */
window.UNDANGAN = {

  pria: {
    panggilan: "Riziky",
    lengkap:   "Riziky Pratama, S.T.",
    orangTua:  "Putra dari Bapak Ahmad Suryadi & Ibu Siti Rahmawati",
    foto:      "assets/pria.jpg"
  },

  wanita: {
    panggilan: "Andri",
    lengkap:   "Andriani Putri, S.E.",
    orangTua:  "Putri dari Bapak Budi Santoso & Ibu Dewi Lestari",
    foto:      "assets/wanita.jpg"
  },

  // Huruf besar di sampul. Kosongkan ("") untuk memakai huruf depan nama.
  monogram: "RA",

  // Waktu untuk hitung mundur: tahun-bulan-tanggal T jam:menit (+07:00 = WIB, +08:00 = WITA, +09:00 = WIT)
  tanggal: "2026-12-19T08:00:00+07:00",

  // Foto berdua di bingkai lengkung (foto potret)
  fotoPasangan: "assets/couple.jpg",

  acara: [
    {
      nama:    "Akad Nikah",
      tanggal: "2026-12-19",
      jam:     "08.00 – 10.00 WIB",
      tempat:  "Masjid Al-Ikhlas",
      alamat:  "Jl. Kenanga No. 12, Bogor",
      peta:    "https://maps.google.com/?q=Masjid+Al-Ikhlas+Bogor"
    },
    {
      nama:    "Resepsi",
      tanggal: "2026-12-19",
      jam:     "11.00 – 14.00 WIB",
      tempat:  "Taman Rimba Garden Hall",
      alamat:  "Jl. Raya Puncak Km. 8, Bogor",
      peta:    "https://maps.google.com/?q=Jl.+Raya+Puncak+Bogor"
    }
  ],

  ayat: {
    teks:   "Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    sumber: "QS. Ar-Rum : 21"
  },

  cerita: [
    { waktu: "Maret 2021",   judul: "Pertama Bertemu",   isi: "Berawal dari kegiatan menanam pohon di Kebun Raya Bogor." },
    { waktu: "Agustus 2023", judul: "Menjalin Hubungan", isi: "Pendakian bersama ke Gunung Gede menjadi awal komitmen kami." },
    { waktu: "Juni 2026",    judul: "Lamaran",           isi: "Dua keluarga bertemu dan merestui langkah kami." }
  ],

  galeri: [
    "assets/foto1.jpg", "assets/foto2.jpg", "assets/foto3.jpg",
    "assets/foto4.jpg", "assets/foto5.jpg", "assets/foto6.jpg"
  ],

  rekening: [
    { bank: "BCA",     atasNama: "Riziky Pratama", nomor: "1234 5678 90" },
    { bank: "Mandiri", atasNama: "Andriani Putri", nomor: "0987 6543 21" }
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
