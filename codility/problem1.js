/*
Largest possible result on combination of P,Q in A where A is array of Integers of Length N. 

such that A[P] + A[Q] + Q - P. 

A[0] = 0;
A[1] = 3;
A[2] = -3;

Combinations are (0,0) (1,1) (1,2) (2,0) (2,1) (2,2)

For 0,0 A[0] + A[0] + (0 - 0) = 0;
For 1,1 A[1] + A[1] + (1 - 1) = 3 + 3 + 0 = 6;
For 1,2 A[1] + A[2] + (2 - 1) = -3 + 3 + 1 = 0;
For 2,0 A[2] + A[0] + (0 - 2) = -3 + 0 - 2 = -5;
For 2,1 A[2] + A[1] + (1 - 2) = 3 + -3 - 1 = -1;
For 2,2 A[1] + A[2] + (2 - 2) = -3 + -3 + 0 = -6;

The result is 6. 

*/


function solution(A){
    var N = A.length;
    var i, j = N - 1;
    var result = 0, lastVal = 0;
    while (j >= 0){
        for (i = 0; i < N; i++){
            lastVal = A[i] + A[j] + (j - i);
            if(lastVal >= result) result = lastVal;
        }
        j--;
    }
    return result;
}