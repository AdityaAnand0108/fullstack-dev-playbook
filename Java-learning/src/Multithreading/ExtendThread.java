package Multithreading;

public class ExtendThread extends Thread {
    @Override
    public void run(){
        for(int i=0;i<10;i++){
            System.out.println("Extend Thread -> " + Thread.currentThread().getName());
        }

    }
}
