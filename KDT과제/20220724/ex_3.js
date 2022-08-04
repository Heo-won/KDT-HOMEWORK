

//********나누어 떨어지는 숫자 배열


// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, 
// solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.


function solution(arr, divisor) {

    
    var answer = [];
    return answer;
}

// 1. divisor 값으로 나눴을 때 나머지가 0이 나오는 값을 산출하기.
// 2. 나머지가 0이 나오는 수가 없다면 -1을 산출하기
// 3. 값들을 오름차순으로 정렬하기

1) arr 배열 길이만큼 회전하면서 divisor와 나눈 나머지가 0인 값을 answer 배열에 push 한다.

2) answer 배열 길이가 0이면 나누어 떨어지는 값이 없다는 의미이므로 -1을 push 한다.

3) 오름 차순 정렬을 위한 처리를 한다.



function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;
}

function solution(arr, divisor) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if( arr[i] % divisor === 0) answer.push(arr[i]);
    }
    if(answer.length === 0) answer.push(-1);
    answer.sort((a, b) => (a-b));
    return answer;