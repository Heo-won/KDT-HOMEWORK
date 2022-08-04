

//****없는 숫자 더하기 


// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.


function solution(numbers) {
    // 45-있는 숫자의 합
  
    // 모든 수들의 합
    let total = 45;
    // 있는 수들의 합
    let sum = 0;
    
    // 배열은 0부터 시작하고 배열의 길이가 n이라면 배열은 n-1번째까지 있다.
    for (let i = 0; i < numbers.length; i++) {
      // console.log(numbers[i]);
      sum += numbers[i];
      // sum=sum+numbers[i];
    }
  
    return total - sum;
  }


  1. 0-9까지의 숫자가 있는지 확인하기 (배열함수 includes)
  2. 포함되지 않은 숫자 더하기


  **숫자를 산출해 내는 것이 아니라 합만 찾는거면?
  45 - 주어진 배열의 합 = 찾을 수 없는 0-9까지의 숫자의 합