
//******자릿수 더하기 


// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

function solution(n)
{
    let answer = 0;
    // 주어진 N(123)을 자릿수마다 나누기
    
    // 반복문을 탈출하려면
    // 1. N을 10으로 나눴을 때 몫이 0이어야 함.
    // 그리고
    // 2. N을 10으로 나눴을 때 나머지가 0이어야 함.
    
    // 반복문을 탈출하지 않으려면
    // 1. N을 10으로 나눴을 때 몫이 0이 아니어야 함.
    // 또는
    // 2. N을 10으로 나눴을 때 나머지가 0이 아니어야 함.
    while ((n / 10) != 0 || (n % 10) != 0) {
        // N(123)을 10으로 나누면 몫은 12
        let num = parseInt(n / 10);
        
        // 나머지는 3
        let other = n % 10;
        
        // 3을 추출
        answer += other;
        
        // N에 몫을 대입
        n = num;
    }
    
    return answer;
}
