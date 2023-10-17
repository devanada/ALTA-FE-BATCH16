let count = 0; // Untuk menghitung berapa kali perhitungan/perulangan dilakukan
let mem: number[] = []; // Untuk menyimpan hasil perhitungan

function calculate(n: number): number {
  count++;

  // Jika sudah pernah dihitung sebelumnya, maka ambil dari memory
  if (mem[n]) return mem[n];

  // Jika belum pernah dihitung, maka hitung dan masukkan ke memory lalu di return
  if (n <= 1) {
    mem[n] = n;
  } else {
    mem[n] = calculate(n - 1) + calculate(n - 2);
  }
  return mem[n];
}

function fibTopDown(n: number): number {
  console.time("DP Top Down");
  const result = calculate(n);
  console.timeEnd("DP Top Down");
  return result;
}

console.log("Result:", fibTopDown(50)); // 12586269025
console.log("Count:", count); // 99
// DP Top Down: 0.103ms
