
/**
 * 제한사항
 * record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
 * 다음은 record에 담기 문자열에 대한 설명이다.
 *  - 모든 유저는 [유저 아이디]로 구분한다.
 *  - [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장- "Enter [유저아이디][닉네임]"
 *      ex. "Change uid1234 Muzi"
 *  - 첫 단어는 Enter, Leave, Change 중 하나이다.
 *  - 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어진다.
 *  - 유저아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
 *  - 유저아이디와 닉네임의 길이는 1 이상 10 이하이다.
 *  - 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.
 */

const user_list = {};

const solution = (record) => {
    const answer = [];
    
    for (let i in record){
        let words = record[i].split(' ');
        if(words[0]==='Enter' || words[0]==='Change') {
            user_list[words[1]] = words[2];
        }
    }

    //console.log(user_list);

    for (let i in record){
        
        let words = record[i].split(' ');
        if(words[0]==='Enter'){
            answer.push(`${user_list[words[1]]}님이 들어왔습니다~`);
        }else if(words[0]==='Leave'){
            answer.push(`${user_list[words[1]]}님이 나갔습니다~`);
            //delete user_list[words[1]];
        }
    }

    console.log("현재 대화에 참여중인 멤버 >>> ", user_list);
    return console.log(answer);
}


solution(
    [
        "Enter uid1234 Muzi", 
        "Enter uid4567 Prodo", 
        "Leave uid1234", 
        "Enter uid1234 Prodo", 
        "Change uid4567 Ryan"
    ]
);
