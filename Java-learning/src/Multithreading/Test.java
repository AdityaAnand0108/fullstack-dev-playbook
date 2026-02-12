package Multithreading;

public class Test {

    public static void main(String args[]) throws InterruptedException {
    CounterButton count = new CounterButton();

    MyThread T1 = new MyThread(count);
    MyThread T2 = new MyThread(count);

    T1.start();
    T2.start();

    T1.join();
    T2.join();

    System.out.println(count.getCount());
    }
}