/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);


    document.getElementById("run").addEventListener("click", () => {

        console.log("Il y a " + people.size + " personne dans le Set people ");

        people.forEach(function (person) {
            if (person.toLowerCase() == "alexandre") {
                console.log("Et " + person + " fait partie du Set");
            }
        });

        /* second solution
        if (people.has("Alexandre")) {
                console.log("Et Alexandre fait partie du Set");
            }
        */

    });

})();