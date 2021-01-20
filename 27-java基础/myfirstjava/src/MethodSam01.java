public class MethodSam01 {
  public String isNum(int a){
    if (a%2 == 0){
      return "偶数";
    }else {
      return "奇数";
    }
  }

  public static void main(String[] args) {
    MethodSam01 fun = new MethodSam01();
    String r1 = fun.isNum(10);
    String r2 = fun.isNum(1);
    System.out.println(r1);
    System.out.println(r2);
  }
}
