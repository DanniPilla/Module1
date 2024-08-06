//This function returns the sum of adding 2 numbers

function additionFunction() {
    // test with typical values
   if (additionFunction(5, 1) !=6) { throw Error ("did not equal 6")}

   //test with 0
   if (additionFunction(0, 0) !=0) { throw Error ("did not equal 6")}

   //test with negative numbers
   if (additionFunction(-5, 5) !=0) { throw Error ("did not equal 6")}
  }
  
//Write the Code
function additionFunction(a, b) {
    return a + b
   }
   console.log(additionFunction(5, 1));
   
  
//This function returns the sum of subtracting b value from a value
  function minusFunction(a, b) {
    return a - b;
  }
  
  console.log(minusFunction(5, 1));
  
//This function returns the sum of dividing a value from b value
  function divideFunction(a, b) {
    return a / b;
  }
  
  console.log(divideFunction(5, 1));
  
//This function returns the sum of multiple a value by b value
  function multiplyFunction(a, b) {
    return a * b;
  }
  console.log(multiplyFunction(5, 2));
  
