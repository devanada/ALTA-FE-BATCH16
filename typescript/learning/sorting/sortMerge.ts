/*
Teknis Merge Sort adalah dimulai dengan membagi array menjadi dua bagian (kiri dan kanan), lalu membandingkan nilai tiap index pada pecahan array, manakah yang lebih kecil sehingga terjadilah perpindahan nilai diantara kedua bagian tersebut. Setelah dibandingkan, pecahana array ini akan digabung kembali menjadi sebuah array yang utuh.
*/

function sortMerge(array: number[]): number[] {
  console.time("SORT MERGE");
  const result = divide(array);
  console.timeEnd("SORT MERGE");
  return result;
}

function divide(array: number[]): number[] {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let one = array.slice(0, mid);
  let two = array.slice(mid);

  return sort(divide(one), divide(two));
}

function sort(one: number[], two: number[]): number[] {
  const sorted: number[] = [];

  while (one.length && two.length) {
    if (one[0] <= two[0]) {
      sorted.push(one.shift() as number);
    } else {
      sorted.push(two.shift() as number);
    }
  }

  const output = [...sorted, ...one, ...two];
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

console.log(sortMerge(array));
