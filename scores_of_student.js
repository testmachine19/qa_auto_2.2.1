let scores = [
  85, 92, 78, 95, 88, 76, 89, 94, 87, 82, 90, 79, 91, 86, 83, 75, 93, 80, 77,
  84, 97, 72, 98, 81,
];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    console.log("_________новая итерация");
    for (let j = 0; j < n - 1 - i; j++) {
      console.log("сравниваем пару " + arr[j] + " и " + arr[j + 1]);
      console.log("сравниваем индексы " + j + " и " + (j + 1));
      if (arr[j] < arr[j + 1]) {
        console.log("работаем с массивом " + arr.join(","));
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("получился промежуточный массив " + arr.join(","));
      }
    }
  }
}

bubbleSort(scores);

console.log(scores);
