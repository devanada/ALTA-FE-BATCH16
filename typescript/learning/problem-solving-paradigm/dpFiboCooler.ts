/*
Pemanfaatan DP dengan lebih optimal jika dibandingkan dengan pendekatan Top Down ataupun Bottom Up, karena kita tidak perlu membuat sebuah variabel map untuk menampung data/hasil yang telah kita hitung. Kita hanya memanfaatkan variabel biasa untuk menyimpan data/hasil perhitungan dari dua angka sebelumnya.
*/

let count = 0;

function fiboDPCooler(n: number): number {
  console.time("DP Cooler");

  if (n <= 1) {
    console.timeEnd("DP Cooler");
    return n;
  }

  let fiboIMinSatu = 1;
  let fiboIMinDua = 0;
  let fiboI = -1;

  for (let i = 2; i <= n; i++) {
    count++;
    fiboI = fiboIMinSatu + fiboIMinDua;
    fiboIMinDua = fiboIMinSatu;
    fiboIMinSatu = fiboI;
  }

  console.timeEnd("DP Cooler");
  return fiboI;
}

console.log("Result:", fiboDPCooler(50)); // 12586269025
console.log("Count:", count); // 49
// DP Cooler: 0.067ms
