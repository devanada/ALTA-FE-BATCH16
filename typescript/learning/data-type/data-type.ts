/**
 * Primitive
 * 1. String: "Hello World", "Test", "Halo", "Halo 123", "123" (let variabel = "Halo")
 * 2. Number/Integer: 123, 12.3 (let variabel = 123)
 * 3. Boolean: true, false (let variabel = true)
 * 4. Null: null (let variabel = null)
 * 5. Undefined: (let variabel)
 *
 * Collection
 * 1. Object: { ... } (let variabel = { name: "John", age: 25, deceased: false })
 * 2. Array: [ ... ] || [1, 2, 3], ["A", "B", "C"], [true, false, true], [{}, {}, {}]
 */

let message = "Hello"; // <~~~ Deklarasi variabel (let, const, var)
// message = 1234 // <~~~ Type 'number' is not assignable to type 'string'

/*
TypeScript vs JavaScript
- TypeScript merupakan bahasa pemrograman turunan dari JavaScript, yang sifatnya itu statically typed artinya tipe data disini akan sangat strict, jadi kalau misal suatu variabel punya nilai string dia tidak akan bisa dirubah menjadi tipe data selain string.
- JavaScript merupakan bahasa pemrograman yang mana sifatnya dinamically typed, artinya di bahasa pemrograman ini sendiri akan membebaskan pengguna untuk merubah tipe data dari suatu variabel.
*/

// Concatenate
let firstName = "Robert";
let lastName = "Smalls";

var fullName = firstName + lastName;
console.log("fullName without space:", fullName); // "RobertSmalls"

// Get the Length
let nama = "Ada Lovelace";

let lengthOfName_1 = nama.length;
console.log("lengthOfName version 1:", lengthOfName_1); // 12
// OR:
let lengthOfName_2 = "Ada Lovelace".length;
console.log("lengthOfName version 2:", lengthOfName_2); // 12
