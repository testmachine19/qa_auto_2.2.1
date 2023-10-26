function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
  console.log("x");
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

function incrementBalance(x) {
  x++;
  return x;
}

function decrementBalance(y) {
  y--;
  return y;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
console.log(incrementBalance(3000)); // Увеличить на 1
console.log(decrementBalance(700)); // Уменьшить на 1
