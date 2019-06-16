/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
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
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {

        var pommes = [];

        fruits.forEach((fruit) => {
            if (fruit.toLowerCase() == "pomme") {
                pommes.push(fruit);
            }
        });

        var checkPommesNumber;

        if (pommes.length <= 1) {
            checkPommesNumber = "une pomme";
        } else {
            checkPommesNumber = pommes.length + " pommes";
        }

        console.log("Oui, il y a " + checkPommesNumber);
    });

})();