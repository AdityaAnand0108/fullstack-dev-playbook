package JavaBasics;

public class MethodsDemo {

    // Abstract Method Example: classA defines the contract (abstract method) that
    // classB must implement.

    abstract class classA {
        abstract void methodA();
    }

    class classB extends classA {
        @Override
        void methodA() {
            System.out.println("Class B called abstract method of A");
        }
    }

    // Static Method Example: This method belongs to the class and can be called
    // without an instance.
    static void methodB() {
        System.out.println("methodB called static");
    }

    public static void main(String[] args) {
        MethodsDemo md = new MethodsDemo();

        md.new classB().methodA();

        // Predefined Method Example: Using Java's built-in Math library.
        System.out.println(Math.floor(Math.random()));

        MethodsDemo.methodB();
    }
}
