export default function dragonizer(num) {
  if (num === 0) {
    return "";
  }

  if (num < 5) {
    if (num == 4) {
      return dragonizer(num - 3) + "V";
    } else if (num <= 3) {
      return dragonizer(num - 1) + "I";
    }
  } else if (num >= 5 && num < 10) {
    if((num % 5 < 4) && (num % 5 >= 1)) {
      console.log("SCARP");
      return dragonizer(num -1) + "I";
    } else if ((num % 5) == 0) {
      console.log("FARTT");
      return dragonizer(num % 5) + "V";
    }
  }
}





