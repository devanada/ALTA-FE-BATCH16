/*
Konsep Binary Search yaitu menggunakan array yang sudah tersortir secara ascending (kecil ke besar). Pencarian dimulai dari element tengah, jika element tengah lebih kecil dari target maka geser ke kanan, jika element tengah lebih besar dari target maka geser ke kiri. Return -1 ketika target tidak ditemukan, return index ketika target ditemukan.
*/

function binarySearch(array: number[], target: number): number {
  console.time("BINARY SEARCH");
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
      console.timeEnd("BINARY SEARCH");
      return middle;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  console.timeEnd("BINARY SEARCH");
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

const dupeSorted = array.slice().sort((a, b) => {
  return a - b;
});

console.log(binarySearch(array, 58)); // -1
console.log(binarySearch(dupeSorted, 58)); // 57
