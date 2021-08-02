/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
 const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

 function result(numbers) {
   // Your Code Here
   const findMissing = (numbers = [], n) => {
    let el = 0;
    let diff = 0;
    for(let i=0; i<numbers.length; ++i) {
       const difference = numbers[i] - el - 1;
       const sum = diff + difference;
       if(sum>=n) {
          break;
       };
       diff = sum;
       el = numbers[i];
    }
    return el + n - diff;
 };
 console.log(findMissing(numbers, 8));
 }
 
 console.log(result(numbers));