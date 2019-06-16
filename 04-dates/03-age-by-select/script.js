/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    /* FOR PERSONAL USE
    
     function getCurrentDate(YYYY, MM, dd, hh, mm, ss, ms) {
         var date = new Date();
         var year = date.getFullYear();
         var month = date.getMonth() + 1;
         var day = date.getDate();
         var hour = date.getHours();
         var minute = date.getMinutes();
         var second = date.getSeconds();
         var milliSecond = date.getMilliseconds();


         if (year < 10) {
             year = "0" + year;
         }
         if (month < 10) {
             month = "0" + month;
         }
         if (day < 10) {
             day = "0" + day;
         }
         if (hour < 10) {
             hour = "0" + hour;
         }
         if (minute < 10) {
             minute = "0" + minute;
         }
         if (second < 10) {
             second = "0" + second;
         }
         if (milliSecond < 10) {
             milliSecond = "0" + milliSecond;
         }
         if (YYYY == undefined || YYYY == null) {
             return new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second + ":" + milliSecond);
         } else if (MM == undefined || MM == null) {
             return new Date('"' + year + '"');
         } else if (dd == undefined || dd == null) {
             return new Date('"' + year + "-" + month + '"');
         } else if (hh == undefined || hh == null) {
             return new Date('"' + year + "-" + month + "-" + day + '"');
         } else if (mm == undefined || mm == null) {
             return new Date('"' + year + "-" + month + "-" + day + "  " + hour + ":" + '"');
         } else if (ss == undefined || ss == null) {
             return new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute);
         } else if (ms == undefined || ms == null) {
             return new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second);
         }
     }*/

    function getAge(YYYY, MM, dd, hh, mm, ss, ms) {
        /* FOR PERSONAL USE
        
        if (YYYY == undefined || YYYY == null) {
            var birthDate = new Date(YYYY + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + ":" + ms);
        } else if (MM == undefined || MM == null) {
            var birthDate = new Date('"' + YYYY + '"');
        } else if (dd == undefined || dd == null) {
            var birthDate = new Date('"' + YYYY + "-" + MM + '"');
        } else if (hh == undefined || hh == null) {
            var birthDate = new Date('"' + YYYY + "-" + MM + "-" + dd + '"');
        } else if (mm == undefined || mm == null) {
            var birthDate = new Date('"' + YYYY + "-" + MM + "-" + dd + "  " + hh + ":" + '"');
        } else if (ss == undefined || ss == null) {
            var birthDate = new Date(YYYY + "-" + MM + "-" + dd + " " + hh + ":" + mm);
        } else if (ms == undefined || ms == null) {
            var birthDate = new Date(YYYY + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss);
        }*/

        var birthDate = new Date('"' + YYYY + "-" + MM + "-" + dd + '"');
        var days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
        var dayName = days[birthDate.getDay()];

        var currentDate = new Date();
        var milliDay = (1000 * 60 * 60 * 24);
        var ageInDays = Math.floor((currentDate - birthDate) / milliDay);
        var ageInYears = Math.floor(ageInDays / 365);
        var ageInMonths = Math.floor(ageInDays / 30);
        var ageInHours = Math.floor(ageInDays * 24);
        var ageInMinutes = (ageInHours * 60);
        var ageInSeconds = (ageInMinutes * 60);

        return ("Vous êtes né le  " + (dayName) + "\n" + "Vous avez " + (ageInYears) + " ans où \n" + (ageInMonths) + " mois où \n" + (ageInDays) + " jours où \n" + (ageInHours) + " heures où \n" + (ageInMinutes) + " minutes où \n" + (ageInSeconds) + " secondes!");
    }


    document.getElementById("run").addEventListener("click", () => {
        var dobDay = document.getElementById("dob-day").value;
        var dobMonth = document.getElementById("dob-month").value;
        var dobYear = document.getElementById("dob-year").value;
        alert(getAge(dobMonth, dobDay, dobYear));
    });

})();