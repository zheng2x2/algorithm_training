/**
 * 2. 실패율
 * 전체 스테이지의 개수 N, 
 * 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 
 * 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 
 * 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
 * 제한사항
 * 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
 * stages의 길이는 1 이상 200,000 이하이다.
 * stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
 * 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호를 나타낸다.
 * 단, N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
 * 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
 * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
 * @param {*} N 
 * @param {*} stages 
 */

function solution(N, stages) { 
    //N=>전체스테이지수
    //stages=>사용자가 현재있는 스테이지no (1~500)의 배열[20만개 이하:사용자수]
    var answer = []; //실패율
    //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
    var temp = {};
    var userNo = stages.length; console.log("사용자수 :: ", userNo);
    var failure = 0;
    for(var i=1; i < N+1; i++) { //i는 스테이지
        
        var stageUsers = stages.filter(x => x===i).length;

        if( stageUsers === 0 ){
            failure = 0;
        }else{
            failure = stageUsers / userNo *100;
        }

        console.log(i + "번스테이지 실패율 >> "+failure + " %")
        temp[i] = failure;
    }
   
    console.log( temp);
    answer = sortLevels(temp);
    return console.log(answer);
}

function sortLevels(temp){
    return Object.keys(temp).sort(function(a,b){return temp[b]-temp[a]});
}


solution(
    5,
    [
        2, 1, 2, 6, 2, 4, 3, 3 //5번까지 클리어했으면 6, 즉 N+1
    ]
)