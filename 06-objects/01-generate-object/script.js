/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var my = new Object();
        my.lastname = "Ahmed";
        my.firstname = "Ashraf";
        my.age = 22;
        my.city = "Mosul";
        my.country = "Iraq";
        console.log(my);
    });
})();