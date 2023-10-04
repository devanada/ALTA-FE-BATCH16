interface OptionalType {
  home?: null;
  blood_type?: string;
  car?: {
    brand?: string;
    color?: string;
  };
  count?: number;
}

interface ObjVar extends OptionalType {
  name: string;
  age: number | string;
  job: string;
  is_married: boolean;
  address: {
    city?: string;
    country: string;
  };
  hobbies: string[];
  getRandomNumber: () => number;
  getRandomNumber2?: () => number;
}

const objVar: ObjVar = {
  // collection of properties
  // key: value <~ property
  // jika kita mengakses key diluar dari apa yang ditulis didalam object ini, nilainya akan menjadi undefined
  name: "Thomas Shelby", // name is the key, Thomas Shelby is the value
  age: 36,
  job: "Businessman",
  is_married: true,
  address: {
    city: "Birmingham",
    country: "United Kingdom",
  },
  hobbies: ["Ride a horse", "Hangout"],
  // jika nilai dari sebuah property itu function, maka property tersebut bisa disebut sebagai method
  getRandomNumber: () => {
    const num = Math.random();
    return num;
  },
  getRandomNumber2: function () {
    const num = Math.random();
    return num;
  },
  home: null,
};

// ---=== DEKLARASI OBJECT KOSONG TANPA PROPERTY ===---
let objLiteral = {}; // Literal syntax
let objConstructor = new Object(); // Constructor syntax

// ---=== AKSES NILAI DARI SEBUAH PROPERTY ===---
// console.log(objVar.job); // dot notation
// console.log(objVar["job"]); // bracket notation
// console.log(objVar.getRandomNumber());
// console.log(objVar.address.city); // akses nilai didalam nested object dengan menggunakan dot notation
// console.log(objVar.address["city"]); // akses nilai didalam nested object dengan menggunakan bracket notation
// console.log(objVar["address"].city);
// console.log(objVar["address"]["city"]);

// ---=== MELAKUKAN PERULANGAN PADA OBJECT ===---
// for (const key in objVar) {
//   console.log(key); // memunculkan daftar nama key dari sebuah property
//   console.log(objVar[key as keyof typeof objVar]); // memunculkan daftar nilai dari sebuah property
// }

// ---=== MERUBAH NILAI DARI SEBUAH PROPERTY ===---
objVar.age = "40";
objVar["job"] = "Politician";
objVar.address.city = "London";

// console.log(objVar);

// ---=== MENGHAPUS PROPERTY DARI SEBUAH OBJECT ===---
delete objVar.getRandomNumber2; // dot notation
delete objVar["home"]; // bracket notation
// delete objVar.address.city; // nested dot notation
// delete objVar["address"]["city"]; // nested bracket notation
// delete objVar.address["city"]; // nested dot bracket notation
// delete objVar["address"].city; // nested bracket dot notation

// ---=== MENGECEK TIPE DATA SEBUAH PROPERTY/VARIABEL ===---
// console.log(typeof objVar.is_married);

// ---=== MENAMBAHKAN PROPERTY BARU DALAM OBJECT ===---
objVar.blood_type = "O";
objVar.car = { brand: "Volkswagen" };
objVar.car.color = "Black";
objVar.hobbies.push("Smoking");

// ---=== MEMBUAT ARRAY OF KEYS/VALUES DARI SEBUAH OBJECT ===---
let keysInObject = Object.keys(objVar);
let valuesInObject = Object.values(objVar);

// ---=== DUPLIKASI SEBUAH OBJECT ===---
let dupe1: ObjVar = Object.assign({}, objVar); // menggunakan object assign
let dupe2: ObjVar = { ...objVar }; // menggunakan spread operator
let dupe3: ObjVar = JSON.parse(JSON.stringify(objVar)); // menggunakan JSON method (efektif untuk melakukan deep copy)

delete dupe1.blood_type;
console.log("OBJVAR", objVar);
console.log("DUPE", dupe1);
