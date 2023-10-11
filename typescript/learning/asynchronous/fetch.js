function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

async function fetchData2() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
