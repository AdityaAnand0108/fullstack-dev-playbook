package Multithreading;

public class MyThread extends Thread{

    private CounterButton count;

    public MyThread(CounterButton count) {
        this.count = count;
    }

    @Override
    public void run(){
        for(int i=0;i<1000;i++){
            count.increment();
        }

    }
}
