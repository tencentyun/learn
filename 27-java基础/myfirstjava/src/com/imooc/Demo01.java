package com.imooc;

import java.util.Scanner;

public class Demo01 {
  public static void main(String[] args) {
    /*
    使用Scanner工具类接收用户输入的角色
    String str = new Scanner(System.in).next()
    int num = new Scanner(Syatem.in).nextInt()
     */
    System.out.print("请输入成绩: ");
    int source = new Scanner(System.in).nextInt();
    int count = 0;
    System.out.println("加分前成绩：" + source);
    while (source < 60){
      count++;
      source++;
    }
    System.out.println("加分后的成绩：" + source);
    System.out.println("加的次数："+ count);
  }
}
