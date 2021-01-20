package com.mooc.myfirstjava.sample3;

public class Mark1 {
  protected String title;
  protected String color;
  protected String movie;
  private void fun(){
    System.out.println("私有的方法");
  };

  public static void main(String[] args) {
    Mark1 mark1 = new Mark1();
    mark1.title = "Mark1";
    mark1.color = "蓝色";
    mark1.movie= "111";
  }
}
