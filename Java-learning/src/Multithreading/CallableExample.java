package Multithreading;
import java.util.concurrent.*;

public class CallableExample {
    public static void main(String[] args) {

        // 1. Create the Manager
        ExecutorService executor = Executors.newFixedThreadPool(1);

        // 2. Define the Task (Callable)
        // Notice we say 'implements Callable<Integer>' because we want an Integer back.
        Callable<Integer> mathTask = () -> {
            System.out.println("Worker: I am starting the calculation...");
            Thread.sleep(3000); // Simulate a hard math problem taking 3 seconds
            return 10 + 20;     // WE RETURN A VALUE!
        };

        // 3. Submit the task
        // We get the 'Future' receipt immediately. The code does NOT stop here.
        System.out.println("Main: Submitting task...");
        Future<Integer> futureReceipt = executor.submit(mathTask);

        // 4. Main thread continues doing other things
        System.out.println("Main: I can do other stuff while the worker calculates.");

        // ... time passes ...

        // 5. Get the Result
        try {
            System.out.println("Main: Okay, I need the answer now.");

            // CRITICAL LINE: future.get()
            // If the worker is done, we get 30 immediately.
            // If the worker is still sleeping, Main STOPs here and waits (Blocks).
            Integer result = futureReceipt.get();

            System.out.println("Main: The answer is: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }

        executor.shutdown();
    }
}
