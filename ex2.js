// 2.3.2. Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²), 
// c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const building1 = [3, 7, 8, 3, 6, 1];
const building2 = [1, 4, 5, 8];
const sunView = (num) => {

    let haveView = 0;
    let isMax;
    compare = 0;

    for (let i = 0; i < num.length; i++) {
        isMax = true;
        for (let j = i + 1; j < num.length; j++) {
            compare++;
            if (num[j] >= num[i]) {
                isMax = false;
                break;
            }
        }
        if (isMax) haveView++;
    }
    return haveView;
}

console.log(sunView(building1));
console.log(sunView(building2));