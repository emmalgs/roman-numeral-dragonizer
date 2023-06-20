export default function dragonizer(num) {
  if (num === 0) {
    return "";
  }
  // if (num >= 40) {
  //   if (num % 50 )
  // }
  //5 - 9
  //(num >= 5 && num < 10)
  if ((num % 5) + 5 === parseInt(num.toString().slice(-1))) {
    if ((num % 5 < 4) && (num % 5 >= 1)) {
      return dragonizer(num - 1) + "I";
    } else if ((num % 5) == 0) {
      return dragonizer(num - 5) + "V";
    } else {
      return dragonizer(num - 8) + "X";
    }

    //10 - 14
    //(num >= 10 && num < 15)
  } else if ((num % 5) === parseInt(num.toString().slice(-1))) {
    if ((num % 5 < 4) && (num % 5 >= 1)) {
      return dragonizer(num - 1) + "I";
    } else if (num % 5 == 4) {
      return dragonizer(num - 3) + "V";
    } else if (num % 50 < 40) {
    return dragonizer(num - 10) + "X";
    } else {
      return dragonizer()
    }
  }


}