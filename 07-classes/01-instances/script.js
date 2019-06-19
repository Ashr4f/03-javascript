/* becode/javascript
 *
 * /07-classes/01-instances/script.js - 7.1: instances
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        var skitty = new Cat("Skitty", 9);
        var pixel = new Cat("Pixel", 6);

        console.log(skitty.name + ", " + skitty.age + " ans, et " + pixel.name + ", " + pixel.age + " ans");
    });

})();