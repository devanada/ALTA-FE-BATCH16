/*
Seperti Merge Sort, Quick Sort menggunakan algoritma DnC (Divide and Conquer) yang mana dia mengambil satu element sebagai poros dan juga membuat sebuah 2 array penampung. Setelah itu mencoba membagi array menjadi 2 bagian dan melakukan perbandingan nilai untuk menentukan posisi nilai terkecil/terbesar.
*/

function sortQuick(array: number[]): number[] {
  console.time("SORT QUICK");
  const result = sort(array);
  console.timeEnd("SORT QUICK");
  return result;
}

function sort(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }

  let chosenIndex = array.length - 1; // buat index pilihan yaitu index terakhir dari sebuah array
  let chosen = array[chosenIndex]; // buat variabel dengan nilai element terakhir dari sebuah array
  let a: number[] = [];
  let b: number[] = [];

  for (let i = 0; i < chosenIndex; i++) {
    let temp = array[i];

    /*
        jika nilai temp lebih kecil daripada nilai chosen
        true -> push temp ke variabel a
        false -> push temp ke variabel b
        */
    temp < chosen ? a.push(temp) : b.push(temp);
  }

  let output = [...sort(a), chosen, ...sort(b)];
  return output;
}

const array = [
  67, 79, 90, 81, 59, 38, 85, 77, 57, 63, 53, 84, 27, 51, 22, 6, 76, 73, 21, 75,
  66, 55, 11, 12, 68, 60, 52, 83, 24, 20, 26, 95, 70, 17, 54, 72, 8, 30, 45, 16,
  56, 19, 61, 33, 36, 91, 4, 39, 25, 47, 28, 93, 48, 89, 5, 71, 15, 65, 23, 87,
  10, 1, 3, 2, 29, 40, 9, 78, 50, 7, 13, 58, 31, 100, 94, 69, 97, 34, 41, 18,
  74, 88, 35, 49, 99, 14, 82, 86, 62, 80, 44, 43, 32, 42, 64, 96, 46, 92, 37,
  98,
];

console.log(sortQuick(array));
