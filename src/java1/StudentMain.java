package java1;

import java.util.ArrayList;
import java.util.Scanner;


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

        Scanner scan = new Scanner(System.in);
        
        while( true ) {

            System.out.println("검색을 계속 하려면 y, 종료하려면 n");
            String input = scan.next();

            if (input.equalsIgnoreCase("y")) {
                System.out.println("검색을 시작합니다.");
            }else if (input.equals("n")) {
                break;
            }else {
                System.out.println("y 또는 n을 입력하세요.");
            }
        }

        System.out.println("프로그램을 종료합니다.");
    }
}