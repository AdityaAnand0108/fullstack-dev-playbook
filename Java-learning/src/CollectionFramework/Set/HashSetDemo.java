package CollectionFramework.Set;

import java.util.*;

public class HashSetDemo {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 2, 3, 1));
        Set<Integer> set = new HashSet<>(list);
        System.out.println(set);

    }
}
