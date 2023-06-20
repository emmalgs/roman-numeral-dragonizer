export default function dragonizer(num){
  if(num === 0){
    return "";
  } else {
    console.log(num);
    return dragonizer(num - 1) + "I";
  }
}