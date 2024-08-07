//Add 2 numbers and return the result

function testAdditionFunction() {
  // test with typical values
  if (additionFunction(5, 1) != 6) {
    throw Error("did not equal 6");
  }

  //test with 0
  if (additionFunction(0, 0) != 0) {
    throw Error("did not equal 0");
  }

  //test with negative numbers
  if (additionFunction(-5, 5    ) != 0) {
    throw Error("did not equal 6");
  }

  console.log("Tests Passed");
}

//Define the addition function
function additionFunction(a, b) {
  return a + b;
}
console.log(additionFunction(5, 1));
//call the test function
testAdditionFunction();

//Sum of subtracting 'b' value from 'a' value
function testMinusFunction() {
  // test with typical values
  if (minusFunction(5, 1) != 4) {
    throw Error("did not equal 4");
  }

  //test with 0
  if (minusFunction(5, 5) != 0) {
    throw Error("did not equal 0");
  }

  //test with negative numbers
  if (minusFunction(-5, 5) != -10) {
    throw Error("did not equal -10");
  }
  console.log("Tests Passed");
}

//Define the minus function
function minusFunction(a, b) {
  return a - b;
}
console.log(minusFunction(5, 1));

//call the test function
testMinusFunction();

//This function returns the sum of dividing 'a' value from 'b' value

function testDivideFunction() {
  // test with typical values
  if (divideFunction(5, 1) != 5) {
    throw Error("did not equal 5");
  }

  //test with big numbers
  if (divideFunction(5, 1000) != 0.005) {
    throw Error("did not equal 0.005");
  }

  //test with negative numbers
  if (divideFunction(-5, 5) != -1) {
    throw Error("did not equal -1");
  }
  console.log("Tests Passed");
}
function divideFunction(a, b) {
  return a / b;
}
console.log(divideFunction(5, 1));

//call the test function
testDivideFunction();

//This function returns the sum of multiple a value by b value

function testMultiplyFunction() {
  // test with typical values
  if (multiplyFunction(5, 1) != 5) {
    throw Error("did not equal 5");
  }

  //test with 0
  if (multiplyFunction(0, 5) != 0) {
    throw Error("did not equal 0");
  }

  //test with large numbers
  if (multiplyFunction(1000, 1000) != 1000000) {
    throw Error("did not equal 1000000");
  }
  console.log("Tests Passed");
}

//Define the multiply function
function multiplyFunction(a, b) {
  return a * b;
}
console.log(multiplyFunction(5, 2));

//call the test function
testMultiplyFunction();