/*
Assignment: Maximum Pairwise Product

Problem Description

Problem

Given a sequence of non-negative integers a0,…,an−1, find the maximum pairwise product, that is, the largest integer that can be obtained by multiplying two different elements from the sequence (or, more formally, max0≤i≠j≤n−1aiaj). Different elements here mean ai and aj with i≠j (it can be the case that ai=aj).

Input format

The first line of the input contains an integer n. The next line contains n non-negative integers a0,…,an−1 (separated by spaces).

Constraints

2≤n≤2⋅105; 0≤a0,…,an−1≤105.

Output format

Output a single number — the maximum pairwise product.
*/

function maxPair() {
  if (arguments.length === 1) {
    return arguments[0];
  }
  var arr = Array.from(arguments);
  arr = arr.sort(function(a,b){
    return a - b;
  });
  var sumOfBiggestInts = arr[arr.length - 1] * arr[arr.length - 2];
  return sumOfBiggestInts;
}


console.log(maxPair(0, 6, 1, 2, 3));
console.log(maxPair(0, -6, 14, 2, 10, 3));
console.log(maxPair(0));
