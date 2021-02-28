package com.mooc.myfirstjava.sample5;

import java.util.ArrayList;
import java.util.List;

public class ArrayListSample {
  public static void main(String[] args) {
    List<String> arrayList = new ArrayList<String>();
    arrayList.add("红楼梦");     // 添加
    arrayList.add("西游记");
    arrayList.add("水浒传");
    arrayList.add("三国志");
    System.out.println(arrayList);
    System.out.println(arrayList.get(0));   // 取数组下标
    System.out.println(arrayList.size());   // 取数组长度
    System.out.println(arrayList.remove(1));  // 按照下标移除元素

    for (String book: arrayList){   // for循环
      System.out.println(book);
    }

  }
}
