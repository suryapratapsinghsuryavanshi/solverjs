// matrix oparetions
// util for Addition/subtraction.
let matUtil = (mat1, mat2, opr) => {
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
let matAdd = (mat1, mat2) => matUtil(mat1, mat2, '+');

// Subtraction => if the matrix are same dimention it posible to subtract them.
let matSub = (mat1, mat2) => matUtil(mat1, mat2, '-');

// spiral print.
let matSpiralPrint = (mat1) => {
    let T = 0;
    let B = mat1.length - 1;
    let L = 0;
    let R = mat1[0].length - 1;
    let dir = 0;
    let str = new Array();

    while(T <= B && L <= R){
        if(dir == 0){
            for(let i=L; i<=R;i++){
                str.push(mat1[T][i]);
            }
            T++;
        }
        else if(dir == 1){
            for(let i=T;i<=B;i++){
                str.push(mat1[i][R]);
            }
            R--;
        }
        else if(dir == 2){
            for(let i=R;i>=L;i--){
                str.push(mat1[B][i]);
            }
            B--;
        }
        else if(dir == 3){
            for(let i=B;i>=T;i--){
                str.push(mat1[i][L]);
            }
            L++;
        }
        dir = (dir + 1) % 4;
    }

    return str;
}

// transpose of matrics
let matTrans = (mat) => {
    // make another smae dimention matrix
    let resultMat = new Array();
    
    for(let j = 0; j < mat[0].length; j++){
        // create a row for new transpose matrix.
        let row = new Array();
        for(let i = 0; i < mat.length; i++){
            // push the column value into row.
            row.push(mat[i][j]);
        }
        // push the row value for the result matrix.
        resultMat.push(row);
    }
    // return result matrix.
    return resultMat;
}


module.exports = {
    matAdd,
    matSub,
    matSpiralPrint,
    matTrans
}