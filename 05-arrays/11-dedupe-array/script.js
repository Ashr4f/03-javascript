/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];


    document.getElementById("run").addEventListener("click", () => {

        /*fruitsDeduplicated = fruits.filter(function (fruit, currentPosition) {
            return fruits.indexOf(fruit) == currentPosition;
        });*/


        // I FIND THIS ONE EASIER, LOL

        var fruitsToSet = new Set(fruits);
        var fruitsDeduplicated = Array.from(fruitsToSet);
        fruits.splice(0);

        for (let i = 0; i < fruitsDeduplicated.length; i++) {
            fruits.push(fruitsDeduplicated[i]);
        }

        console.log(fruits);

    });
})();