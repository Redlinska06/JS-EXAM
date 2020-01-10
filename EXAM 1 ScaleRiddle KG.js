// EXAM 1
// Scale riddle. With 8 balls ☺ EXAM [1,1,1,1,2,1,1,1]. One of the items will be change to
// two. Indexes are to be chosen at random. Use compressions only two times (We have to solve this problem in only two weighing’s).

let balls = [1, 1, 1, 1, 2, 1, 1, 1];
let scaleRiddle = arr => {
  let scalePan1 = [];
  let scalePan2 = [];
  let scalePan3 = [];
  let sum1 = 0;
  let sum2 = 0;
  for (i = 0; i < arr.length; i++) {
    if (i < 3) {
      let factor = Math.floor(Math.random() * arr.length);
      if (scalePan1.includes(factor, 0) === true) {
        i = i - 1;
      } else {
        sum1 += arr[factor];
        scalePan1.push(factor);
      }
    } else if (i >= 3 && i < 6) {
      let factor = Math.floor(Math.random() * arr.length);
      if (
        scalePan1.includes(factor, 0) === true ||
        scalePan2.includes(factor, 0) === true
      ) {
        i = i - 1;
      } else {
        sum2 += arr[factor];
        scalePan2.push(factor);
      }
    } else {
      let factor = Math.floor(Math.random() * arr.length);
      if (
        scalePan1.includes(factor, 0) === true ||
        scalePan2.includes(factor, 0) === true ||
        scalePan3.includes(factor, 0) === true
      ) {
        i = i - 1;
      } else {
        scalePan3.push(factor);
      }
    }
  }
  if (sum1 === sum2) {
    if (arr[scalePan3[0]] < arr[scalePan3[1]]) {
      return scalePan3[1];
    } else {
      return scalePan3[0];
    }
  } else if (sum1 > sum2) {
    if (arr[scalePan1[0]] < arr[scalePan1[1]]) {
      return scalePan1[1];
    } else if (arr[scalePan1[0]] > arr[scalePan1[1]]) {
      return scalePan1[0];
    } else {
      return scalePan1[2];
    }
  } else {
    if (arr[scalePan2[0]] < arr[scalePan2[1]]) {
      return scalePan2[1];
    } else if (arr[scalePan2[0]] > arr[scalePan2[1]]) {
      return scalePan2[0];
    } else {
      return scalePan2[2];
    }
  }
};

console.log("Searching ball index:", scaleRiddle(balls));
console.log(`Searching ball index: ${scaleRiddle(balls)}`);
