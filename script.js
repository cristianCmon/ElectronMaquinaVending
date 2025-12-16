// DISPLAY
const displaySuperior = document.getElementById('displaySuperior');
const displayMedio = document.getElementById('displayMedio');
const displayInferior = document.getElementById('displayInferior');

// PANEL NUMÉRICO
const numero_0 = document.getElementById('panelNumero_0');
const numero_1 = document.getElementById('panelNumero_1');
const numero_2 = document.getElementById('panelNumero_2');
const numero_3 = document.getElementById('panelNumero_3');
const numero_4 = document.getElementById('panelNumero_4');
const numero_5 = document.getElementById('panelNumero_5');
const numero_6 = document.getElementById('panelNumero_6');
const numero_7 = document.getElementById('panelNumero_7');
const numero_8 = document.getElementById('panelNumero_8');
const numero_9 = document.getElementById('panelNumero_9');
const devolverCambio = document.getElementById('devolverCambio');
const modoAdmin = document.getElementById('modoAdmin');

// EFECTIVO
let efectivo = 0;
let arrayEfectivo = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const moneda_5 = document.getElementById('moneda_5');
const moneda_10 = document.getElementById('moneda_10');
const moneda_20 = document.getElementById('moneda_20');
const moneda_50 = document.getElementById('moneda_50');
const moneda_1 = document.getElementById('moneda_1');
const moneda_2 = document.getElementById('moneda_2');
const billete_5 = document.getElementById('billete_5');
const billete_10 = document.getElementById('billete_10');
const billete_20 = document.getElementById('billete_20');

// FUNCIONES CLIC PANEL NUMÉRICO
numero_0.addEventListener('click', function() {
    displaySuperior.textContent += numero_0.textContent;
});

numero_1.addEventListener('click', function() {
    displaySuperior.textContent += numero_1.textContent;
});

numero_2.addEventListener('click', function() {
    displaySuperior.textContent += numero_2.textContent;
});

numero_3.addEventListener('click', function() {
    displaySuperior.textContent += numero_3.textContent;
});

numero_4.addEventListener('click', function() {
    displaySuperior.textContent += numero_4.textContent;
});

numero_5.addEventListener('click', function() {
    displaySuperior.textContent += numero_5.textContent;
});

numero_6.addEventListener('click', function() {
    displaySuperior.textContent += numero_6.textContent;
});

numero_7.addEventListener('click', function() {
    displaySuperior.textContent += numero_7.textContent;
});

numero_8.addEventListener('click', function() {
    displaySuperior.textContent += numero_8.textContent;
});

numero_9.addEventListener('click', function() {
    displaySuperior.textContent += numero_9.textContent;
});

devolverCambio.addEventListener('click', function() {
    // TODO IMPLEMENTAR CORRECTAMENTE
    efectivo = 0;
    arrayEfectivo.fill(0); // reinicia a 0 todas las posiciones
    displaySuperior.textContent = '';
    displayMedio.textContent = '';
});

modoAdmin.addEventListener('click', function() {
    // TODO IMPLEMENTAR CORRECTAMENTE
    alert('COMPROBADOR TEMPORAL\n\n' + 'FormatoMoneda: ' + conversionEuro(efectivo) + '\nFormatoNumérico: ' + efectivo.toFixed(2) + '\nMonedas: ' + arrayEfectivo);
    // efectivo = 0;
    // display.textContent = '';
});


// FUNCIONES CLIC EFECTIVO
moneda_5.addEventListener('click', function() {
    efectivo += 0.05;
    arrayEfectivo[0]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

moneda_10.addEventListener('click', function() {
    efectivo += 0.10;
    arrayEfectivo[1]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

moneda_20.addEventListener('click', function() {
    efectivo += 0.20;
    arrayEfectivo[2]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

moneda_50.addEventListener('click', function() {
    efectivo += 0.50;
    arrayEfectivo[3]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

moneda_1.addEventListener('click', function() {
    efectivo += 1;
    arrayEfectivo[4]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

moneda_2.addEventListener('click', function() {
    efectivo += 2;
    arrayEfectivo[5]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

billete_5.addEventListener('click', function() {
    efectivo += 5;
    arrayEfectivo[6]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

billete_10.addEventListener('click', function() {
    efectivo += 10;
    arrayEfectivo[7]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

billete_20.addEventListener('click', function() {
    efectivo += 20;
    arrayEfectivo[8]++;
    displayMedio.textContent = conversionEuro(efectivo);
});

// FORMATEA CANTIDAD NUMÉRICA A DECIMALES EXACTOS PRECISIÓN EURO
function conversionEuro(cantidad) {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(cantidad);
}