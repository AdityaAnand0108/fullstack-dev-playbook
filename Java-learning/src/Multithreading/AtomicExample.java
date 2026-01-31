package Multithreading;
import java.util.concurrent.atomic.AtomicInteger;

class Counter {
    // SCENARIO 1: VOLATILE
    // It looks safe, but it's not thread-safe for incrementing.
    volatile int volatileCount = 0;

    // SCENARIO 2: ATOMIC
    // This class is designed specifically for this problem.
    AtomicInteger atomicCount = new AtomicInteger(0);

    public void increment() {
        // This is unsafe.
        // Thread A reads, Thread B reads, they overwrite each other.
        volatileCount++;

        // This is safe.
        // It acts like a mini-synchronized block, but much faster.
        atomicCount.incrementAndGet();
    }
}

public class AtomicExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        // Create 2 threads
        Thread t1 = new Thread(() -> {
            for(int i=0; i<1000; i++) counter.increment();
        });

        Thread t2 = new Thread(() -> {
            for(int i=0; i<1000; i++) counter.increment();
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Expected Count: 2000");
        System.out.println("Volatile Count: " + counter.volatileCount + " (Wrong!)");
        System.out.println("Atomic Count:   " + counter.atomicCount + " (Correct!)");
    }
}
