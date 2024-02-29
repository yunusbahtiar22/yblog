---
title: "Typescipt: Intro"
date: "2024-02-29"
---

### Apa itu typescript ?
> TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

sederhananya typescipt adalah superset javascript yang bersifat statically typed, dan typescript:
- akan dikompilasi ke dalam kode javascript yang besih dan mudah dibaca.
- terdiri dari 3 bagian, [language (bahasanya sendiri)](https://www.typescriptlang.org/docs/handbook/intro.html), [language server (server untuk autocomplete pada IDE)](https://microsoft.github.io/language-server-protocol/) dan [compiler](https://github.com/microsoft/TypeScript/tree/5c3045bc4f0d7b9a3e0d43cbf091ced99db8953c/src/compiler).
- seperti sebuah linter yang canggih (sangat membantu dalam proses development).

### Kenapa type berpengaruh besar.
ada beberapa hal mengapa bahasa dengan tipe data statis dalam hal ini typescript sangat berpengaruh:

- typescript memungkinkan developer untuk mengungkapkan **maksud** dalam code yang mereka tulis.
- typscript memindahkan beberapa jenis error yang terjadi saat runtime ke compile time
- type definitions untuk javascript (berguna untuk autocomple).

contohnya:

**maksud** disini seringkali tidak ada dalam kode javascript biasa.
```js
function add(a, b) {
  return a + b
}
```
apa maksud `a` atau `b` diatas, apakah itu `angka`, `string` atau keduanya ?

typescript membuat **maksud** dari developer menjadi lebih jelas.
```ts twoslash
//@errors: 2345
function add(a: number, b: number): number {
  return a + b
}
add(50, 50) // 100
add(50, "parrot") // error
```
kode diatas lebih mudah dibaca dan lebih **self-documenting** manambahkan sebuah lapisan dokumentasi bagi javascript, dan disana jelas maksud dan bagaimana penggunaan `function add`.

```ts twoslash
//@errors: 2552
function func(): void {}

funcc() // oops typo! error.
```
dua sampel kode diatas menunjukan typescript mendeteksi error tanpa harus menjalankan kode, ini mencegah error terjadi saat runtime.


```ts twoslash

// @noErrors
interface Car {
  make: string;
  model: string;
  year: number;
}

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 1997
}

car.m
//   ^|
```
ketika ada type definitions untuk kode javascript, code editor seperti vscode bisa menggunakannya untuk meningkatkan auto-completion.