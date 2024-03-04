---
title: "Typescipt: Variable dan Nilai"
date: "2024-02-29"
---

### Deklarasi variable dan inference
Deklarasikan variabel menggunakan `const` atau `let` seperti pada javascript:
```ts twoslash
let temperature = 19
//    ^?
```
typescript tau kalau variabel `temperature` bertipe angka, berdasarkan dari nilai yang kita sediakan saat kita menginisialisai variabel `temperature`. ini disebut **type inference**.

kalau kita ubah nilai variabel `temperature` dengan tipe yang tidak cocok, kita akan mendapatkan pesan error.
``` ts twoslash
//@errors: 2322
let temperature = 19
temperature = "sejuk"
```
disini, kita bisa simpulkan bahwa **variabel dalam typescript terlahir bersama dengan tipe datanya**.

mari kita coba `const`:
```ts twoslash
const humidity = 80
//     ^?
```
kita tidak salah lihat! humidity bertipe `80` dan bukannya `number`. disini typescript mampu membuat asumsi yang lebih spesifik lagi karena:
- variable `const` tidak bisa direassign alias tidak bisa diganti nilainya.
- nilai yang disediakan saat inisialisasi variabel berupa tipe `number` yang sifatnya immutable.

dan `humidity` akan terus bernilai `80` dalam program.

### Literal types
tipe `80` seperti ini disebut literal type. simplenya kita bisa katakan "hanya `80` yang diizinkan untuk mengisi variabel ini".