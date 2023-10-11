function mostAppearItem(items: string[]) {
  // your code here
  let result: { [key: string]: number } = {};

  for (const item of items) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  const sortable = Object.fromEntries(
    Object.entries(result).sort(([, a], [, b]) => a - b)
  );

  return sortable;
}

console.log(mostAppearItem(["js", "js", "golang", "ruby", "ruby", "js", "js"]));
// { golang: 1, ruby: 2, js: 4 }
console.log(mostAppearItem(["A", "B", "B", "C", "A", "A", "B", "A", "D", "D"]));
// { C: 1, D: 2, B: 3, A: 4 }
console.log(mostAppearItem(["football", "basketball", "tenis"]));
// { football: 1, basketball: 1, tenis: 1 }
