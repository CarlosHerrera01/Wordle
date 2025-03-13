const palabras = [
    "ANTISEPTIC",
    "ABORTION",
    "ANAESTHETIC",
    "BLOOD TYPE",
    "THERMOMETER",
    "CRUTCH",
    "HEALING",
    "HOSPITALIZATION",
    "INFORMED CONSENT",
    "INJECTION",
    "PLACEBO",
    "REMEDY",
    "SPECIMEN",
    "NOSE JOB",
    "PHYSICIAN",
    "CAREGIVER",
    "TO ADMINISTER",
    "TO CLEANSE",
    "TO DIAGNOSE",
    "TO VACCINATE",
    "TO ADMIT",
    "TO DISCHARGE",
    "TO IMMUNIZE",
    "TO STITCH",
    "TO REVIVE",
    "TO SOOTHE",
    "DUMB",
    "PHARMACEUTICAL",
    "DEAF",
    "HYGIENE",
    "TO GLOW",
    "BLUES",
    "SIGHTED",
    "RESTRICT",
    "TERMINALLY ILL",
    "HOSPITAL WARD",
    "INJURE"
]; // Edita las palabras que desees
const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
document.documentElement.style.setProperty('--longitud-palabra', palabraSecreta.length);
let intentos = [];

document.addEventListener("DOMContentLoaded", () => {
    crearTablero();
});

function crearTablero() {
    const tablero = document.getElementById("tablero");
    for (let i = 0; i < (6*palabraSecreta.length); i++) { // 6 intentos de 5 letras
        let celda = document.createElement("div");
        celda.classList.add("celda");
        tablero.appendChild(celda);
    }
}

function comprobarPalabra() {
    let entrada = document.getElementById("entrada").value.toUpperCase();
    if (entrada.length !== palabraSecreta.length) {
        document.getElementById("mensaje").textContent = "La palabra debe tener "+palabraSecreta.length+" letras.";
        return;
    }

    intentos.push(entrada);
    actualizarTablero(entrada);

    if (entrada === palabraSecreta) {
        document.getElementById("mensaje").textContent = "¡Ganaste! La palabra era " + palabraSecreta;
        document.getElementById("entrada").disabled = true;
    } else if (intentos.length >= 6) {
        document.getElementById("mensaje").textContent = "¡Perdiste! La palabra era " + palabraSecreta;
        document.getElementById("entrada").disabled = true;
    }
}

function actualizarTablero(palabra) {
    const tablero = document.getElementById("tablero");
    let offset = (intentos.length - 1) * palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        let celda = tablero.children[offset + i];
        celda.textContent = palabra[i];

        if (palabra[i] === palabraSecreta[i]) {
            celda.classList.add("correcta");
        } else if (palabraSecreta.includes(palabra[i])) {
            celda.classList.add("presente");
        } else {
            celda.classList.add("incorrecta");
        }
    }
}
