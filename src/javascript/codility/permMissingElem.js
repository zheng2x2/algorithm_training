function solution(A) {
    
    const expect = (A.length+1) * (A.length+2) /2
    console.log(`supposed to be ... ${expect}`)

    let sumA = 0;
    A.map(n => sumA +=n)
    console.log(`but in fact ... ${sumA}`)

    // const realSum = A.reduce((a, b) => a + b, 0);

    return expect - sumA;

}

console.log(solution([1,2,3,4,5,7,8,9]))