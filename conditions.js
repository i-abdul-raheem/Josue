// if-else

let number = -10;

if (number < 0) {
  console.log("The number is -ve");
} else if (number > 0) {
  console.log("The number is +ve");
} else {
  console.log("The number is zero");
}

// switch

switch (number) {
  case number > 0:
    console.log("Positive");
    break;
  case number < 0:
    console.log("Negative");
    break;
  default:
    console.log("Zero")
}
