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
    let target = document.getElementById("target");
    let buttons = document.querySelectorAll("button");
    const results = [];

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

            let inputMinValue = parseInt(this.parentNode.querySelector("input").getAttribute("data-min"));
            let inputMaxValue = parseInt(this.parentNode.querySelector("input").getAttribute("data-max")); // previousElementSibling
            let inputField = this.parentNode.querySelector("input");

            clickCounter++;
            let phoneSlot = setInterval(() => {
                if (inputField.value >= inputMaxValue) {
                    inputField.value = inputMinValue - 1;
                }
                if (inputField.value < 10) {
                    inputField.value = ("0" + (parseInt(inputField.value) + 1)).slice(-2);
                } else {
                    inputField.value = parseInt(inputField.value) + 1;
                }
                if (clickCounter % 2 == 0) {
                    clearInterval(phoneSlot);
                }

                results.splice(0, results.length);

                for (let i = 0; i < buttons.length; i++) {
                    results.push(buttons[i].parentNode.querySelector("input").value);
                }
                target.innerHTML = `+${results.join("")}`;
            }, 50);

        });

    });



})();