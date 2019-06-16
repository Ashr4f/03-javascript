/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function getTime(hours, minutes, seconds) {
        var date = new Date();
        var d = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes(); // ECMA 2017 `${new Date().getMinutes}`.padStart(2, "0");
        var s = date.getSeconds();

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if (hours == undefined || hours == null) {
            return d + " " + h + ':' + m + ":" + s;
        } else if (minutes == undefined || minutes == null) {
            return h;
        } else if (seconds == undefined || seconds == null) {
            return h + ':' + m;
        } else {
            return h + ':' + m + ":" + s;
        }
    }


    function showMessage() {
        if (getTime("hours", "minutes") < "17:30") {
            document.getElementById("target").innerText = "Il est: " + getTime("show hours", "show minutes", "show seconds") + " Bonjour 👋";
        } else {
            document.getElementById("target").innerText = "Il est: " + getTime("show hours", "show minutes", "show seconds") + " Bonsoir 👋";
        }
    }
    showMessage();

    setInterval(() => {
        getTime();
        showMessage();
    }, 1000);

    var array = ["tokyo", "london", "dublin", "kyoto", "donlon"];

    function sortAnan(arr) {
        let sortedArr = arr.map(item => item.split('').sort().join(''));
        let setArr = new Set(sortedArr);
        let reducedObj = {};
        for (let setItem of setArr) {
            let indexArr = sortedArr.reduce((acc, cur, index) => {
                if (setItem === cur) {
                    acc.push(index);
                }
                return acc;
            }, []);
            reducedObj[setItem] = indexArr;
        }
        let finalArr = [];
        for (let reduceItem in reducedObj) {
            finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
        }
        return finalArr;
    }
    var arraySorted = sortAnan(array);

    console.log(arraySorted);


})();