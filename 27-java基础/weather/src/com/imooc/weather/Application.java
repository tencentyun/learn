package com.imooc.weather;

import com.imooc.weather.impl.WeatherUtilsImpl;

import java.util.List;
import java.util.Scanner;

public class Application {
  public static void main(String[] args) {
    System.out.println("1代表24小时天气；2代表3天天气；3代表7天天气");
    System.out.print("请输入查询的天气: ");
    Scanner scanner = new Scanner(System.in);
    int num = scanner.nextInt();
    if (num == 1){
      System.out.print("请输入查询的地域: ");
      String city = scanner.next();
      WeatherUtils weatherUtils = new WeatherUtilsImpl();
      List<HourWeather> weatherList = weatherUtils.w24h("2bd149355b9f458e9ba847d6ce767161", city);
      // System.out.println(weatherList);
      for (HourWeather hourWeather: weatherList){
        String template = "%s月%s日%s时|%s|%s|%s";
        String row = String.format(template, new String[]{
                hourWeather.getMonth(),
                hourWeather.getDay(),
                hourWeather.getHour(),
                hourWeather.getWindPower(),
                hourWeather.getWeather(),
                hourWeather.getWindDirection()
        });
        System.out.println(row);
      }

    }
  }
}
