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

/**
 * Calculates the area of ​​a triangle
 * @param {number} a - Side of the triangle
 * @param {number} b - Side of the triangle
 * @param {number} c - Side of the triangle
 * @returns {number} - Area of ​​a triangle
 */
function triangleArea(a, b, c) {
    const p = (a + b + c) / 2
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

/**
 * Calculates the area of ​​a rectangle
 * @param {number} a - Side of the rectangle
 * @param {number} b - Side of the rectangle
 * @returns {number} - Area of ​​a rectangle
 */
function rectangleArea(a, b) {
    return a * b
}

/**
 * Calculates the total cylinder surface area
 * @param {number} r - Base radius
 * @param {number} h - Cylinder height
 * @returns {number} - The total cylinder surface area
 */
function cylinderArea(r, h) {
    return 2 * Math.PI * r * (r + h);
}