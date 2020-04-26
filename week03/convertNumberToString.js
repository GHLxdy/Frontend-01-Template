function convertNumberToString(number, x = 10) {
  let integer = Math.floor(number); // 整数部分
  let fraction = 0, y = 0;
  let number2 = number;
  // 转换小数部分，避免精度损失
  while (number2 != Math.floor(number2)) {
    y++;
    number2 = number2*Math.pow(x,y);
    console.log(number2,Math.floor(number2))
  }
  if (y >= 1) {
    fraction = Math.pow(x,y)*number - Math.pow(x,y)*integer;
  }
  console.log(fraction)
  let integerString = "",fractionString = "";
  while (integer > 0) {
    integerString = String(integer % x) + integerString;
    integer = Math.floor(integer / x);
  }
  if (fraction > 0) {
    integerString += ".";
  }
  while (fraction > 0) {
    fractionString = String(fraction % x) + fractionString;
    fraction = Math.floor(fraction / x);
  }
  return integerString + fractionString;
}
convertNumberToString(100.25);
// 属性了部分，如果精度太高还是会失败