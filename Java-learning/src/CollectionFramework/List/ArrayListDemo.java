package CollectionFramework.List;

import java.util.*;

public class ArrayListDemo {

    // Remove duplicates from an ArrayList without using a Set

    static public void removeDuplicates() {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 1));
        for ( int i = 0; i < list.size(); i++ ) {
            for (int j = i +1; j < list.size(); j++) {
                if(list.get(i).equals(list.get(j))) {
                    list.remove(j);
                    j--;
                }
            }
        }
        System.out.println("Remove duplicates from an ArrayList->");
        System.out.println(list);

    }

    // Find the second largest element in an ArrayList

    static public void secondLargest() {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 1));
        list.sort(null);
        System.out.println("Find the second largest element in an ArrayList->");
        System.out.println(list.get(list.size()-2));
    }

    // Reverse an ArrayList
    static public void reverse() {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 1));
        for ( int i = list.size() - 1; i >= 0; i-- ) {
            System.out.println(list.get(i));
        }
    }

    static public void removeDuplicates1() {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 1));

        Set<Integer> set = new HashSet<>(list);

        System.out.println(set);


    }

    public static void main(String[] args) {
        removeDuplicates();
        secondLargest();
        reverse();
        removeDuplicates1();
    }

}
