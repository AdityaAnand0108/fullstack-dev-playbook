public class Variables {

    String firstName= "Aditya  "; // Instance Variable - Each object of the class has its own copy.

    static String middleName = "Anand" ;  // Static variable - Shared by all objects of the class.

    final String lastName = "Mishra"; // Final Variable - Value cannot be changed once assigned.

    public void displayName(){
        //Local variable - Accessible only within that block.
        System.out.println("First Name : "+firstName);
        System.out.println("Middle Name : "+middleName);
        firstName="Joe";
        System.out.println("Last Name : "+lastName);
        middleName = "Doe";
    }
    public void displayName2(){
        System.out.println("First Name : "+firstName);
        System.out.println("Middle Name : "+middleName);
        System.out.println("Last Name : "+lastName);
    }

    public static void main(String[] args) {
        Variables obj = new Variables();
        Variables obj2 = new Variables();
        obj.displayName();
        obj2.displayName2();
    }
}
