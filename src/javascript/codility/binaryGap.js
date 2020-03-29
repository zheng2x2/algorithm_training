(function solution (N) {

    let bin = [];
    let temp = N;

    while (temp > 0) {
        bin.push(temp%2);
        temp = parseInt(temp/2);
    }
    console.log(`${bin}`)

    // sort는 중요하지 않다. gap 이 중요 ..
    // const reverse = bin.reverse()
    // console.log("reverse :::: "+reverse)

    console.log("indexOf :::: "+bin.indexOf(1))
    console.log("lastIndexOf :::: "+bin.lastIndexOf(1))
    let result = 0;

    // for(let i=bin.indexOf(1); i<bin.lastIndexOf(1); i++) {
    //     if(bin[i]===1){
    //         result=0;
    //     }else{
    //         result++;
    //     } //아니미친 이건 그냥 마지막 result 반환했던것.
    // }

    for(let i=bin.indexOf(1); i<bin.lastIndexOf(1); i++) {
        if(bin[i]===0){
            result++
        }
    }

    console.log(`result :::::>> ${result}`) 
})(328);


console.log("============================================================");



(function solution (N) {

    const bin = N.toString(2); 
    let result=0, temp=0;

    for(let i=0; i<=bin.lastIndexOf(1); i++) {
        
        if(bin[i]==='0'){
            temp++;
        }else{
            if(result<temp) result=temp;
            temp=0;
        }
        console.log(`temp :: ${temp}`)
    }
    console.log(`result :::::>> ${result}`) 
})(328);




console.log("============================================================");



(function solution(N) {
	const bin = N.toString(2); console.log(`${N} >> ${bin}`)
    const trimmed = bin.substr(bin.indexOf('1'), bin.lastIndexOf('1')+1 );
    console.log(`trimmed >>> ${trimmed}`)
    console.log(trimmed.split('1').map(item => item.length))
	console.log(`${ Math.max(...(trimmed.split('1').map(item => item.length))) }`)
})(328);



// console.log("============================================================");

// (function solution(N) {
// 	const bin = N.toString(2); console.log(`${N} >> ${bin}`)
//     const trimmed = bin.substr(bin.indexOf('1'), bin.lastIndexOf('1')+1 );
//     console.log(`trimmed >>> ${trimmed}`)
//     console.log(trimmed.split('1').map(item => item.length))
//     let result = trimmed.split('1').map(item => item.length)
// 	console.log(Math.max(result))
// })(32);

// 15 >> 1111
// trimmed >>> 1111
// [ 0, 0, 0, 0, 0 ]
// NaN

// 1041 >> 10000010001
// trimmed >>> 10000010001
// [ 0, 5, 3, 0 ]
// NaN

// 32 >> 100000
// trimmed >>> 1
// [ 0, 0 ]
// NaN
