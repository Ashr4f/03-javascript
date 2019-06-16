/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        var numbers = [];

        for (let i = 0; i < 10; i++) {
            numbers.push(Math.round(Math.random() * 100));
        }

        var numbersSum = 0;
        for (let i = 1; i <= numbers.length; i++) {
            document.getElementById("n-" + i).innerHTML = numbers[i - 1];
            numbersSum += numbers[i - 1];
        }

        var ascendingNumbers = numbers.slice().sort(function (a, b) {
            return a - b;
        });
        var descendingNumbers = numbers.slice().sort(function (a, b) {
            return b - a;
        });

        var numbersAverage = numbersSum / numbers.length;

        document.getElementById("max").innerHTML = descendingNumbers[0];
        document.getElementById("min").innerHTML = ascendingNumbers[0];
        document.getElementById("sum").innerHTML = numbersSum;
        document.getElementById("average").innerHTML = numbersAverage;

    });

})();