/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
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
    ]);

    // CHANGE SET TO ARRAY
    var fruitsToArray = [...fruits];

    // CHANGE FRUITS VALUE USING ITS INDEX
    fruitsToArray[0] = "banane";
    fruitsToArray[fruitsToArray.length - 1] = "kiwi";

    // CLEAR THE SET
    fruits.clear();

    // CLICK EVENT
    document.getElementById("run").addEventListener("click", () => {

        // PUSH THE NEW MODIFIED ARRAY TO THE CLEARED SET (furits)
        fruitsToArray.forEach(function (fruit, index) {
            fruits.add(fruit);
        });

        console.log(fruits);

    });


})();