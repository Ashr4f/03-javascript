/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var target = document.getElementById("target");

    var table;
    var tr;
    var td;

    table = document.createElement("table");
    target.appendChild(table);

    for (let i = 0; i < 10; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < 10; j++) {
            td = document.createElement("td");
            // td.innerHTML = i + 1 + " * " + (j + 1) + " = " + (i + 1) * (j + 1);
            td.innerHTML = (i + 1) * (j + 1);

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

})();