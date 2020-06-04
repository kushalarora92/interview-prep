public class StringReverse {
  public static void main(String[] args) {
    String str = "Hello World";
    System.out.println(usingStringBufferOrBuilder(str));
    System.out.println(usingForEach(str));
    System.out.println(usingRecursion(str));
  }

  public static String usingStringBufferOrBuilder(String str) {
    return new StringBuffer(str).reverse().toString();
  }

  public static String usingForEach(String str) {
    char[] arr = str.toCharArray();
    char[] out = new char[str.length()];
    for (int i = 0; i < arr.length; i++) {
      out[arr.length - i - 1] = arr[i];
    }
    
    return String.valueOf(out);
  }

  public static String usingRecursion(String str) {
    if (str.isEmpty()) {
      return str;
    }

    return usingRecursion(str.substring(1)) + str.charAt(0);
  }
}