/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target");
    var letters = target.innerHTML.split("");
    var rapidity = 75;

    target.innerHTML = "";
    var i = 0;


    function s() {
        if (i < letters.length) {
            target.innerHTML += letters[i];
            i++;
            setTimeout(s, rapidity);
        }
    }
    s();

})();