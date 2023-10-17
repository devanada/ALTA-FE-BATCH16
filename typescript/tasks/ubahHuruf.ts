function ubahHuruf(sentence: string): string {
  // your code here
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      result += sentence[i];
      continue;
    }

    const ascii = sentence[i].charCodeAt(0);
    let newAscii = ascii + 10;

    if (newAscii > 90) {
      newAscii -= 26;
    }

    const newChar = String.fromCharCode(newAscii);
    result += newChar;
  }

  return result;
}

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB
