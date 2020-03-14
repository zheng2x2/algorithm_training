package java1.basic_algo;

/**
 * 최빈수 구하기
 * 가장 많이 출현한 수를 출력하시오
 * [1,2,2,3,1,4,2,2,4,3,5,3,2]
 */
public class Mode {

    public static void main(String[] args) {
        
        int[] inputNum = {1,2,2,3,1,4,2,2,4,3,5,3,2};
        int[] mode = new int[10];

        for(int i=0; i<10; i++){
            mode[inputNum[i]]++;
        }

        int modeNum = 0; //최빈수
        int modeCnt = 0; //출현횟수
        for (int i=0; i<10; i++) {
            if(modeCnt < mode[i]) {
                modeCnt = mode[i];
                modeNum = i;
            }
        }

        System.out.println("최빈수 :: " + modeNum);
        System.out.println("출현횟수 :: " + modeCnt);
    }
}