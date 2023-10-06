/*
Jenis looping di JavaScript
1. for loop
2. while loop
3. for in
4. for of
5. forEach
6. map
*/

/*
for (init; condition; post) {
    ....
}
- Jika kondisi terpenuhi/true maka perulangan akan berjalan
- Jika kondisi tidak terpenuhi/false maka perulangan akan berhenti
- Agar perulangan tersebut bisa berhenti, bisa membuat sebuah additional condition didalam block scope looping, atau bisa menaikkan/mengurangi nilai dari init itu sendiri
*/

function forLoop(number: number) {
  console.time("FOR LOOP");
  for (let i = 1; i <= number; i++) {
    console.log("I:", i);
  }
  //   for (let i = number; i > 0; i--) {
  //     console.log("I:", i);
  //   }
  console.timeEnd("FOR LOOP");
}

function nestedForLoop(number: number) {
  console.time("NESTED FOR LOOP");
  for (let i = 1; i <= number; i++) {
    console.log("I:", i);
    for (let j = 1; j <= number; j++) {
      console.log("J:", j);
    }
  }
  console.timeEnd("NESTED FOR LOOP");
}

// forLoop(100); // 11.124ms
// nestedForLoop(100); // 876.098ms

/*
while (condition) {
    ....
}
- Mirip seperti for loop, hanya saja untuk variabel init ditulis diluar dari scope while itu sendiri. Sedangkan post-nya akan ditulis dibagian akhir dari perulangan sebelum curly braces penutup '}'
- Harap hati-hati ketika menggunakan while loop karena kalau salah dalam penulisan post/condition akan berakibat infinite loop
*/

function whileLoop(number: number) {
  console.time("WHILE LOOP");
  let i = 1;
  while (i <= number) {
    console.log("I:", i);
    i++;
  }
  console.timeEnd("WHILE LOOP");
}

function nestedWhileLoop(number: number) {
  console.time("NESTED WHILE LOOP");
  let i = 1;
  while (i <= number) {
    console.log("I:", i);
    let j = 1;
    while (j <= number) {
      console.log("J:", j);
      j++;
    }
    i++;
  }
  console.timeEnd("NESTED WHILE LOOP");
}

// whileLoop(100);
// nestedWhileLoop(100);

/*
do {
    ...
} while (condition)
*/
function whileLoop2(number: number) {
  console.time("WHILE LOOP 2");
  let i = 1;
  do {
    console.log("I:", i);
    i++;
  } while (i <= number);
  console.timeEnd("WHILE LOOP 2");
}

function nestedWhileLoop2(number: number) {
  console.time("NESTED WHILE LOOP 2");
  let i = 1;
  do {
    console.log("I:", i);
    let j = 1;
    do {
      console.log("J:", j);
      j++;
    } while (j <= number);
    i++;
  } while (i <= number);
  console.timeEnd("NESTED WHILE LOOP 2");
}

// whileLoop2(100);
// nestedWhileLoop2(100);

function continueBreakLoop(number: number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      continue; // dia bakal menginstruksikan sebuah program agar dia bisa melanjutkan iterasi/perulangan berikutnya tanpa perlu melakukan perintah/code di baris selanjutnya
    }
    if (i > 100) {
      break; // dia bakal menginstruksikan sebuah program agar menghentikan proses perulangan, mirip seperti return (console.log test akan muncul)

      //   return; // mirip seperti break, hanya saja yang dihentikan bukan perulangan saja, melainkan menghentikan proses function (console.log test tidak akan muncul)
    }
    console.log(i);
  }
  console.log("test");
}

// continueBreakLoop(1000000000000000);

const arrItem = ["apel", "jeruk", "tomat", "mangga", "belimbing", "pir"];
const strVal = "Ada Lovelace";

function forLoopArray(elements: string[] | string) {
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
  }
}

// forLoopArray(strVal);

function forInLoop(elements: string[]) {
  for (const key in elements) {
    console.log(key, elements[key]);
  }
}

function forOfLoop(elements: string[]) {
  for (const element of elements) {
    console.log(element);
  }
}

function forEachLoop(elements: string[]) {
  elements.forEach((element, index) => {
    // code here
    console.log(index, element);
  });
}

function mapLoop(elements: string[]) {
  elements.map((element, index) => {
    // code here
    console.log(index, element);
  });
}

// mapLoop(arrItem);
