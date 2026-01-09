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
//  {
//   function firstNonRepeating(arr) {
//     let count = {};
//     for (let num of arr) {
//       count[num] = (count[num] || 0) + 1;
//     }
//     // console.log(count);

//     return Object.keys(count).find(k=> count[k] ===1);
//   }
//   console.log(firstNonRepeating([2, 3, 2, 3, 5]));
// }
// Return the number that appears the most time in the array
// function mostFrequent(arr) {
//   const count = {};
//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }
//   const maxEntry= Object.entries(count).reduce((current, max)=>{
//     const [currentKey, currentValue] = current;
//     const [maxKey, maxValue] = max
//     return currentValue > maxValue ? current: max;
//   });
//   return maxEntry
// }
// console.log(
//   mostFrequent([1, 3, 3, 3, 4, 3, 2]) // 3
// );
/* Return True/False on the bases of Array is Sorted or not*/
// function isSorted(arr) {
//   for (let i = 0; i < arr.length -1; i++) {
//     if (arr[i] > arr[i + 1]) {
//       return false
//     }
//   }
//   return true;
// }
// console.log(isSorted([1, 3, 3, 4]));
// console.log(isSorted([1, 3, 2]));
// console.log(isSorted([1, 2, 3, 4]));    // true
// console.log(isSorted([1, 3, 2]));       // false
// console.log(isSorted([10, 20, 30]));    // true
// console.log(isSorted([5, 4, 3, 2, 1])); // false
/* Return the missing number from a series of number in array*/
// function findMissing(arr){
//   const n = arr.length + 1;
//   const expectedSum = (n*(n+1)) /2;
//   const actualSum = arr.reduce((sum,current)=> sum += current)
//   return expectedSum - actualSum
// }
// console.log(findMissing([1, 2, 3, 5, 6])) // Output = 4
// Returns even and odd
// function groupEvenOdd(arr) {
//   return arr.reduce(
//     (acc, num)=> {
//       if (num % 2 === 0){
//         acc.even.push(num)
//       }
//       else{
//         acc.odd.push(num)
//       }
//       return acc;
//     },
//     {even: [], odd: []}
//   );
// }

// console.log(JSON.stringify(groupEvenOdd([1, 2, 3, 4, 5, 6])));
// Returns only unique numbers from the array || which are not repeated
// function uniqueOnly(arr) {
//   const frequency = arr.reduce((count, num) => {
//     count[num] = (count[num] || 0) + 1;
//     return count;
//   }, {});
//   return arr.reduce((result, num)=> {
//     if(frequency[num] === 1){
//       result.push(num)
//     }
//     return result
//   },[])
// }
// console.log(uniqueOnly([1, 2, 2, 3, 3, 3, 4]))

/* Returns the common values in both array (No Duplicates) */
// function arrayIntersection(arr1, arr2) {
//   // it creates a new array of unique values
//   const set2 = new Set(arr2);

//   const intersectedArray = arr1.filter((item) => set2.has(item));

//   return [...new Set(intersectedArray)];
// }
// console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
// {
//   /** Converts a Nested Array(1-LEVEL) to a Single Array  */
//   function flatten(arr){
//     // flat method is used for array flaterning
//     const concat = arr.flat()
//     console.log(concat);

//   }
//   flatten([1, [2, 3], [4], 5]) // [1, 2, 3, 4, 5]

// }
// {
//   /** Return a longest word from a string of sentence */
//   function longestWord(str){
//     const word = str.split(" ")
//     console.log(word);
//     const longestWord = word.reduce((longest, currentWord)=>{
//       return currentWord.length > longest.length? currentWord: longest;
//     })
//     return console.log(longestWord);

//   }
//   longestWord("JavaScript makes web development powerful")// "development"
// }
/**Rotate the array to the right by k steps. */
// function revNums(nums, start, end) {
//   while (start < end) {
//     [nums[start], nums[end]] = [nums[end], nums[start]];
//     start ++;
//     end --;
//   }

