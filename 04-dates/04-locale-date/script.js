/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {

    var frenchBegliumLanguageCode = /^fr-BE/gi;

    function getLocalTime(language) {
        var date = new Date();
        var d = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        var localeDate = date.toLocaleDateString(language, options);
        var capitalizeFirstLetter = localeDate.charAt(0).toUpperCase() + localeDate.slice(1);
        if (frenchBegliumLanguageCode.test(language)) {
            var customLocaleDate = capitalizeFirstLetter.split(" à").join(",").replace(/\:/, "h");
        } else {
            var customLocaleDate = capitalizeFirstLetter;
        }
        return customLocaleDate;
    }


    function showMessage() {
        document.getElementById("target").innerText = getLocalTime("fr-BE");
    }
    showMessage();

    setInterval(() => {
        getLocalTime();
        showMessage();
    }, 1000);

})();