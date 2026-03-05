function addieren() {
    const m1 = document.getElementById("zahl1").valueAsNumber;
    const m2 = document.getElementById("zahl2").valueAsNumber;
    const out = document.querySelector("#ergebnis>strong");

    console.log(`Zahl 1: ${m1} + Zahl 2: ${m2} = ${m1 + m2}`);
}

function clearDisplay() {
  display.innerText = '0';
}