/*
An array A consisting of N integers is given. A list is constructed from this array as follows:

        the first node (the head) is located at index 0;
        the value of a node located at index K is A[K];
        the successor of a node located at index K is located at index A[K];
        if the value of a node is −1 then it is the last node of the list.

For example, for array A such that:

    A[0] = 1  A[1] = 4  A[2] = -1
    A[3] = 3  A[4] = 2

the following list is constructed:

        the first node (the head) is located at index 0 and has a value of 1;
        the second node is located at index 1 and has a value of 4;
        the third node is located at index 4 and has a value of 2;
        the fourth node is located at index 2 and has a value of −1.

Write a function:

    int solution(int A[], int N); 

that, given a non-empty zero-indexed array A consisting of N integers, returns the length of the list constructed from A in the above manner.

Assume that:

        N is an integer within the range [1..200,000];
        each element of array A is an integer within the range [−1..200,000];
        it will always be possible to construct the list and its length will be finite.

For example, given array A such that:

    A[0] = 1  A[1] = 4  A[2] = -1
    A[3] = 3  A[4] = 2

the function should return 4, as explained in the example above.

Complexity:

        expected worst-case time complexity is O(N);
        expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

*/

function solution(A){
	var i = 0, len = A.length, lengthCount = 0;
	if(len > 0){
		while (i < len){
			if(A[i] !== -1){
				i = A[i];
				lengthCount++;
			}else{
				return lengthCount + 1;
			}
		}
	}
	return lengthCount;
}

var a = solution([1,4,5,3,-1]);

console.log(a);

