function enableClickHighlight() {
    var legend = document.querySelector("#legend");
    if (legend == null) {
        throw new Error("Could not find legend element");
    }
    var colorboxes = legend.querySelectorAll(".colorbox");
    var fulldescs = legend.querySelectorAll(".full");
    var abbvdescs = legend.querySelectorAll(".abbv");
    [colorboxes, fulldescs, abbvdescs].forEach(function (list) {
        return list.forEach(function (v, i) {
            v.addEventListener("mouseenter", function () { return addHighlight(".concept" + i); });
            v.addEventListener("mouseleave", function () { return removeHighlight(".concept" + i); });
        });
    });
    colorboxes.forEach(function (v, i) {
        return v.addEventListener("click", function () { return toggleHighlight(".concept" + i); });
    });
    [colorboxes, fulldescs, abbvdescs].forEach(function (list) {
        return list.forEach(function (v, i) { return ".concept" + i; });
    });
}
var COLORED = "colored";
var HOLDCOLOR = "holdcolor";
function __highlight(concept, f) {
    document.querySelectorAll(concept).forEach(f);
}
function toggleHighlight(concept) {
    __highlight("*:not(.colorbox)" + concept, function (e) {
        return e.classList.toggle(HOLDCOLOR);
    });
}
function addHighlight(concept) {
    __highlight(concept, function (e) { return e.classList.add(COLORED); });
}
function removeHighlight(concept) {
    __highlight(concept, function (e) { return e.classList.remove(COLORED); });
}
enableClickHighlight();
console.log("hello");
