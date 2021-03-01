function mapToNegativize(sourceArray) {
  let newArray = [];
  for(let i=0; i < sourceArray.length; i++) {
      newArray.push(sourceArray[i] * -1);
  }
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray =[];
  for(let i=0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i]);
  }
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray =[];
  for(let i=0; i < sourceArray.length; i++) {
    newArray.push(sourceArray[i] * 2);
  }
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray =[];
  for(let i=0; i < sourceArray.length; i++) {
    newArray.push(Math.pow(sourceArray[i], 2));
  }
  return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint;
  for(let i = 0; i < sourceArray.length; i++) {
    total = total + sourceArray[i];
  }
  return total;
}

function reduceToAllTrue(sourceArray) {
  let result = true;
  for(let i = 0; i < sourceArray.length; i++) {
    if(!sourceArray[i]) {
      result = false;
    }
  }
  return result;
}

function reduceToAnyTrue(sourceArray) {
  let result = false;
  for(let i = 0; i < sourceArray.length; i++) {
    if(sourceArray[i]) {
      result = true;
    }
  }
  return result;
}