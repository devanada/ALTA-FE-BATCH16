/*
- Array adalah sebuah tipe data yang mana dia digunakan untuk menyimpan kumpulan informasi/data yang disimpan secara berurutan dalam satu variabel.
- Setiap item/element yang ada didalam array memiliki index yang sifatnya zero-based, artinya untuk element pertama dimulai dari index 0, untuk element kedua itu index 1, dan seterusnya.
- String dan Array memiliki kesamaan satu sama lain, yaitu memiliki index di setiap element-nya
*/

const stringCoba = "Hello World";

// console.log(stringCoba[4]);

// ---=== DEKLARASI ARRAY ===---
let arrLiteral = [];
let arrConstructor = new Array();

let temp = ["Apple", 1, null, true, {}, []];
let fruits = ["Apple", "Orange", "Plum", "Banana"]; // array of string
let scores = [98, 85, 91, 78, 82]; // array of number
let posts = [
  {
    id: 1,
    title: "Test 1",
  },
  {
    id: 2,
    title: "Test 2",
  },
  {
    id: 3,
    title: "Test 3",
  },
  {
    id: 4,
    title: "Test 4",
  },
]; // array of object

let items = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // multidimentional array

// console.log(items[0][1]);

// ---=== MENGAKSES ELEMENT DI ARRAY ===---
// console.log(fruits[0]); // Apple
// console.log(scores[1]); // 85
// console.log(posts[0].title); // Test 1
// console.log(posts[0]["title"]); // Test 1
// console.log(posts.title); // Property 'title' does not exist on type '{ id: number; title: string; }[]'.

// ---=== MENGGANTI/MERUBAH NILAI YANG SUDAH ADA DARI SEBUAH ELEMENT ===---
// fruits[2] = "Pear";
// posts[1].title = "Test Change 2";
// console.log(posts);

// ---=== MENAMBAHKAN ELEMENT DI SEBUAH ARRAY ===---
fruits[4] = "Lemon"; // menambahkan element di spesifik index, atau merubah jikalau sudah ada element yang ada
fruits.push("Melon"); // menambahkan element di akhir array
fruits.unshift("Date"); // menambahkan element di awal array
// console.log(fruits);

// ---=== MENGHAPUS ELEMENT DI SEBUAH ARRAY ===---
fruits.pop(); // menghapus element terakhir dari sebuah array
fruits.shift(); // menghapus element pertama dari sebuah array

const filteredFruits = fruits.filter((fruit) => fruit !== "Plum");
// console.log(fruits);
// console.log(filteredFruits);
let fruits2 = ["Apple", "Pear", "Lemon", "Banana", "Avocado"];
// fruits2.splice(2, 2); // menghapus element dimulai dari index 2 dengan element yang dihapus sebanyak 2
// fruits2.splice(2, 2, "SOLD OUT", "SOLD OUT"); // menghapus element dimulai dari index 2 dengan element yang dihapus sebanyak 2, setelah itu menambahkan element baru di index/element yang telah dihapus sebelumnya

fruits2.splice(2, 0, "Jackfruit", "Starfruit"); // tidak melakukan penghapusan element karena delete count yang didefinisikanm adalah 0, jadi menambahkan element baru dimulai dari index 2
// console.log(fruits2);

// ---=== MENDUPLIKASI SEBUAH ARRAY ===---
let sample = ["A", "B", "C", "D", "E", "F"];
let dupeSample = sample.slice(); // menduplikasi keseluruhan element di sebuah array
let halfDupe = sample.slice(0, sample.length / 2); // menduplikasi element dimulai dari index 0 sampai index tengah dari sebuah array
let endDupe = sample.slice(sample.length / 2); // menduplikasi element dimulai dari tengah sampai akhir

// console.log(halfDupe);
// console.log(endDupe);

// ---=== MENGGABUNGKAN SEBUAH ARRAY DENGAN ARRAY LAINNYA ===---
let spreadDupe = [...halfDupe, ...endDupe, ...sample]; // menggabungkan array dengan menggunakan spread operator
let concatDupe = halfDupe.concat(endDupe);
// let mysteryDupe -> dia menggabungkan array dan sekaligus menghapus element yang duplikat

// ---=== PERULANGAN PADA ARRAY ===---
/*
- for
- for of
- for in
- forEach
- map
*/

for (let i = 0; i < fruits2.length; i++) {
  //   console.log(`${i}:`, fruits2[i]);
}

for (const fruit of fruits2) {
  //   console.log(fruit);
}

for (const key in fruits2) {
  //   console.log(`${key}:`, fruits2[key]);
}

// fruits2.map((fruit, index) => console.log(`${index}:`, fruit));

// fruits2.forEach((fruit, index) => console.log(`${index}:`, fruit));

interface Vehicle {
  id?: number;
  title: string;
  description: string;
  price: number;
  location: string;
}

let vehicles: Vehicle[] = [
  {
    title: "Beat emak-enak",
    description: "Minus gores karena keseringan belok dadakan",
    price: 50,
    location: "Indonesia",
  },
  {
    title: "Pajero",
    description: "Dijual karena diamuk massa",
    price: 100,
    location: "Indonesia",
  },
  {
    title: "Rubicon",
    description: "Minus plat bodong",
    price: 300,
    location: "Indonesia",
  },
  {
    title: "Harley",
    description: "Dibeli pakai uang rakyat",
    price: 150,
    location: "Indonesia",
  },
];

// forEach bisa digunakan untuk menambahkan property baru didalam suatu element pada array
vehicles.forEach((vehicle, index) => {
  vehicle.id = index + 1;
});

/*
map selain bisa menambahkan property baru dalam suatu element di array, dia juga dapat me-return property tertentu yang dipilih seperti dibawah ini(title, description).
selain itu map juga biasa digunakan untuk melakukan perulangan pada sebuah component, jadi kita membuat component cukup 1 tapi ketika didalam html dia bisa muncul lebih dari 1 kali tergantung seberapa banyak item/element didalam sebuah array.
 */
const cobaCoba = vehicles.map((vehicle) => {
  return { title: vehicle.title, description: vehicle.description };
});

console.log(vehicles);
console.log(cobaCoba);
