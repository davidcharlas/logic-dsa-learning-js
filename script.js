// // Problem 1:Write a function that takes a string and returns it reversed.
// function reverseString(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseString("hello"));
// //Output: "olleh"
// Problem 2: Given an array of numbers, return the largest number.
// function findMax(arr){
//     return console.log(Math.max(...arr))
// }
// findMax([3, 7, 2, 9, 5]) // 9
// Problem 3: Write a function that checks whether a number is even or odd.\
// function isEvenOrOdd(num){
//     return num % 2 ===0? "Even": "Odd";
// }
// console.log(isEvenOrOdd(5))
// Problem 4: Write a function that counts how many vowels (a, e, i, o, u) are in a string.
// function countVowels(str){
//     const vowels = 'aeiou';
//     str = str.toLowerCase();
//     let count = 0;
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("aabbbbaa")) // 4
// Problem 5: Find the smallest positive number in an array of numbers.
// function findSmallestPositive(arr) {
//     let min = Infinity;

//     arr.forEach(num => {
//         if (num >0 && num < min){
//             min = num;
//         }

//     });

//     return min === Infinity ? null : min;
// }

// console.log(findSmallestPositive([-3, 2, 1,4]));

//  // 1
// function sumOfEven(arr) {
//   let sum = 0;
//   arr.forEach((num) => {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   });
//   return sum;
// }
// console.log(sumOfEven([1, 2, 3, 4, 6])    //12
// )
// function countOccurrences(arr,n){
//     let count = 0
//     arr.forEach(element => {
//         if (element === n){count++}
//     });
//     return count;
// }
// console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2))//
// {
//   // const arr1 = [1,2,2,3,4,5,6,6,7]
//   let arr1 = ["chishti", "furqan", "Furqan"];
//   const arr =  arr1.map((element) => {
//     return element.toLowerCase();
//   });
//   const uniqueArr = [...new Set(arr)];
//   console.log(uniqueArr);
// }
// {
//     function secondLargest(arr){
//         arr.sort((a, b) => b-a)// to sort in decending order. || a-b for Accending order
//         return arr[1]
//     }
//     console.log(secondLargest([10, 5, 8, 20]))
// }