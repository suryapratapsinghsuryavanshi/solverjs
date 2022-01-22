/**
 * Addition of two matrix is the result of adding the corresponding elements of two matrices.
 * @param {Number[][]} mat1 A first matrix for addition.
 * @param {Number[][]} mat2 A second matrix for addition.
 * @returns {Number[][]} Addition of the matrix.
 * @example matAdd([[1,2,3],[4,5,6]],[[1,2,3],[4,5,6]]) => [[2,4,6],[8,10,12]]
 */
export function matAdd(mat1: number[][], mat2: number[][]): number[][];


 /**
  * Subtraction of two matrix is the result of subtracting the corresponding elements of two matrices.
  * @param {Number[][]} mat1 A first matrix for subtraction.
  * @param {Number[][]} mat2 A second matrix for subtraction.
  * @returns {Number[][]} Subtraction of the matrix.
  * @example matSub([[1,2,3],[4,5,6]],[[1,2,3],[4,5,6]]) => [[0,0,0],[0,0,0]]
  */
export function matSub(mat1: number[][], mat2: number[][]): number[][];


 /**
  * The spiral print of a matrix is the order in which the elements are printed in a square matrix in a spiral order.
  * @param {Number[][]} mat1 A matrix for spiral print.
  * @returns {String} Spiral print of the matrix.
  * @example matSpiralPrint([[1,2,3],[4,5,6],[7,8,9]]) => "1 2 3 6 9 8 7 4 5"
  */
export function matSpiralPrint(mat1: number[][]): string;


 /**
  * The transpose of a matrix is the matrix that results from exchanging the rows and columns of the original matrix.
  * @param {Number[][]} mat A matrix for transpose.
  * @returns {Number[][]} Transpose of the matrix.
  * @example matTrans([[1,2,3],[4,5,6]]) => [[1,4],[2,5],[3,6]]
  */
export function matTrans(mat: number[][]): number[][];
