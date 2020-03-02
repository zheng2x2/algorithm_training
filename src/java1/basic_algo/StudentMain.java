package java1.basic_algo;

import java.util.ArrayList;
import java.util.Scanner;

/**
 * 알고리즘기초 100제
 * 1번 학생이름 저장
 * 
 * 학생정보들을 저장하고 학생이름으로 검색했을 때 학번을 출력하는 프로그램을 작성
 *  - Student 클래스 생성
 *  - String name, no 를 가짐 (이름과 학번)
 * 
 *  - 학생들을 ArrayList에 저장한 후
 *  - 계속 검색을 하겠느냐 y -> 반복
 *  - 종료하고 싶으면 n -> 프로그램 종료
 * 
 *  - 학생이름이 있는 경우 그 학생의 학번을 출력
 *  - 학생 이름이 없으면 없는 학생이라고 출력
 */
public class StudentMain {
    public static void main (String[] args) {

        Student st1 = new Student("손오공", "1682");
        Student st2 = new Student("저팔계", "1772");
        Student st3 = new Student("사오정", "1813");

        ArrayList<Student> list = new ArrayList<Student>();

        list.add(st1);
        list.add(st2);
        list.add(st3);

        for(Student st : list) {
            System.out.println(st.getName());
            System.out.println(st.getNo());
        }

        Scanner scan = new Scanner(System.in, "euc-kr");
        
        while( true ) {

            System.out.println("검색을 계속 하려면 y, 종료하려면 n");
            String input = scan.next();

            if (input.equals("y")) {
                System.out.println("검색을 시작합니다.");
                String name = scan.next();

                boolean flag = false;

                for(Student stu : list){
                    System.out.println("DEBUG >> " + stu.getName());
                    System.out.println("DEBUG2 >> " + name);
                    System.out.println(stu.getName().equals(name));
                    if(stu.getName().equals(name)){
                        System.out.println("해당 학생의 학번은 :: "+ stu.getNo()+"입니다.");
                        flag = true;
                    }
                }

                if (!flag){
                    System.out.println("해당 학생이 존재하지 않음.");
                }

            }else if (input.equals("n")) {
                break;
            }else {
                System.out.println("y 또는 n을 입력하세요.");
            }
        }
        scan.close();
        System.out.println("프로그램을 종료합니다.");
    }
}