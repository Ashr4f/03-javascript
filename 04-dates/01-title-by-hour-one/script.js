/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
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
        var m = date.getMinutes();
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
        if (getTime("show hours", "show minutes") < "17:30") {
            document.getElementById("target").innerText = "Il est: " + getTime("show hours", "show minutes", "show seconds") + " Bonjour 👋";
        } else {
            document.getElementById("target").innerText = "Il est: " + getTime("show hours", "show minutes", "show seconds") + " Bonsoir 👋";
        }
    }
    showMessage();

    setInterval(() => {
        showMessage();
    }, 1000);

})();