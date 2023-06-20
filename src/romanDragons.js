export default function dragonizer(num){
  if(num === 0){
    return "";
  } else if (num == 5) {
    return dragonizer(num - 5) + "V";
  } else if (num == 4) {
    return dragonizer(num - 3) + "V";
  } else if (num <= 3){
    return dragonizer(num - 1) + "I";
  }
}