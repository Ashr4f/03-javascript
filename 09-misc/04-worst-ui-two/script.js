/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target");
    var buttons = document.querySelectorAll("button");
    var results = [];

    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var thisMinValue = parseInt(this.getAttribute("data-min"));
            var thisMaxValue = parseInt(this.getAttribute("data-max"));

            if (this.innerHTML >= thisMaxValue) {
                this.innerHTML = thisMinValue - 1;
            }
            if (this.innerHTML < 10) {
                this.innerHTML = ("0" + (parseInt(this.innerHTML) + 1)).slice(-2);
            } else {
                this.innerHTML = parseInt(this.innerHTML) + 1;
            }

            results.splice(0, results.length);
            for (let i = 0; i < buttons.length; i++) {
                results.push(buttons[i].innerHTML);
            }
            target.innerHTML = "0" + results.join("");

        });
    });

})();