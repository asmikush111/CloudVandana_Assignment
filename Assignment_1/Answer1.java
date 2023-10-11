import java.util.*;

class Answer1
{
    static void randomized( int a[], int n)
    {
        Random ran = new Random();

        for (int i = n-1; i > 0; i--) {
            int j = ran.nextInt(i+1);
            int temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
        System.out.println(Arrays.toString(a));
    }
     
    public static void main(String[] args) 
    {
         int arr[] = {1, 2, 3, 4, 5, 6, 7};
         int n = arr.length;
         randomized(arr, n);
    }
}