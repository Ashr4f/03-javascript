/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function changeBgColor(color) {
        document.querySelector("html").style.backgroundColor = color;
    }

    const getColorName = colorName => {
        switch (colorName) {
            case "red":
                changeBgColor("red");
                break;
            case "green":
                changeBgColor("green");
                break;
            case "yellow":
                changeBgColor("yellow");
                break;
            case "blue":
                changeBgColor("blue");
                break;

            default:
                break;
        }
    };

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (getColorName($btn.id), false),
        ),
    );

})();