/*
Konsep Bubble Sort yaitu menggunakan nested loop untuk membandingkan element pertama dan element selanjutnya, ketika element pertama lebih besar daripada element selanjutnya maka akan dilakukan pertukaran posisi. Algoritma ini sangat tidak cocok untuk mengolah sebuah data yang relatif banyak atau besar karena processing time-nya cukup besar karena kita dipaksa untuk mengecek satu per satu setiap element.
*/

function sortBubble(array: number[]): number[] {
  console.time("SORT BUBBLE");
  const len = array.length;
  let dupe = array.slice();

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // jika nilai pada dupe[j] lebih besar daripada nilai pada dupe[j + 1], maka ditukar posisinya
      if (dupe[j] > dupe[j + 1]) {
        let temp = dupe[j]; // tampung sementara nilai dupe[j]
        dupe[j] = dupe[j + 1]; // tukar nilai dupe[j] dengan nilai dupe[j + 1]
        dupe[j + 1] = temp; // tukar nilai dupe[j + 1] dengan nilai yang sudah ditampung sebelumnya
      }
    }
  }

  console.timeEnd("SORT BUBBLE");
  return dupe;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];

console.log(sortBubble(array));
