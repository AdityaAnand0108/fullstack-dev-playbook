package Multithreading;

public class ThreadLifeCycle extends Thread{

    @Override
    public void run(){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public static void main (String[] args) throws InterruptedException {
        ThreadLifeCycle T1 = new ThreadLifeCycle();
        System.out.println(T1.getState());
        T1.start();
        System.out.println(T1.getState());
        Thread.sleep(100);
        System.out.println(T1.getState());
        T1.join();
        System.out.println(T1.getState());


    }
}
