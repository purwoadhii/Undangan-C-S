# Undangan Online

Setiap pasangan punya folder sendiri, dan alamatnya mengikuti nama folder:

| Folder | Alamat |
| --- | --- |
| `riziky-andri/` | https://purwoadhii.github.io/Undangan-C-S/riziky-andri/ |

## Cara termudah: halaman admin

Buka **https://purwoadhii.github.io/Undangan-C-S/admin/**, masuk dengan token GitHub (cara membuatnya tertulis di halaman itu), lalu klik **+ Undangan baru**.
Isi nama, acara (titik lokasi dipilih di peta), foto dan video galeri, rekening, dan musik, lalu klik **Simpan & terbitkan**.

- **Lokasi acara:** bila akad dan resepsi di tempat yang sama, centang "Tempatnya sama dengan acara pertama"; undangan lalu menampilkan satu peta saja. Untuk menandai titik, cari nama tempat/kelurahan/kota, pilih hasilnya, atau pakai mode **Satelit** lalu klik tepat di gedungnya (pin bisa digeser). Tombol **Lokasi saya** memakai lokasi HP/laptop saat ini.
- **Ukuran file:** foto otomatis dikecilkan (maks. 1920 px) sebelum diunggah. Video di atas 25 MB atau mp3 di atas 15 MB ditandai merah karena sering gagal diunggah; kecilkan dulu atau pakai link YouTube. Bila penyimpanan gagal di tengah, tekan Simpan lagi: file yang sudah terkirim tidak diunggah ulang.
Inisial (B&S) dan alamat (`/budi-sari/`) dibuat otomatis dari nama panggilan. Undangan tayang dalam 1–2 menit.

## Musik

Di editor admin, kolom **Musik latar** bisa diisi dengan mp3 unggahan sendiri, atau dipilih dari **Koleksi musik** (tombol di bagian atas admin). Lagu di koleksi disimpan sekali di folder `musik/` dan bisa dipakai oleh semua undangan dan semua tema.

## Kirim undangan lewat WhatsApp

Di admin, klik **Kirim** pada undangan. Ketik nama tamu dan nomor WA, lalu klik **Kirim via WhatsApp**: WhatsApp terbuka dengan pesan berisi nama tamu, link khusus (nama tamu tampil di sampul), dan ucapan terima kasih. Tinggal tekan kirim.
Kata-kata pesan bisa diubah. Daftar tamu bisa ditambah banyak sekaligus, dan bisa diunduh atau dibuka sebagai CSV. Daftar tamu dan nomor WA hanya disimpan di browser, tidak diunggah ke repo karena repo bersifat publik.

## Tema

Tiap undangan memilih satu tema di admin (atau `tema: "..."` di `data.js`). Tiap tema punya sampul, cara membuka, hitung mundur, bingkai foto, susunan galeri, urutan bagian, kata-kata bawaan, dan animasi sendiri. Tombol scroll otomatis ada di semua tema.

| Tema | `tema:` | Contoh |
| --- | --- | --- |
| Taman | `taman` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=taman) |
| Gelap Elegan | `gelap-elegan` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=gelap-elegan) |
| Pantai | `pantai` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=pantai) |
| Bawah Laut | `laut` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=laut) |
| Gunung | `gunung` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=gunung) |
| Jawa Klasik | `jawa-klasik` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=jawa-klasik) |
| Jawa Melati | `jawa-melati` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=jawa-melati) |
| Jawa Keraton | `jawa-keraton` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=jawa-keraton) |
| Sunda | `sunda` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=sunda) |
| Betawi | `betawi` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=betawi) |
| Minang | `minang` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=minang) |
| Bali | `bali` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=bali) |
| Melayu Palembang | `palembang` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=palembang) |
| Jelajah Gedung | `jelajah-gedung` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=jelajah-gedung) |
| Jelajah Pantai | `jelajah-pantai` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=jelajah-pantai) |
| Jelajah Hutan | `jelajah-hutan` | [lihat](https://purwoadhii.github.io/Undangan-C-S/contoh/?tema=jelajah-hutan) |

**Tema Jelajah** berupa game jelajah bergaya kartun: tamu memilih karakter laki-laki atau perempuan, membaca sambutan, lalu berjalan di peta (gedung, pantai, atau hutan) dengan lingkaran geser, tombol panah, atau ketuk tujuan. Tiap tempat yang didatangi membuka satu bagian undangan (mempelai, acara, kisah, galeri, kado, buku tamu & RSVP). Jendela tiap tempat terbuka sendiri hanya saat pertama kali didatangi; setelah itu label tempat diketuk untuk membuka. Tombol bendera menjalankan tur otomatis dengan urutan Ucapan & RSVP, Kisah Kami, Acara, Foto & Video, Mempelai, lalu Kado, dan berhenti saat ucapan terima kasih muncul. Tempat yang belum diisi (misalnya belum ada foto/video) tidak muncul di peta. Mesinnya ada di `tema/jelajah/`, warna tiap latar di `tema/jelajah-<latar>/`.

Undangan yang sudah jalan bisa dicoba dengan tema lain tanpa mengubah apa pun: tambahkan `?tema=pantai` di belakang alamatnya.
Kata pembuka bawaan tema bisa diganti per pasangan lewat kolom "Kata pembuka" di admin (`pembuka` di `data.js`).

## Membuat undangan secara manual (3 langkah)

1. **Salin folder `_template`** lalu beri nama baru, huruf kecil dan pakai tanda hubung, misalnya `budi-sari`.
2. **Buka `budi-sari/data.js`** lalu ganti teks di antara tanda kutip: nama, orang tua, tanggal, acara, lokasi, cerita, rekening.
   Di `budi-sari/index.html` cukup ganti judul di baris 7–9 (untuk preview WhatsApp).
3. **Taruh foto di `budi-sari/assets/`** dengan nama berikut:
   - `couple.jpg` : foto berdua (potret)
   - `pria.jpg`, `wanita.jpg` : foto masing-masing
   - `foto1.jpg` s.d. `foto6.jpg` : galeri
   - `music.mp3` : musik latar (opsional)

Setelah di-commit ke `main`, undangan tayang di `https://purwoadhii.github.io/Undangan-C-S/budi-sari/` dalam 1–2 menit.
Foto yang belum ada otomatis diganti gambar contoh, jadi undangan tetap rapi.

Lewat website GitHub: buka folder `_template`, buka tiap file, salin isinya, lalu **Add file → Create new file** dengan nama `budi-sari/index.html` dan `budi-sari/data.js`. Untuk foto: masuk folder `budi-sari`, lalu **Add file → Upload files**.

## Isi repo

- `tema/inti/` : mesin bersama semua tema (isi undangan, hitung mundur, peta, galeri, video, musik, ucapan, scroll otomatis). Perbaikan di sini berlaku untuk semua undangan.
- `tema/<nama>/` : tampilan, gambar, dan animasi satu tema (`tema.css` + `tema.js`). Tema baru didaftarkan di `tema/daftar.js`.
- `contoh/` : pasangan contoh untuk mencoba semua tema.
- `admin/` : halaman admin.
- `_template/` : contoh kosong untuk disalin. Folder berawalan `_` tidak ikut tayang.
- `index.html` : undangan lama.

Nama tamu bisa ditambahkan di link: `.../budi-sari/?to=Bapak+Joko`.
