// 2.3.1. Exercice 1
// Résous le sujet 1 avec une complexité algorithmique de O(n²), 
// c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const arr1 = [10, 15, 3, 7];
const sum1 = 17;

const checkSumArray = (arr, n) => {
    compare = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            compare++;
            if (arr[i] + arr[j] === n) return true;
        }
    }
    return false;
}

console.log(checkSumArray(arr1, sum1));