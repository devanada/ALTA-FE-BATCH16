function penjelasanRecursive(n: number): number {
  console.log("Nilai n:", n);
  if (n == 1) {
    // kondisi dimana loop harus berhenti ketika nilai n == 1 (condition)
    return n;
  } else {
    const result = penjelasanRecursive(n - 1); // n - 1 adalah post, agar kondisi diatas bisa terpenuhi, yang mana dapat membuat looping-nya bisa berhenti
    console.log("result:", result);
    return n * result;
  }
}

// console.log(penjelasanRecursive(5));

function recursiveSolution(n: number): number {
  if (n == 1) return n;
  else return n * recursiveSolution(n - 1);
}

function recursive(n: number): number {
  console.time("recursive");
  const result = recursiveSolution(n);
  console.timeEnd("recursive");
  return result;
}

function iterativeSolution(n: number): number {
  console.time("iterative");
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  console.timeEnd("iterative");
  return result;
}

// console.log(recursive(15)); // 0.06ms
console.log(iterativeSolution(15)); // 0.05ms