// }

// const rotate = function (nums, k) {
//   console.log("Input Array and k is:" , nums, k);
//   k = k % nums.length;
//   nums.reverse();
//   console.log("After Reverse and MOD:",nums, k);
//   revNums(nums , 0, k-1)
//   console.log("after --step 1: ", nums);
//   revNums(nums, k , nums.length -1)
//   console.log("Final result is :: --",nums);

// };
// rotate([1,2,3,4,5,6,7],3);
/** Return True/False on the basis of both Arrays are equal (same order) */
// function areEqual(arr1, arr2) {
//   let areEqual;
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         areEqual = true;
//       } else return false;
//     }
//   } else return false;
//   return areEqual;
// }
// console.log(areEqual([1, 2, 3], [1, 2, 3]));
/** Return the first unique Character from a String */
// function firstUniqueChar(str){
//   const fCount = str.split("").reduce((count, num)=>{
//     count[num] = (count[num] || 0 ) +1
//     return count
//   },{})
//   console.log(fCount);
//   return Object.keys(fCount).find(k => fCount[k] === 1)

// }
// console.log("First Unique Char:",firstUniqueChar("aabbcdde"));
/** Chunked array w.r.t given size */
// function chunkedArray(arr, size) {
//   const res = [];
//   for (let i = 0; i < arr.length; i += size) {
//     res.push(arr.slice(i, i + size));
//   }
//   return res;
// }
// console.log(chunkedArray([1, 2, 3, 4, 5, 6, 7], 3));
/** Returns True/False based on whether string is Palindrome */
// function isPalindrome(str1){
//   const str2 = str1.split('').reverse().join('')
//   console.log(str2);
//   return str1 === str2? true: false
// }
// console.log(isPalindrome("abba"));
/** Converts Array to Object using key as id*/
// const arrOfObject = [
//   { id: 1, name: "JS" },
//   { id: 2, name: "React" },
// ];
// function convert(arr) {
//   return arr.reduce((accumulator, value) => {
//     accumulator[value.id] = value
//     return accumulator
//   },{})
// }
// console.table(convert(arrOfObject));
/** Returns a smallest substring that contains all given character */
function smallestWindow(str, input) {}
smallestWindow("ADOBECODEBANC", "ABC");
/** Return a compressed string Using Run-Length Encoding */
// function compress(str) {
//   if (!str) return "";
//   const compressed = [];
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       compressed.push(str[i] + count);
//       count = 1;
//     }
//   }
//   console.log(compressed.join(""));
// }
// compress("aaabbcaaa"); // "a3b2c1a3"
/** Returns the longest subarray equal to given number */
// const longestSubarray = function (arr, k) {
//   let sum = 0;
//   let min = Infinity;
//   let left = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     while (sum >= k) {
//       min = Math.min(min, i - left + 1);
//       sum -= arr[left];
//       left++;
//     }
//   }
//   return console.log(min === Infinity ? 0 : min);
// };
// longestSubarray([1, 2, 3, 1, 1, 1, 1], 3); // 3
/** Group anagrams together */
// function groupAnagrams(arr) {
//   const groups = arr.reduce((acc, word) => {
//     const key = word.toLowerCase().split("").sort().join();
//     if (!acc[key]) {
//       acc[key] = [];
//     }
//     acc[key].push(word);
//     return acc;
//   }, {});
//   return Object.values(groups);
// }
// console.table(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]
/** Returns the first missing positive integer from an unsorted array */
function firstMissingPositive(arr) {
  const n = arr.length;
  const present = new Array(n + 1).fill(false);

  for (let num of arr) {
    if (num > 0 && num <= n) {
      present[num] = true;
    }
  }
}
for (let i = 1; i <= n; i++) {
  if (!present[i]) {
    return i;
  }
  return n + 1;
}
console.log(firstMissingPositive([3, 4, -1, 1])); // 2