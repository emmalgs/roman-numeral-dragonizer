export default function dragonizer(num) {
  if (num === 0) {
    return "";
  }
  getItGoin(num);
}


function getItGoin(num) {
  if ((num % 5 < 4) && (num % 5 >= 1)) {
    return dragonizer(num - 1) + "I";
  } else if (num % 5 == 4) {
    if (parseInt(num.toString().substring(num.length - 1)) == 4 )
    {
      return dragonizer(num - 3) + "V";
    } else {
      return dragonizer(num - 8) + "X";
    }
  } else if ((num % 5) == 0) {
    return dragonizer(num - 5) + "V";
  } else if (num % 10 == 0) {
    return dragonizer(num - 10) + "X";
  }
}

// function moreThanFive(num) {
//   if ((num % 5 < 4) && (num % 5 >= 1)) {
//     return dragonizer(num - 1) + "I";
//   } else if ((num % 5) == 0) {
//     return dragonizer(num - 5) + "V";
//   } else {
//     // if ends in 9
//     return dragonizer(num - (2 * (num % 5))) + "X";
//   }
// }

// //function for 1, 2, and 3
// function appendI(num){
//   if ((num % 5 < 4) && (num % 5 >= 1)) {
//     return dragonizer(num - 1) + "I";
//   }
// }

//if num ends in 4
// function endsInFour(num){
//   if (num % 5 == 4) {
//     return dragonizer(num - 3);
//   }
// }

// //if num ends in 9
// function prependI(num){
//   if (num % 5 == 4) {
//     return dragonizer(num - 8);
//   }
// }

// //if num ends in 4 OR 9, this might not work
// function prependI(num){
//   if (num % 5 == 4) {
//     return dragonizer(num - ((parseInt(num.toString().substring(num.length - 1))) - 1));
//   }
// }

// function makeV(num) {
//   if (num % 5 == 0) {
//     return dragonizer(num - )
//   }
// }

