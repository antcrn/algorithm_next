//2.3.3. Exercice 3
//Résous le sujet 1 avec une complexité algorithmique de O(n), 
//c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

const arr1 = [10, 15, 3, 7];
const sum1 = 17;

const exo3 = (arr1, sum1) => {
    let set = new Set(arr1)
    for (let i = 0; i < arr1.length; i++) {
        if (set.has(10)) {
            return true
        }
    }
    return false
}

console.log(exo3(arr1, 17))