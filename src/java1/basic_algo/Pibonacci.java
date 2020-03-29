package java1.basic_algo;

/**
 * 피보나치 수열을 출력해라
 * An = An-1 + An-2
 * 1 1 2 3 5 8 13 21 34 55
 */
public class Pibonacci {

    public static void main(String[] args){

        System.out.println(solution1(15));
        System.out.println("================");
        System.out.println(solution2(15));

    }
    
    public static String solution1(int N){
        
        int ppNo = 1;
        int pNo = 1;
        String str=ppNo + " " + pNo;

        for(int i=2; i<N; i++ ){
            int no = ppNo+pNo;
            str = str + " " + no;
            ppNo=pNo;
            pNo=no;
        }
        return str;
    }

    public static String solution2(int N){
        String str="";
        int[] numsArr = new int[50];
        numsArr[0]=1;
        numsArr[1]=1;

        for(int i=2; i<50; i++){
            numsArr[i] = numsArr[i-1] + numsArr[i-2];
        }

        for(int i=0; i<15; i++){
            str = str + " " + numsArr[i];
        }
        return str;
    }
}