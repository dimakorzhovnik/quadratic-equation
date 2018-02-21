module.exports = function solveEquation(equation) {
    let result = [];
    
    var temp = equation.replace(/\s/g, '').match(/[^\^]\d+|^\d+/g);

    let a = temp[0],
        b = temp[1],
        c = temp[2];
    
    let D = Math.sqrt(b * b - 4 * a * c);

    result[0]= Math.round(-b - D) / (2 * a);
    result[1]= Math.round(-b + D) / (2 * a);

    result.sort((left, right) => left - right);
    
    return result;
}
