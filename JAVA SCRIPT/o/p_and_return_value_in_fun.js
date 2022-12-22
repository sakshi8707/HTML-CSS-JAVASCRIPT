function getMilk(totalPrice) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(totalPrice, 1.5) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(totalPrice, 1.5);
  //   return totalPrice % 1.5;
}

function calcBottles(startingMoney, costPerBottles) {
  var numberOfbottles = Math.floor(startingMoney / costPerBottles);
  return numberOfbottles;
}

function calcChange(startingMoney, costPerBottles) {
  var change = startingMoney % costPerBottles;
  return change;
}

console.log("Hello master , here is ur " + getMilk(5) + " change");
// var change = getMilk(5);
// console.log("");

// one bottle price is $1.5
// how many required for $5
