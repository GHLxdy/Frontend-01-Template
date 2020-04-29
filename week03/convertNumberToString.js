function convertNumberToString(number, x = 10) {
  let integer = Math.floor(number); // 整数部分
  let fraction = String(number).match(/\.\d+$/);
  if (fraction) {
    fraction = fraction[0].replace('.', '');
  }
  let string = ''
  while (integer > 0) {
    string = String(integer % x) + string;
    integer = Math.floor(integer / x);
  }
  return fraction ? `${string}.${fraction}` : string
}
convertNumberToString(100.25);