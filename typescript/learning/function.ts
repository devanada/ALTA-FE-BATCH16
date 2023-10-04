/*
- name = nama dari function, yang ditulis secara deskriptif tergantung dari apa yang dia proses didalamnya
- param = parameter yang didapat di luar dari function tersebut

function name(param) {
    ...
}

const name = (param) => {
    ...
}
*/

// ---=== FUNCTION DECLARATION ===---
function greeting(hour: number) {
  if (hour < 12) {
    console.log("Selamat pagi");
  } else if (hour < 18) {
    console.log("Selamat Sore");
  } else {
    console.log("Selamat malam");
  }
}

function multiply(a: number, b: number): number {
  return a * b;
}

function multiply2(a: number, b: number) {
  const result = a * b;
  console.log(result);
}

// console.log(multiply(2, 3)); // 6
// console.log(multiply2(2, 3)); // 6 dan undefined

// multiply(2, 3); // (nilai tidak tampil di terminal)
// multiply2(2, 3); // 6

// ---=== ARROW FUNCTION ===---
const arrowMultiply = (a: number, b: number) => {
  const result = a * b;
  return result;
};

const arrowDivision = (a: number, b: number) => a / b;

// console.log(arrowMultiply(2, 4))

function luasSegitiga(a: number, b: number) {
  const result = arrowDivision(arrowMultiply(a, b), 2);
  return result;
}

console.log(luasSegitiga(2, 3));
