package Java8;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class JavaStreamCoding {


    // Given a list of strings, filter out all strings that start with the letter "J" (case-insensitive) and collect the result into a List.

    public static  void startWithLetterJ(){
        List<String> list = Arrays.asList("Java", "Python", "JavaScript", "C++", "Ruby", "Jolly", "js");
        System.out.println("All strings that start with the letter \"J\" - " + list.stream().filter(s -> s.startsWith("J")).toList());
    }

    // Given a list of names, convert all of them to uppercase and join them with a semicolon (;).

    public static void toUppercaseAndJoin(){
        List<String> list = Arrays.asList("ram", "shyam", "ghanshyam");
        System.out.println("Convert all of them to uppercase and join them with a semicolon (;) - " +
                list.stream().map(s -> s.toUpperCase()).collect(Collectors.joining( " ; " )));
    }

    //Given a list of integers, find the maximum and minimum value using Streams.

    public static void findMaximum(){
        List<Integer> list = Arrays.asList(10, 55, 2, 99, 43);
        System.out.println("Find the maximum value using Streams - " + list.stream().max(Integer::compare).orElse(0));
        System.out.println("Find the minimum value using Streams - " + list.stream().min(Integer::compare).orElse(0));
    }

    // Given a list of integers, square each number and then filter out the ones that are less than 100.

    public static void squareAndHundred(){
        List<Integer> list = Arrays.asList(5, 10, 2, 20);
        System.out.println("Square each number and then filter out the ones that are less than 100 - " +
                list.stream().map(s -> s * s).filter(s -> s <= 100).toList());
    }

    // Given a list of words, group them by their length using a Collector.
    public static void groupByLength(){
        List<String> list = Arrays.asList("apple", "bat", "sat", "orange", "cat");
        System.out.println("Group them by their length using a Collector - " +
                list.stream().collect(Collectors.groupingBy(s -> s.length(), Collectors.counting())));
    }

    // Given a string, count how many times a specific character (e.g., 'a') appears using the Stream API.
    public static void countCharInString(){
        String str = "engineeringdigest";
        System.out.println("Count the character in string - " + str.chars().filter(ch -> ch == 'e').count());
    }

    // Split a list of integers into two groups: even numbers and odd numbers.

    public static void main(String[] args){
        startWithLetterJ();
        toUppercaseAndJoin();
        findMaximum();
        squareAndHundred();
        groupByLength();
        countCharInString();
    }
}

