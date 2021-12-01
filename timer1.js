const args = process.argv.slice(2);
let filteredArray = [];


for (let arg of args) {
  let numbersOnly = Number(arg);
  if (!isNaN(numbersOnly) && numbersOnly > -1) {
    filteredArray.push(numbersOnly);
  }
}

for (let number of filteredArray) {
  setTimeout(() => {
    console.log(".");
  } , number * 1000);
}
