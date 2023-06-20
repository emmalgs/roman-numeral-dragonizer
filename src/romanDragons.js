export default function dragonizer(num) {
  if (num === 0) {
    return "";
  }
  if (num < 15)
  {
    if ((num % 5 < 4) && (num % 5 >= 1)) {
      return dragonizer(num - 1) + "I";
    } else if (parseInt(num.toString().slice(-1)) == 4) {
      return dragonizer(num - 3) + "V";
    } else if ((num == 5)) {
      return dragonizer(num - 5) + "V";
    } else if (parseInt(num.toString().slice(-1)) == 9) {
      return dragonizer(num - 8) + "X";
    } else if (num % 10 == 0) {
      return dragonizer(num - 10) + "X";
    }
  } else {
    return;
  }
}