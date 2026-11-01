let a = 0;
let b = 0;

const typeSelect = document.getElementById("gate-type");
const buttonA = document.getElementById("in-a");
const buttonB = document.getElementById("in-b");
const output = document.getElementById("gate-out");

function calculate() {
  if (typeSelect.value === "AND") return a & b;
  if (typeSelect.value === "OR") return a | b;
  return a ^ b;
}

function update() {
  buttonA.textContent = "A = " + a;
  buttonB.textContent = "B = " + b;
  let result = calculate();
  output.textContent = "Output = " + result;
  output.classList.toggle("on", result === 1);
}

buttonA.onclick = function () {
  a = a === 0 ? 1 : 0;
  update();
};

buttonB.onclick = function () {
  b = b === 0 ? 1 : 0;
  update();
};

typeSelect.onchange = update;

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

sections.forEach(function (section) {
  section.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 },
);

sections.forEach(function (section) {
  revealObserver.observe(section);
});

const navObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id,
          );
        });
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach(function (section) {
  navObserver.observe(section);
});
