public class Loops {
    public static void main(String[] args) {
        int[] num = {1, 2, 3, 8, 7, 4 };

        //for loop
        for(int i = 0; i < num.length; i++){
            System.out.print(num[i] + " ");
        }

        // while loop
        int i = 0 ;
        while(i < num.length){
            System.out.print(num[i] + " ");
            i++;
        }

        // for each loop
        for ( int n : num ) {
            System.out.print(n + " ");
        }

    }
}
