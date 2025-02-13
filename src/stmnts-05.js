/*
 * stmnts-05.js
 * Language: JavaScript
 * Test: tests/stmnts-05.test.js
 * Path: src/stmnts-05.js
 *
 * Boolean Expressions for Numbers Assignment:
 * Implement functions that evaluate numeric conditions.
 * All functions require that inputs be integers before performing further tests.
 *
 * Note: Use Number.isInteger and the modulus (%) operator where needed.
 */

/**
 * Check if a value is an integer.
 * @param {*} value - Value to check.
 * @returns {boolean} - True if value is a number and an integer.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */
function isInteger(value) {
  // Implementation goes here.
  return Number.isInteger(value);
}

/**
 * Check if a number is odd.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is odd; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function isOdd(num) {
  // Implementation goes here.
  return Number.isInteger(num) && num % 2 !== 0;
}

/**
 * Check if a number is even.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is even; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function isEven(num) {
  // Implementation goes here.
  return Number.isInteger(num) && num % 2 === 0;
}

/**
 * Check if a number is negative.
 * @param {*} value - Value to check.
 * @returns {boolean} - True if value is an integer and is less than zero; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
 */
function isNegative(value) {
  // Implementation goes here.
  return Number.isInteger(value) && value < 0;
}

/**
 * Check if a number is positive.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is an integer greater than 0; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
 */
function isPositive(num) {
  // Implementation goes here.
  return Number.isInteger(num) && num > 0;
}

/**
 * Check if a number is zero.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is exactly 0; false otherwise.
 */
function isZero(num) {
  // Implementation goes here.
  return num === 0;
}

/**
 * Check if a number is non-negative.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is an integer and 0 or positive; false otherwise.
 */
function isNonNegative(num) {
  // Implementation goes here.
  return Number.isInteger(num) && num >= 0;
}

/**
 * Check if the first number is divisible by the second.
 * @param {number} a - Dividend.
 * @param {number} b - Divisor.
 * @returns {boolean} - True if both a and b are integers and a is divisible by b; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function isDivisibleBy(a, b) {
  // Implementation goes here.
  return Number.isInteger(a) && Number.isInteger(b) && a % b === 0;
}

/**
 * Check if a number is between two other numbers (inclusive).
 * @param {number} num - Number to check.
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 * @returns {boolean} - True if all inputs are integers and num is between min and max (inclusive); false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
 */
function isBetween(num, min, max) {
  // Implementation goes here.
  return Number.isInteger(num) && Number.isInteger(min) && Number.isInteger(max) && num >= min && num <= max;
}

/**
 * Check if a number is a perfect square.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is an integer, non-negative, and its square root is an integer; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 */
function isSquare(num) {
  // Implementation goes here.
  return Number.isInteger(num) && num >= 0 && Math.sqrt(num) % 1 === 0;
}

/**
 * Check if a number is a perfect cube.
 * @param {number} num - Number to check.
 * @returns {boolean} - True if num is an integer and its cube root is an integer; false otherwise.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
 */
function isCube(num) {
  // Implementation goes here.
  return Number.isInteger(num) && Math.cbrt(num) % 1 === 0;
}

// DO NOT EDIT THE FOLLOWING EXPORT STATEMENT.
// The test file depends on these exported function names.
module.exports = {
  isInteger,
  isOdd,
  isEven,
  isNegative,
  isPositive,
  isZero,
  isNonNegative,
  isDivisibleBy,
  isBetween,
  isSquare,
  isCube,
};
