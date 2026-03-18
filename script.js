const content = `import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class List {
    public static int smallestElement(int[] arr) {
        int smallest = arr[0];
        for (int i : arr) {
            if (i < smallest) {
                smallest = i;
            }
        }
        return smallest;
    }

    public static ArrayList<Integer> twoMinima(int[] arr) {
        int n = arr.length;
        ArrayList<Integer> result = new ArrayList<>();

        // Atleast 2 elements are required
        if (n < 2) {
            result.add(-1);
            return result;
        }
        int first = Integer.MAX_VALUE;
        int second = Integer.MAX_VALUE;

        for (int i : arr) {
            if (i < first) {
                second = first;
                first = i;
            } else if (i < second && i != first) {
                second = i;
            }
        }
        // Second was never updated only if elements are equal
        if (second == Integer.MAX_VALUE) {
            result.add(-1);
            return result;
        }

        result.add(first);
        result.add(second);
        return result;
    }

    public static ArrayList<Integer> reverseArray(int[] arr) {
        int n = arr.length;
        ArrayList<Integer> rev = new ArrayList<>();
        if (n < 1) {
            rev.add(-1);
            return rev;
        }
        for (int i = n - 1; i > 0; i--) {
            rev.add(arr[i]);
        }
        return rev;
    }

    public static int binarySearch(int[] arr, int target) {
        int r = arr.length - 1;
        int l = 0;

        Arrays.sort(arr);

        while (l <= r) {
            int mid = (r - l) / 2;
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return -1;
    }

    public static int[] keepUniques(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i : arr) {
            if (!map.containsKey(i))
                map.put(i, 1);
        }
        int newSize = map.size();
        int[] result = new int[newSize];
        int counter = 0;
        for (int i : map.keySet()) {
            result[counter] = i;
            counter++;
        }
        return result;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 24, 36, 14, 7, 69, 45, 12, 35, 17, 64, 35, 7 };
        int[] uniqueArray = keepUniques(arr);
        for (int i : uniqueArray) {
            System.out.print(i + " ");
        }
    }
}`

const array = document.getElementById('array')
array.textContent = content