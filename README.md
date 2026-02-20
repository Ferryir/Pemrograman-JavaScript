# 📝 Final Assessment - Pemrograman JavaScript

Asesmen akhir kelas **Pemrograman JavaScript** dari [Dicoding](https://www.dicoding.com/). Semua tugas dikerjakan menggunakan JavaScript runtime **Node.js** dengan ES Modules.

---

## 📂 Struktur Proyek

| Folder                              | Topik                 | Deskripsi                                                                  |
| ----------------------------------- | --------------------- | -------------------------------------------------------------------------- |
| `01-writing-comments`               | Komentar              | Menulis komentar satu baris dan banyak baris di JavaScript                 |
| `02-code-style`                     | Gaya Penulisan Kode   | Memperbaiki konsistensi kode (semicolons, indentasi, `const`, spasi `{ }`) |
| `03-writing-test`                   | Pengujian Dasar       | Menulis unit test untuk fungsi `sum()` menggunakan `node:test`             |
| `optional-04-oop`                   | OOP                   | Sistem manajemen inventaris dengan class `Item` dan `Inventory`            |
| `optional-05-recursive`             | Rekursi               | Implementasi fungsi `factorial` dan `fibonacci` secara rekursif            |
| `optional-06-full-coverage-testing` | Full Coverage Testing | Pengujian menyeluruh fungsi `sum()` (positif, negatif, non-number)         |
| `optional-07-real-world-scenario`   | Kasus Nyata           | Sistem pengelolaan pesanan restoran (CRUD + kalkulasi revenue)             |

---

## 🚀 Cara Menjalankan

Pastikan **Node.js** sudah terinstall, lalu jalankan setiap task:

```bash
# Task 01 - Komentar
node 01-writing-comments/index.js

# Task 02 - Code Style
node 02-code-style/index.js

# Task 03 - Unit Test
node --test 03-writing-test/index.test.js

# Task 04 - OOP Inventaris
node optional-04-oop/main.js

# Task 05 - Rekursi
node optional-05-recursive/main.js

# Task 06 - Full Coverage Test
node --test optional-06-full-coverage-testing/index.test.js

# Task 07 - Sistem Pesanan Restoran
node optional-07-real-world-scenario/main.js
```

---

## 🛠️ Teknologi

- **Runtime:** Node.js
- **Module System:** ES Modules (`"type": "module"`)
- **Testing:** `node:test` + `node:assert`
