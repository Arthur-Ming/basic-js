import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const result = []
  for (let i = 0; i < matrix.length; i++) {
    const subres = []

    for (let x = 0; x < matrix[i].length; x++) {
      let sum = 0
      if (i === 0 && x === 0) {
        if (matrix[i + 1][x] === true) sum++
        if (matrix[i + 1][x + 1] === true) sum++
        if (matrix[i][x + 1] === true) sum++
      }
      if (i === 0 && x !== 0) {
        if (matrix[i + 1][x - 1] === true) sum++
        if (matrix[i + 1][x + 1] === true) sum++
        if (matrix[i + 1][x] === true) sum++
        if (matrix[i][x + 1] === true) sum++
        if (matrix[i][x - 1] === true) sum++
      }
      if (i !== 0 && x === 0 && i !== matrix.length - 1) {
        if (matrix[i + 1][x] === true) sum++
        if (matrix[i - 1][x] === true) sum++
        if (matrix[i + 1][x + 1] === true) sum++
        if (matrix[i - 1][x + 1] === true) sum++
        if (matrix[i][x + 1] === true) sum++
      }
      if (i !== 0 && x !== 0 && i !== matrix.length - 1) {
        if (matrix[i + 1][x] === true) sum++
        if (matrix[i - 1][x] === true) sum++
        if (matrix[i + 1][x + 1] === true) sum++
        if (matrix[i - 1][x + 1] === true) sum++
        if (matrix[i + 1][x - 1] === true) sum++
        if (matrix[i - 1][x - 1] === true) sum++
        if (matrix[i][x + 1] === true) sum++
        if (matrix[i][x + 1] === true) sum++
      }
      if (i !== 0 && x === matrix[i].length - 1 && i !== matrix.length - 1) {
        if (matrix[i + 1][x] === true) sum++
        if (matrix[i - 1][x] === true) sum++
        if (matrix[i][x - 1] === true) sum++
        if (matrix[i - 1][x - 1] === true) sum++
        if (matrix[i + 1][x - 1] === true) sum++
      }
      if (i === matrix.length - 1 && x === 0) {
        if (matrix[i - 1][x] === true) sum++
        if (matrix[i - 1][x + 1] === true) sum++
        if (matrix[i][x + 1] === true) sum++
      }
      if (i === matrix.length - 1 && x !== 0) {
        if (matrix[i - 1][x] === true) sum++
        if (matrix[i - 1][x + 1] === true) sum++
        if (matrix[i - 1][x - 1] === true) sum++
        if (matrix[i][x + 1] === true) sum++
        if (matrix[i][x - 1] === true) sum++
      }
      subres.push(sum)
    }
    result.push(subres)
  }
  return result
}
