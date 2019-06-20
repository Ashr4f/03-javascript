/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target");

    target.style.marginTop = "100px";

    var splitTarget = target.innerHTML.split("");

    target.innerHTML = "";

    splitTarget.forEach(letter => {
        targetLettersToSpan = document.createElement("span");
        targetLettersToSpan.innerHTML = letter;
        target.appendChild(targetLettersToSpan);
    });

    var spans = document.querySelectorAll("#target span");


    var fontSizes = [16, 18, 20, 22, 24];


    var counterMaxNumber = fontSizes.length;
    var counterMinNumber = 0;


    for (let i = counterMinNumber; i <= spans.length; i++) {

    }

})();