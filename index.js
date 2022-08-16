// function doubleValuesEach(arr) {
//   const q1ForEach = arr.forEach((item) => item * 2);
//   return q1ForEach;
// }

// console.log(doubleValues([1, 2, 3]));

function doubleValuesMap(arr) {
  const q1ForEach = arr.map((item) => item * 2);
  return q1ForEach;
}

///////////////////////////////////////
console.log(doubleValuesMap([1, 2, 3]));
console.log(doubleValuesMap([5, 1, 2, 3, 10]));

console.log(`-----------------------------------------`);

function onlyEvenValues(arr) {
  const q2NewArrayForEach = [];
  arr.forEach((even) => {
    if (even % 2 == 0) {
      q2NewArrayForEach.push(even);
    }
  });
  //   console.log(newArrMap);
  return q2NewArrayForEach;
}
// function onlyEvenValues(arr) {
//   const newArrMap = arr.filter((even) => {
//     if (even % 2 == 0) {
//       return even;
//     }
//   });

//   return newArrMap;
// }

console.log("This is first", onlyEvenValues([1, 2, 3]));
console.log("This is second", onlyEvenValues([5, 1, 2, 3, 10]));

console.log(`-----------------------------------------`);

function showFirstAndLast(arr) {
  //   console.log(arr);
  const q3NewMap = arr.map((item) => {
    return item[0] + item[item.length - 1];
  });
  console.log(q3NewMap);
}

// function showFirstAndLast(arr) {
//   const q3NewArray = [];
//   //   console.log(arr);
//   arr.forEach((item) => {
//     // q3NewArray.push(item[0] + item[item.length - 1]);
//     q3NewArray.push(item.slice(0, 1) + item.slice(-1));
//   });
//   console.log(q3NewArray);
// }

showFirstAndLast(["colt", "matt", "tim", "udemy"]); // ["ct", "mt", "tm", "uy"]
showFirstAndLast(["hi", "goodbye", "smile"]); // ['hi', 'ge', 'se']

console.log(`-----------------------------------------`);

// function addKeyAndValue(arr, key, value) {
//   //
//   const q4NewArrayMap = arr.map((item) => {
//     // console.log(item);
//     item[key] = value;
//     return item;
//   });
//   console.log(q4NewArrayMap);
// }

function addKeyAndValue(arr, key, value) {
  const q4NewArrayEach = [];
  arr.forEach((item) => {
    item[key] = value;
    q4NewArrayEach.push(item);
  });
  console.log(q4NewArrayEach);
}

addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

console.log(`-----------------------------------------`);

function vowelCount(str) {
  const lowerStr = str.toLowerCase();

  const newObj = {};
  const vowel = "aeiou";
  const toArray = lowerStr.split("");

  toArray.forEach((letter) => {
    if (vowel.includes(letter)) {
      //   newObj[letter] = 1;
      newObj[letter] = (newObj[letter] || 0) + 1;
    }
    // if (Object.keys(newObj).includes(letter)) {
    //   newObj[letter] = newObj[letter] + 1;
    //   //  newObj[letter] = (newObj[letter] || 0) + 1;
    // }
  });
  console.log(newObj);
}

vowelCount("Elie"); // {e:2,i:1};
vowelCount("Tiim"); // {i:1};

vowelCount("Matt"); // {a:1})
vowelCount("hmmm"); // {};
vowelCount("I Am awesome and so are you"); // {i: 1, a: 4, e: 3, o: 3, u: 1};
