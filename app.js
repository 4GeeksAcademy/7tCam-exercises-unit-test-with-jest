// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
// Convertimos el valor a dólares
let valueInDollar = valueInEuro * 1.07;
// Retornamos el valor en dólares
return parseFloat(valueInDollar.toFixed(2));
}
// de dolar a yen
const fromDollarToYen = function(valueInDolar) {
let valueInYen = (valueInDolar/1.07)*156.5;
return parseFloat(valueInYen.toFixed(2));
}
const fromYenToPound = function(valueInYen) {
let valueInPound = (valueInYen/156.5)*0.87;
return parseFloat(valueInPound.toFixed(2));
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// exporta algo declarado arriba
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};


