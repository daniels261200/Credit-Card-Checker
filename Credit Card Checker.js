// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
function validateCred(arr) {
  let everyOtherNumber = [];
  let otherNumber = [];
  let shortNumber = [];
  let num = 0;
  let finalSum = 0;
  let lastNumber = 0;
  lastNumber = arr[arr.length - 1];
  let number = 0;
  //console.log(lastNumber);
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    everyOtherNumber.push(arr[i] * 2);
  }
  //console.log(arr.length)
  //console.log(everyOtherNumber)
  for (let j = 0; j < everyOtherNumber.length; j++) {
    if (everyOtherNumber[j] > 9) {
      num = everyOtherNumber[j] - 9;
      shortNumber.push(num);
    } else {
      num = everyOtherNumber[j];
      shortNumber.push(num);
    }
  }
  //console.log(shortNumber);

  if (arr.length === 16) {
    for (let l = 1; l <= arr.length; l += 2) {
      otherNumber.push(arr[l]);
    }
  } else {
    for (let l = 0; l < arr.length; l += 2) {
      otherNumber.push(arr[l]);
    }
  }
  console.log(otherNumber);
  const finalSumArray = shortNumber.concat(otherNumber);
  //console.log(finalSumArray)
  for (let z = 0; z < arr.length; z++) {
    number = finalSumArray[z];
    finalSum = finalSum + number;
  }
  console.log(finalSum)
  //console.log(finalSum);
  if (finalSum % 10 === 0) {
    return "This is a valid credit card.";
  } else {
    return "This is not a valid credit card.";
  }
}

//console.log(validateCred(mystery5));
let invalidCreditCards = [];
function findInvalidCards(nestedArr) {
  for (let i of nestedArr) {
    if (validateCred(i) === "This is not a valid credit card.") {
      invalidCreditCards.push(i);
    }
  }
  return invalidCreditCards;
}
//console.log(findInvalidCards(batch));

function idInvalidCardCompanies(nestArr) {
  let companyArr = [];
  for (let i of nestArr) {
    if (i[0] === 3) {
      companyArr.push("American Express");
    } else if (i[0] === 4) {
      companyArr.push("Visa");
    } else if (i[0] === 5) {
      companyArr.push("Mastercard");
    } else if (i[0] === 6) {
      companyArr.push("Discover");
    } else {
      companyArr.push("Company not found");
    }
  }
  let cleanArr = companyArr.filter((x, index)=> {
    return companyArr.indexOf(x) === index;
  })
  return cleanArr
}
//console.log(idInvalidCardCompanies(invalidCreditCards));
//console.log(validateCred(valid1))
//console.log(validateCred(valid2))
console.log(validateCred(valid3))
//console.log(validateCred(valid4))
//console.log(validateCred(valid5))
//console.log(validateCred(invalid1))
//console.log(validateCred(invalid2))
//console.log(validateCred(invalid3))
//console.log(validateCred(invalid4))
//console.log(validateCred(invalid5))
//console.log(validateCred(mystery1))
//console.log(validateCred(mystery2))
//console.log(validateCred(mystery3))
//console.log(validateCred(mystery4))
//console.log(validateCred(mystery5))

/*nst originalArray = [1,2,3,4,5,6];

const validateCred = arr => {
  let lastD = arr.pop();
  let reverseArr = arr.reverse();
  return reverseArr;
  }
  
console.log(validateCred(originalArray));
console.log(originalArray)*/
