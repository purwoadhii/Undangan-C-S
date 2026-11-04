# Undangan Online

Setiap pasangan punya folder sendiri, dan alamatnya mengikuti nama folder:

| Folder | Alamat |
| --- | --- |
| `riziky-andri/` | https://purwoadhii.github.io/Undangan-C-S/riziky-andri/ |

## Membuat undangan pasangan baru (3 langkah)

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

- `tema/taman/` : tampilan dan animasi tema Taman, dipakai bersama oleh semua pasangan. Perbaikan di sini otomatis berlaku untuk semua undangan.
- `_template/` : contoh kosong untuk disalin. Folder berawalan `_` tidak ikut tayang.
- `index.html` : undangan lama.

Nama tamu bisa ditambahkan di link: `.../budi-sari/?to=Bapak+Joko`.
