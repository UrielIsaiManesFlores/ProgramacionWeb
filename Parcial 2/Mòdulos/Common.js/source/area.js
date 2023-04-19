/**
 * Funcion para calcular el area de un cuadrado
 * @param {Number} lado Medida lado del cuadrado
 * @returns Number
 */

function areaCuadradado(lado){
    return lado*lado;
}

/**
 * Funcion para calcular el area de un triangulo
 * @param {Number} base Base del triangulo 
 * @param {Number} altura Altura del triangulo 
 * @returns Number
 */
function areaTriangulo(base, altura){
    return (base*altura)*2;
}

module.exports.areaCuadradado=areaCuadradado;
module.exports.areaTriangulo=areaTriangulo;
//console.log(module);