/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var target = document.getElementById("target");
    var incrementButton = document.getElementById("increment");
    var counter = 0;

    if (localStorage.getItem("counter") != null) {
        counter = parseInt(localStorage.getItem("counter"));
        target.innerText = counter;
    }


    incrementButton.addEventListener("click", function () {
        counter += 1;
        localStorage.setItem("counter", counter);
        target.innerText = counter;
    });

})();