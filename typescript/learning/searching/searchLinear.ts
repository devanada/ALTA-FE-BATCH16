/*
Linear Search menggunakan konsep perulangan yang mana mencari dari element pertama sampai target ditemukan, atau sampai element terakhir. Return -1 ketika target tidak ditemukan, return index/posisi element ketika target ditemukan.
*/

function linearSearch(array: number[], target: number): number {
  console.time("LINEAR SEARCH");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.timeEnd("LINEAR SEARCH");
      return i;
    }
  }

  console.timeEnd("LINEAR SEARCH");
  return -1;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];

console.log(linearSearch(array, 58)); // 71
console.log(linearSearch(array, 101)); // -1
