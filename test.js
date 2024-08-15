// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
    test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar (3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    // const expected = (3.5 * 1.07);

    // Hago mi comparación (la prueba)
                     // el valor que toma la fuunc / el valor esperado
    expect(fromEuroToDollar(123123123123)).toBe(131741741741.61); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One Euro should be 156.5 Yen", function() { 
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');         

    //Uso la función como debe ser usada
    // const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    // const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3)).toBe(438.79); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("one Euro should be 0.87 pound", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');         

    //Uso la función como debe ser usada
    // const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    // const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(2)).toBe(0.01); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

