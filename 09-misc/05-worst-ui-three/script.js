/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
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
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = "Start";
        }
        var clickCounter = 0;
        button.addEventListener("click", function () {

            if (this.innerHTML == "Stop") {
                this.innerHTML = "Start";
            } else if (this.innerHTML == "Start") {
                this.innerHTML = "Stop";
            }

            var inputMinValue = parseInt(this.previousElementSibling.getAttribute("data-min"));
            var inputMaxValue = parseInt(this.previousElementSibling.getAttribute("data-max"));
            var $this = this;

            clickCounter++;
            var casinoEffect = setInterval(() => {
                if ($this.previousElementSibling.value >= inputMaxValue) {
                    $this.previousElementSibling.value = inputMinValue - 1;
                }
                if ($this.previousElementSibling.value < 10) {
                    $this.previousElementSibling.value = ("0" + (parseInt($this.previousElementSibling.value) + 1)).slice(-2);
                } else {
                    $this.previousElementSibling.value = parseInt($this.previousElementSibling.value) + 1;
                }
                if (clickCounter % 2 == 0) {
                    clearInterval(casinoEffect);
                }

                results.splice(0, results.length);

                for (let i = 0; i < buttons.length; i++) {
                    results.push(buttons[i].previousElementSibling.value);
                }
                target.innerHTML = "+" + results.join("");
            }, 50);

        });

    });



})();