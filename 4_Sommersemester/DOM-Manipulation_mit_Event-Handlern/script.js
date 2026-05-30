// Aufgabe 1

let counter1 = 0;

function plus() {
    counter1++;
    document.getElementById("counter1").textContent = counter1;
}

function minus() {
    counter1--;
    document.getElementById("counter1").textContent = counter1;
}

function reset() {
    counter1 = 0;
    document.getElementById("counter1").textContent = counter1;
}

// Aufgabe 2

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = "rgb(" + r + ", " + g + ", " + b + ")";

    document.getElementById("rainbow").style.color = color;
    document.getElementById("rgb-info").textContent = color;
}

// Aufgabe 3

let counter2 = 0;
const display2 = document.getElementById("counter2");

document.getElementById("plus").addEventListener("click", function() {
    counter2++;
    display2.textContent = counter2;
});

document.getElementById("minus").addEventListener("click", function() {
    counter2--;
    display2.textContent = counter2;
});

document.getElementById("reset").addEventListener("click", function() {
    counter2 = 0;
    display2.textContent = counter2;
});