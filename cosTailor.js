//x - значение угла в радианахn
//n - длина ряда
//var x = 3.14
//var n = 10;
var x = +prompt("Введите значение угла в радианах", "3.14");
var n = +prompt("Введите длину ряда Тейлора", "10");

alert("Привет. Я считаю косинус с помощью ряда Тейлора");

console.log("Сходимость ряда");
cosTailorN(x, n);

function powerN(x, n) {
  var power = 1;
  for (i = 1; i <= n; i++) {
    power *= x;
  }
  return power;
}
//console.log( powerN(-4,3) )

function factorialN(n) {
  factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

//console.log( factorialN(4) )

function cosTailorN(x, depth) {
  var cosTailor = 1;
  for (var i = 1; i <= depth; i++) {
    cosTailor =
      cosTailor + (powerN(-1, i) * powerN(x, 2 * i)) / factorialN(2 * i);
    console.log(cosTailor);
  }
  alert("Косинус х равен " + cosTailor);
}
