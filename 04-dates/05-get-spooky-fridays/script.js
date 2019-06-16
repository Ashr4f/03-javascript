/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    var emptyAndWhiteSpaceRegEx = /^\s*$/;

    function isValidDate(d) {
        return d instanceof Date && !isNaN(d);
    }

    document.getElementById("run").addEventListener("click", () => {
        document.getElementById("target").innerHTML = "<br>";
        var yearFromInputField = document.getElementById("year").value.replace(/^0+/gi, "");
        var dateFromInputField = new Date(yearFromInputField);
        var getFullYear = new Date().getFullYear();


        if (emptyAndWhiteSpaceRegEx.test(yearFromInputField)) {
            alert("Le champ ne peut pas être vide");
        } else if (isValidDate(dateFromInputField)) {

            if (yearFromInputField < 10) {
                yearFromInputField = "000" + yearFromInputField;
            }
            if (yearFromInputField > 10 && yearFromInputField < 100) {
                yearFromInputField = "00" + yearFromInputField;
            }
            if (yearFromInputField < 1000 && yearFromInputField >= 100) {
                yearFromInputField = "0" + yearFromInputField;
            }

            let list = [];
            for (let monthsIndex = 1; monthsIndex <= 12; monthsIndex++) {

                var monthsToString = monthsIndex.toString();

                if (monthsToString < 10) {
                    monthsToString = "0" + monthsToString;
                }
                var monthsInYearsFromInputField = new Date(yearFromInputField + "-" + monthsToString + "-" + "13");
                var getDayIndexFromInputField = monthsInYearsFromInputField.getDay();
                var getYearFromInputField = monthsInYearsFromInputField.getFullYear();
                if (getDayIndexFromInputField == 5) {
                    list.push(months[monthsIndex - 1]);
                }
            }

            var changeBasedOnTime;
            if (getYearFromInputField < getFullYear) {
                changeBasedOnTime = "a eu";
            } else if (getYearFromInputField > getFullYear) {
                changeBasedOnTime = "aura"
            } else {
                changeBasedOnTime = "a"
            }

            if (list.length <= 1) {
                document.getElementById("target").innerHTML = "En " + getYearFromInputField + " Il y " + changeBasedOnTime + " un vendredi 13 \(Spooky Friday\) en " + "<span style='color: #4cd137;'>" + list.join("") + "</span>";
            } else {
                document.getElementById("target").innerHTML = "En " + getYearFromInputField + " Il y " + changeBasedOnTime + " des vendredis 13 \(Spooky Fridays\) en " + "<span style='color: #4cd137;'>" + list.slice(0, -1).join(', ') + "</span>" + " et " + "<span style='color: #4cd137;'>" + list.slice(-1) + "</span>";
            }

        } else {
            alert("Veuillez entrer une date valide");
        }

        document.getElementById("target").innerHTML = document.getElementById("target").innerHTML.replace(/\,/g, "<span style='color: #16232E;'>,</span>");
    });
})();