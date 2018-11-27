//найти максимальное значение для которого можно вычислить произведение 2*4*6*...*2(n-1)*2n
alert(
  "Привет! Я - скрипт который ищет максимальное значение n, для которого можно вычислить произведение  2*4*6*...*2(n-1)*2n"
);
alert("...и оно равно....");
var n = 1;
while (isFinite(factorial2N(n))) n++;
alert(n);

function factorial2N(n) {
  var factorial = 1;
  for (i = 1; i <= n; i++) {
    factorial *= 2 * i;
  }
  return factorial;
}
