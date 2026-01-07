package JavaBasics;

public class StringDemo {

    public static void main(String[] args) {
        String str = "Hello World";
        str.concat("Aditya");
        StringBuffer str1 = new StringBuffer("Hello World");
        str1.append("Aditya");
        System.out.println(str);
        System.out.println(str1);
    }

}
