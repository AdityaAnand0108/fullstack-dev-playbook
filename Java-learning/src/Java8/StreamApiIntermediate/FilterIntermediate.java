package Java8.StreamApiIntermediate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class FilterIntermediate {

    private static boolean isPrime(int n) {
        if (n < 50) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void invalidMail() {
        List<String> emails = Arrays.asList(
                "john.doe@gmail.com",
                "",
                null,
                "admin@company",
                "user123@yahoo.com",
                "no-at-symbol.com",
                "   ",
                "test@domain.org",
                "@missingusername.com",
                "missingdomain@",
                "valid.email@outlook.com"
        );

        List<String> validEmails = emails.stream()
                .filter(Objects::nonNull)
                .filter(e -> !e.isEmpty() && e.contains("@"))
                .toList();

        System.out.println("Valid mails -> " + validEmails);
    }

    // Filter Prime Numbers Greater Than 50
    public static void filterPrime() {
        List<Integer> numbers = List.of(2, 3, 17, 49, 51, 53, 57, 59, 60, 61, 75, 83, 91, 97);
        System.out.println("Prime numbers -> " + numbers.stream().filter(FilterIntermediate::isPrime).toList());
    }

    // Filter Employees by Salary Range
    public static void filterEmployee() {
        List<Employee> employees = List.of(
                new Employee(1, "Amit", 45000),
                new Employee(2, "Rohit", 60000),
                new Employee(3, "Neha", 75000),
                new Employee(4, "Pooja", 90000),
                new Employee(5, "Suresh", 95000)
        );
        List<Employee> result = employees.stream()
                .filter(e -> e.getSalary() >= 60000 && e.getSalary() <= 90000)
                .collect(Collectors.toList());

        System.out.println("Employees with salary range -> " + result);
    }

    // Keep Strings with Unique Lengths
    public static void uniqueLength() {
        List<String> words = List.of(
                "cat",
                "house",
                "java",
                "stream",
                "api",
                "filter",
                "hi"
        );
    }


    public static void main(String[] args) {
        invalidMail();
        filterPrime();
        filterEmployee();
    }
}
