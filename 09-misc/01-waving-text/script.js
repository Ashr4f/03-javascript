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

    target.style.paddingTop = "100px";
    target.style.paddingBottom = "100px";
    target.style.height = "200px";

    var splitTarget = target.innerHTML.split("");

    target.innerHTML = "";

    splitTarget.forEach(letter => {
        targetLettersToSpan = document.createElement("span");
        targetLettersToSpan.innerHTML = letter;
        target.appendChild(targetLettersToSpan);
    });

    var spans = document.querySelectorAll("#target span");

    var fontSizes = [10, 20, 30, 40, 50];
    var currentFontIndex = 0;
    var direction = "forward";

    for (let i = 0; i < spans.length; i++) {
        spans[i].style.verticalAlign = "middle";
        spans[i].style.transition = "font linear 0.75s";
    }

    function vagueEffect() {
        for (let i = 0; i < spans.length; i++) {
            var counter = fontSizes[currentFontIndex];

            if (direction == "forward") {
                if (currentFontIndex >= fontSizes.length - 1) {
                    direction = "backward";
                    currentFontIndex--;
                } else {
                    currentFontIndex++;
                }
            } else if (direction == "backward") {
                if (currentFontIndex <= 0) {
                    direction = "forward";
                    currentFontIndex++;
                } else {
                    currentFontIndex--;
                }
            }
            spans[i].style.fontSize = counter + "px";
        }
    }

    var inter = setInterval(() => {
        vagueEffect();
    }, 1000);


})();