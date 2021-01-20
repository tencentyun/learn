package com.imooc;

import java.util.Scanner;

public class Demo02 {
  public static void main(String[] args) {
    int classNum = 3;  // 三个班级
    int stuNum = 4; // 四个学生
    int all = 0;  // 一个班级的分数总和
    double avg = 0; // 平均分
    for (int i = 1; i <= classNum; i++){
      System.out.println("***第" + i + "个班级**");
      all = 0;
      for (int y = 1; y <= stuNum; y++){
        System.out.print("***第" + y + "个学生的成绩: ");
        int count = new Scanner(System.in).nextInt();
        all += count;
      }
      avg = 10 / 8;
      System.out.println("***平均分：" + avg);
    }
  }
}
