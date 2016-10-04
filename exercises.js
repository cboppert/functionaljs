function returnSeven() {
      return 7;
}

function returnFifteen() {
      return 15;
}

function returnEight() {
      return 8;
}

function returnZero() {
      return 0;
}

function add(valueOne, valueTwo) {
      return valueOne + valueTwo;
}

function add2(functionOne, functionTwo) {
      return add(functionOne(), functionTwo());
}

function returnFunction(value) {
      return function() {
            return value;
      }
}

function addNLoop(functions) {
      if (functions.length % 2 !== 0) { functions.push(returnZero); }
      var sum = 0;
      for (var i = 0; i < functions.length - 1; i += 2) {
            sum += add2(functions[i], functions[i + 1]);
      }
      return sum;
}

function addNRecursion(functions) {
      return (functions.length > 1) ? add2(functions[0], functions[1]) + addNRecursion(functions.slice(2)) :
      (functions.length == 1) ? add2(functions[0], returnZero) : add2(returnZero, returnZero);
}

function addNMapReduce(functions) {
      return functions.reduce( function ( prev, curr, ind, array ) {
            console.log(prev);
            console.log(curr);
            console.log(ind);
            console.log(array);
            return prev + add2(curr, returnZero);
      });
}

console.log("addOne: ", add(returnSeven(), returnFifteen()));

console.log("addTwo: ", add2(returnEight, returnFifteen));

console.log("returnFunction: ", returnFunction(returnEight())());

console.log("addNLoopEven: ", addNLoop([returnSeven, returnEight, returnFunction(4), returnFunction(6)]));

console.log("addNLoopOdd: ", addNLoop([returnSeven, returnEight, returnFunction(4)]));

console.log("addNRecursionEven: ", addNRecursion([returnSeven, returnEight, returnFunction(4), returnFunction(6)]));

console.log("addNRecursionOdd: ", addNRecursion([returnSeven, returnEight, returnFunction(4)]));

console.log("addNMapReduceEven: ", addNMapReduce([returnSeven, returnEight, returnFunction(4), returnFunction(6)]));

console.log("addNMapReduceOdd: ", addNMapReduce([returnSeven, returnEight, returnFunction(4)]));
