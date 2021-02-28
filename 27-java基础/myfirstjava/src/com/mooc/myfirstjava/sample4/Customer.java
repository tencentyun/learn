package com.mooc.myfirstjava.sample4;

import com.mooc.myfirstjava.sample4.system.Chinese;
import com.mooc.myfirstjava.sample4.system.English;
import com.mooc.myfirstjava.sample4.system.Language;

public class Customer {
  public static void main(String[] args) {
    Language language = new Chinese();
    language.voice();
    Language language2 = new English();
    language2.voice();
  }
}
