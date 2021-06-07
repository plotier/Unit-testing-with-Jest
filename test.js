const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function () {
    // importo la funcion desde app.js
    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5);
    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2;
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(expected);
});
test("", function () {
    const yen = fromDollarToYen(4.2)
    const expected = 4.2 * 127.9;
    expect(fromDollarToYen(4.2)).toBe(expected);
});
test("", function () {
    const pound = fromYenToPound(2.8)
    const expected = 2.8 * 0.8;
    expect(fromYenToPound(2.8)).toBe(expected);
});