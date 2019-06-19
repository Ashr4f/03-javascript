/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var image = document.querySelector("img");
    var imageDataHover = image.getAttribute("data-hover");
    var imageSource = image.getAttribute("src");

    image.addEventListener("mouseover", function () {
        this.setAttribute("src", imageDataHover);
        this.style.marginLeft = "5px";
    });

    image.addEventListener("mouseleave", function () {
        this.setAttribute("src", imageSource);
        this.style.marginLeft = "0";
    });

})();