function solution(X, A){
    const set = new Set();
    for(let i=1; i<=X; i++) {
        set.add(i);
    }

    for(let s=0; s<A.length; s++) {
        set.delete(A[s])
        if(set.size===0) return s;
    }
    return -1;
}

console.log(solution(4, [1, 2, 3, 2, 3, 3, 1, 2, 2, 4, 2, 1]))


// function solution(X, A){
//     let target;
//     if(X%2===0){ //even
//         target = (X+1)*(X/2)
//     }else{ //odd
//         target = X*((X-1)/2) + X
//     }
    
//     const leaves = [];
//     for(let i=0; i<A.length; i++){
//         let pos = A[i];

//     }
//     return -1;
// }

// function solution(X, A){
//     const set = new Set();
//     for(let i=1; i<=X; i++) {
//         set.add(i);
//     }
//     const set2 = new Set();
//     for(let s=0; s<A.length; s++) {
//         set2.add(A[s])
//         console.log(set2)
//         console.log(set2.has(set))
//         if(set2.has(set)) return s;
//     }
//     return -1;
// }

