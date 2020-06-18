/**
 * Checks user age for majority
 * @param {Number} age - user age
 * @returns {boolean}
 */
function isAdult(age) {
    return age >= 18
}

/**
 * Checks the multiplicity of the first number to the second
 * @param {Number} m
 * @param {Number} n
 * @returns {boolean}
 */
function checkMultiplicity(m, n) {
    return m % n === 0
}

/**
 * Checks the possibility of creating a triangle
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {boolean}
 */
function triangleCheck(a, b, c) {
    return (a + b) > c && (a + c) > b && (b + c) > a
}