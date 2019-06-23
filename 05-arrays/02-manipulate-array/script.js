/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function oneTimeClick() {

        /*fruits.splice(0, 1); // or .shitf();
        fruits.splice(-1, 1); // or .pop();
        fruits.unshift("banane");
        fruits.push("kiwi");*/

        fruits[0] = "banane";
        fruits[fruits.length - 1] = "kiwi";

        console.log(fruits);
    });
})();