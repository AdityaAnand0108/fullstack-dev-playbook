package Multithreading;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

// 1. THE SHARED RESOURCE (The Bank Account)
class BankAccount {
    private int balance = 0;

    // --- INTERMEDIATE CONCEPT: SYNCHRONIZATION ---
    // We use 'synchronized' so only one person can use the ATM at a time.
    // Without this, the balance would get corrupted (Race Condition).

    public synchronized void deposit(int amount) {
        System.out.println(Thread.currentThread().getName() + " is trying to deposit $" + amount);
        balance += amount;
        System.out.println("...Deposit Successful! New Balance: $" + balance);

        // --- ADVANCED CONCEPT: NOTIFICATION ---
        // "Hey! I put money in. If anyone was waiting for money, wake up!"
        notify();
    }

    public synchronized void withdraw(int amount) {
        System.out.println(Thread.currentThread().getName() + " wants to withdraw $" + amount);

        // --- ADVANCED CONCEPT: WAITING (Inter-thread Communication) ---
        // While we don't have enough money, we wait.
        // We use 'while' instead of 'if' to double-check after waking up.
        while (balance < amount) {
            System.out.println("Not enough money! " + Thread.currentThread().getName() + " is waiting...");
            try {
                wait(); // Releases the lock and sleeps until notified
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        // If we are here, the wait is over and balance is sufficient!
        balance -= amount;
        System.out.println("...Withdrawal Successful! Remaining Balance: $" + balance);
    }
}

// 2. THE WORKERS (Defining the Tasks)
class WithdrawalTask implements Runnable {
    BankAccount account;
    int amount;

    WithdrawalTask(BankAccount account, int amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        account.withdraw(amount);
    }
}

class DepositTask implements Runnable {
    BankAccount account;
    int amount;

    DepositTask(BankAccount account, int amount) {
        this.account = account;
        this.amount = amount;
    }

    @Override
    public void run() {
        // Sleep a bit to simulate that depositing takes time (forcing the other thread to wait)
        try { Thread.sleep(2000); } catch (InterruptedException e) {}
        account.deposit(amount);
    }
}

// 3. THE MAIN EXECUTION
public class BankSimulation {
    public static void main(String[] args) {
        System.out.println("--- BANK SIMULATION STARTED ---");

        BankAccount sharedAccount = new BankAccount();

        // --- BASIC CONCEPT: CREATING THREADS ---
        // We give the threads names so we can see who is doing what.

        //Thread husband = new Thread(new WithdrawalTask(sharedAccount, 1000), "Husband");
        //Thread wife = new Thread(new DepositTask(sharedAccount, 2000), "Wife");

        // Start the Husband thread first.
        // He will try to withdraw $1000, but balance is $0. He will WAIT.
        //husband.start();

        // The Wife thread starts. She sleeps for 2 seconds, then deposits $2000.
        // This triggers the NOTIFY, waking up the husband.
        //wife.start();

        // --- PRO TIP: THE "REAL WORLD" WAY (ExecutorService) ---
        // In real enterprise code, we don't do 'new Thread()'. We use a Thread Pool.
        // Uncomment below to see how pros do it:

        ExecutorService executor = Executors.newFixedThreadPool(2);
        executor.submit(new WithdrawalTask(sharedAccount, 1000));
        executor.submit(new DepositTask(sharedAccount, 2000));
        executor.shutdown();

    }
}
