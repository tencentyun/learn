package com.imooc.trCatchTest;

public class TryCatchTest {
  public static void main(String[] args) {
    TryCatchTest tryCatchTest = new TryCatchTest();
    int res = tryCatchTest.test();
    System.out.println(res);
  }

  public int test(){
    try {
      int a = 10;
      int b = 0;
      int c = a/b;
      System.out.println(c);
    }catch (Exception e){
      e.printStackTrace();
      return 0;
    }
    return 0;
  }
}
