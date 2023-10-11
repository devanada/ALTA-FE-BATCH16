/*
Promise - sebuah object yang merepresentasikan sebuah kejadian/event yang bisa terpenuhi (fulfill) atau gagal (reject) yang berdasarkan pada operasi asynchronous dan bisa menghasilkan sebuah output
*/

interface PromiseType {
  status: string;
  message: string;
}

function bentengTakeshi(nama: string) {
  return new Promise<PromiseType>((resolve, reject) => {
    console.log("--- BENTENG TAKESHI DIMULAI ---");
    console.log("Doakan aku ya!!!");

    let rate = +(Math.random() * 100).toFixed(0);

    setTimeout(() => {
      console.log(rate);
      if (rate > 70) {
        resolve({
          status: "success",
          message: `Selamat ${nama} anda berhasil menakhlukan benteng takeshi!`,
        });
      } else {
        reject({
          status: "failed",
          message: "Sayang sekali, anda gagal menakhlukan benteng takeshi",
        });
      }
    }, 2000);
  });
}

function playFunction() {
  let resultFromPromise = "";
  bentengTakeshi("Yamato")
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (fulfill)
      resultFromPromise = result.message;
    })
    .catch((error) => {
      // Catch akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error.message;
    })
    .finally(() => {
      // Finally akan dijalankan apapun kondisinya, entah dia reject ataupun fulfill
      console.log("Game selesai");
    });
  console.log(resultFromPromise);
}

async function playFunction2() {
  let resultFromPromise = "";
  await bentengTakeshi("Yamato")
    .then((result) => {
      // Then akan dijalankan ketika terpenuhi (fulfill)
      resultFromPromise = result.message;
    })
    .catch((error) => {
      // Catch akan dijalankan ketika tidak terpenuhi (reject)
      resultFromPromise = error.message;
    })
    .finally(() => {
      // Finally akan dijalankan apapun kondisinya, entah dia reject ataupun fulfill
      console.log("Game selesai");
    });
  console.log(resultFromPromise);
}

async function playFunction3() {
  let resultFromPromise = "";
  try {
    // try akan tetap dijalankan ketika terpenuhi (fulfill)
    let result = await bentengTakeshi("Yamato");
    resultFromPromise = result.message;
  } catch (error: any) {
    // Catch akan dijalankan ketika tidak terpenuhi (reject)
    resultFromPromise = error.message;
  } finally {
    // Finally akan dijalankan apapun kondisinya, entah dia reject ataupun fulfill
    console.log("Game selesai");
  }
  console.log(resultFromPromise);
}

playFunction3();
