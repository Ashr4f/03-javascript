/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function makeTable(rows, columns) {
        var target = document.getElementById("target");
        var tables = document.querySelectorAll("#target table");

        var table;
        var td;
        var tr;

        table = document.createElement("table");
        target.appendChild(table);

        for (let i = 0; i < rows; i++) {
            tr = document.createElement("tr");
            for (let j = 0; j < columns; j++) {
                td = document.createElement("td");
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }


    var newTable = makeTable(10, 1);

    console.log(newTable);

})();