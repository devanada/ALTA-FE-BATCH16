function dragonOfLoowater(
  dragonHead: number[],
  knightHeight: number[]
): number | string {
  dragonHead.sort((a, b) => a - b);
  knightHeight.sort((a, b) => a - b);

  let totalHeight = 0;

  for (let i = 0; i < knightHeight.length; i++) {
    if (knightHeight[i] < dragonHead[0]) {
      continue;
    }

    dragonHead.shift();
    totalHeight += knightHeight[i];
    if (dragonHead.length === 0) {
      return totalHeight;
    }
  }

  return "knight fall";
}

console.log(dragonOfLoowater([5, 4], [7, 8, 4])); // 11
console.log(dragonOfLoowater([5, 10], [5])); // knight fall
console.log(dragonOfLoowater([7, 2], [4, 3, 1, 2])); // knight fall
console.log(dragonOfLoowater([7, 2], [2, 1, 8, 5])); // 10

export default dragonOfLoowater;
