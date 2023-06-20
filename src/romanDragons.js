export default function dragonizer(num) {
  if (num === 0) {
    return "";
  }
  if (num < 5) {
    if (num == 4) {
      return dragonizer(num - 3) + "V";
    } else {
      return dragonizer(num - 1) + "I";
    }
  } else if (num >= 5 && num < 10) {
    if ((num % 5 < 4) && (num % 5 >= 1)) {
      return dragonizer(num - 1) + "I";
    } else if ((num % 5) == 0) {
      return dragonizer(num % 5) + "V";
    } else {
      return dragonizer(num - 8) + "X";
    }
  } else if (num >= 10 && num < 15) {
    if ((num % 5 < 4) && (num % 5 >= 1)) {
      return dragonizer(num - 1) + "I";
    } else if (num % 5 == 4) {
      return dragonizer(num - 3) + "V";
    } 
    return dragonizer(num % 5) + "X";
  } else if (num >= 15) {
    return dragonizer(num - 5) + "V";
  }
}