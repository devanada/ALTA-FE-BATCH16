/*
Insertion Sort bekerja dengan konsep yang sama seperti kita melakukan pengurutan pada saat memainkan sebuah permainan kartu yang ada di tangan kita. Array akan dipisah secara tidak langsung menjadi dua bagian yang berbeda.
*/

function sortInsertion(array: number[]): number[] {
  console.time("SORT INSERTION");
  const len = array.length;

  for (let i = 0; i < len; i++) {
    let minimal = i; // mendeklarasikan variabel yang akan digunakan untuk menampung index paling kecil
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minimal]) {
        minimal = j;
      }
    }

    let temp = array[i];
    array[i] = array[minimal];
    array[minimal] = temp;
  }

  console.timeEnd("SORT INSERTION");
  return array;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];

console.log(sortInsertion(array));
