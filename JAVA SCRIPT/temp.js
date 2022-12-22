function myFunciton() {
  var p1 = prompt("person1 name : ");
  var p2 = prompt("person2 name : ");
  var n = Math.random();
  n = n * 99;
  n = Math.floor(n) + 1;
  if (n > 70) {
    console.log(
      p1 +
        " and " +
        p2 +
        " your love each other like kanye loves kanye " +
        n +
        "%"
    );
  }
  if (n > 30 && n < 70) {
    console.log(p1 + " and " + p2 + " your love score is " + n + "%");
  }
  if (n <= 30) {
    console.log(p1 + " and " + p2 + " your love score is very low " + n + "%");
  }
}

function myFunciton1() {
  var a = 4;
  var b = "4";
  // two equal(==) not check for data types, whereas 3 equal(===) also check data types

  if (a == b) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

myFunciton();
myFunciton1();
