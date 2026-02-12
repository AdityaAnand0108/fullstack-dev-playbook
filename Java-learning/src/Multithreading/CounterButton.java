package Multithreading;

public class CounterButton {

    private int count = 0;

    public void increment(){
        synchronized (this){
            count = count + 1 ;
        }

    }

    public int getCount(){
        return count;
    }
}
