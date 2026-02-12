package Multithreading;

public class ThreadFunction extends Thread {

    // RUN
    @Override
    public void run() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        for (int i = 0; i < 6; i++) {
            System.out.println(
                    Thread.currentThread().getName() +
                            " | Priority: " + Thread.currentThread().getPriority() +
                            " | i: " + i);

            //YIELD
            Thread.yield();

        }
    }

    public static void main(String[] args) throws InterruptedException {
        ThreadFunction l = new ThreadFunction();
        ThreadFunction m = new ThreadFunction();
        ThreadFunction h = new ThreadFunction();

        //SETNAME / SETPRIORITY
        l.setName("LOW");
        m.setName("MEDIUM");
        h.setName("HIGH");

        //SETDAEMON
        l.setDaemon(true);
        m.setDaemon(true);
        h.setDaemon(true);

        //START
        m.start();
        h.start();
        l.start();

        //INTERRUPT
        //m.interrupt();

        Thread.sleep(1006);

        System.out.println("it is over............");



    }
}
