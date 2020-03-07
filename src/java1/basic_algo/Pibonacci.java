package java1.basic_algo;

/**
 * 피보나치 수열을 출력해라
 * An = An-1 + An-2
 * 1 1 2 3 5 8 13 21 34 55
 */

public class Pibonacci {

    public static void main(String[] args){

        int[] numsArr = new int[50];
        numsArr[0]=1;
        numsArr[1]=1;

        for(int i=2; i<50; i++){
            numsArr[i] = numsArr[i-1] + numsArr[i-2];
        }

        for(int i=0; i<15; i++){
            System.out.print(numsArr[i] + " ");
        }

        System.out.println("\n==========================");

        int ppNo = 1;
        int pNo = 1;
        System.out.print(ppNo+" ");
        System.out.print(pNo+" ");

        for(int i=2; i<15; i++ ){
            int no = ppNo+pNo;
            System.out.print(no+" ");
            ppNo = pNo;
            pNo=no;
        }
    }

}