function diffMinMax(arr) {
  if (arr.length <= 1)
    alert("невозможно выполнить операцию, в массиве менее двух элементов");
  else {
    var arrMin = arr[0];
    var arrMax = arr[0];
    var iMin = 0;
    var iMax = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arrMin) {
        iMin = i;
        arrMin = arr[i];
      }
      if (arr[i] > arrMax) {
        iMax = i;
        arrMax = arr[i];
      }
    }
    var betweenMinMax = Math.abs(iMin - iMax) - 1;
    alert(betweenMinMax);
    //alert(iMax);
    //alert(iMin);
    if (betweenMinMax % 2) alert("нечетное");
    else alert("четное");
  }
}

var myArr = [7.7, 1.1, 5.1, 3.3, 100.1, 200.1, 3.1, 3.1, 2.2, 2.0, 4.1, 2.1];
//var myArr = [1.7, 2, 5.8, 77.0, 3.15, 10.6, 2.1];
//var myArr = [1.7];

alert(
  `Программа определяет, является ли четным число элементов между минимальным и максимальным элементом массива ` +
    myArr
);

diffMinMax(myArr);
