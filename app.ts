function enableClickHighlight() {
  const legend = document.querySelector("#legend");
  if (legend == null) {
    throw new Error("Could not find legend element");
  }

  let colorboxes = legend.querySelectorAll(".colorbox");
  let fulldescs = legend.querySelectorAll(".full");
  let abbvdescs = legend.querySelectorAll(".abbv");

  [colorboxes, fulldescs, abbvdescs].forEach((list) =>
    list.forEach((v, i) => {
      v.addEventListener("mouseenter", () => addHighlight(".concept" + i));
      v.addEventListener("mouseleave", () => removeHighlight(".concept" + i));
    })
  );

  colorboxes.forEach((v, i) =>
    v.addEventListener("click", () => toggleHighlight(".concept" + i))
  );

  [colorboxes, fulldescs, abbvdescs].forEach((list) =>
    list.forEach((v, i) => ".concept" + i)
  );
}

const COLORED = "colored";
const HOLDCOLOR = "holdcolor";

function __highlight(concept: string, f: (e: Element) => any) {
  document.querySelectorAll(concept).forEach(f);
}

function toggleHighlight(concept: string) {
  __highlight("*:not(.colorbox)" + concept, (e) =>
    e.classList.toggle(HOLDCOLOR)
  );
}

function addHighlight(concept: string) {
  __highlight(concept, (e) => e.classList.add(COLORED));
}

function removeHighlight(concept: string) {
  __highlight(concept, (e) => e.classList.remove(COLORED));
}

enableClickHighlight();
console.log("hello");
