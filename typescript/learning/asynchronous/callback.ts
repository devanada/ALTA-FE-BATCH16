/*
Callback -> sebuah function yang dipanggil "setelah" melakukan sebuah proses, dalam kata lain akan dipanggil setelah sebuah proses selesai berjalan.
*/

const notFound = () => {
  console.log("yang beli kemana nih");
};

const buyer1 = (message: string) => {
  console.log("Pesan martabak dong?", message);
};

const buyer2 = (message: string) => {
  console.log("Pesan martabak dong!!!", message);
};

const seller = (callback: (message: string) => void = notFound) => {
  console.log("Pesan martabak dong? ... (wait sedang di masak)");
  setTimeout(() => {
    // anggaplah ini sebagai simulasi ketika sebuah proses membutuhkan waktu
    callback("Yeay makan-makan");
  }, 2000);
};

seller(buyer1);
seller(buyer2);
seller();
