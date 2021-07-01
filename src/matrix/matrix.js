// matrix oparetions
// util for Addition/subtraction.
const matUtil = (mat1, mat2, opr) => {
    // make another smae dimention matrix
    let resultMat = new Array();
    // check the both matrix are same dimention or not.
    if(mat1.length != mat2.length || mat1[0].length != mat2[0].length) 
        return 'Matrix not same dimention.';
    for(let i = 0; i < mat1.length; i++){
        // create a row for every new row.
        let row = new Array();
        for(let j = 0; j < mat2[0].length; j++){
            // push the column vlaue from it.
            if(opr == '+'){
                row.push(mat1[i][j] + mat2[i][j]);
            }else if(opr == '-'){
                row.push(mat1[i][j] - mat2[i][j]);
            }
        }
        // push the row value for the result matrix.
        resultMat.push(row);
    }
    // return result matrix.
    return resultMat;
}

// Aditon => if the matrix are same dimention it posible to add them.
const matAdd = (mat1, mat2) => matUtil(mat1, mat2, '+');

// Subtraction => if the matrix are same dimention it posible to subtract them.
const matSub = (mat1, mat2) => matUtil(mat1, mat2, '-');


module.exports = {
    matAdd,
    matSub
}