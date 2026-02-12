package Multithreading;

public class BasicMultithreading {

    public static void main(String[] args) {

        ExtendThread thread1 = new ExtendThread();
        ImplementRunnable thread2 = new ImplementRunnable();
        Thread T1 = new Thread(thread2);

        thread1.start();
        T1.start();
        for(int i = 0 ; i < 10 ; i++){
            System.out.println("Main thread -> " + Thread.currentThread().getName());
        }
        
    }
}
