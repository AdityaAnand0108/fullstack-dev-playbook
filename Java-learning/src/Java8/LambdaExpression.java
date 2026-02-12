package Java8;

import jdk.dynalink.Operation;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.*;

public class LambdaExpression {

    public static void add(int a, int b){
        System.out.println(a+b);
    }

    public static void main(String[] args) {
        // Write a lambda that takes a String and returns its length.
        Consumer<String> strLength = (str) -> System.out.println("The Length of the given String is -> " + str.length());
        strLength.accept("Hello");

        // Write a lambda that prints a given string.
        Consumer<String> introMessage = (str) -> System.out.println("Hey it is " + str);
        introMessage.accept("Aditya Anand Mishra");

        // Write a lambda that takes no input and returns 10
        Supplier<Integer> numberValue = () -> 10;
        System.out.println(numberValue.get());

        // Write a lambda that checks if a number is even.
        Predicate<Integer> isEven = number -> number % 2 == 0;
        System.out.println("If the given number is Even -> " + isEven.test(numberValue.get()));

        // Write a lambda that adds two integers.
        BiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;
        System.out.println("The sum of two given number is -> " + sum.apply(3, 4));

        // Write a lambda that converts a string to uppercase.
        Function<String, String> uppercase = str -> str.toUpperCase();
        System.out.println("The uppercase of given string is -> " + uppercase.apply("hello"));

        // Write a lambda that checks if a string’s length is greater than 5.
        Predicate<Integer> greaterThanFive = number -> number > 5;
        System.out.println("If the given number is more than 5 or not -> " + greaterThanFive.test(15));

        // Use a lambda to print all elements of a list
        List<String> list = Arrays.asList("Aditya", "Archna");
        Supplier<List<String>> listSupplier = () -> list;
        System.out.println(listSupplier.get());

        Calculator calAdd = (x, y) -> x + y;
        Calculator calSub = (x, y) -> x - y;
        Calculator calMul = (x, y) -> x * y;
        Calculator calDiv = (x, y) -> x / y;

        System.out.println("Multiplication of these two number is -> " + calMul.calculate(4, 5));

        // Given a list of integers, use a lambda to filter only even numbers and print them.
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        for (Integer n : numbers) {
            if (isEven.test(n)) {
                System.out.println(n);
            }
        }

        // Sort a list of strings by their length using a lambda expression.
        List<String> list1 = Arrays.asList("Java", "Lambda", "AI", "SpringBoot");

        list1.sort((s1, s2) -> s1.length() - s2.length());

        System.out.println(list1);

        LambdaExpression lambdaExpression = new LambdaExpression();




    }

}

@FunctionalInterface
interface Calculator {
    Integer calculate(Integer a, Integer b);
}
