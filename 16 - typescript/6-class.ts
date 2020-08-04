// 在js中，使用原型和原型链实现继承

// 类(class): 定义了一切事务的抽象特点，有属性、方法。例如汽车的图纸就可以比作一个类
// 对象(Object): 类的实例，通过new来生成。例如奥迪Q3是一个实例
// 面向对象(OOP)三大特性：封装(只暴露接口)、继承、多态(由继承而产生相关的不同的类，对不同的方法有不同的响应，例如猫和狗都继承动物，但是吃有不同的方法)

class Animal{   // 类创建属性和方法  当父类的属性和方法对子类没有太大作用的时候 可以使用修饰符
  name: string;          // 默认都是public
  public age: number;   // public 都可以访问的属性
  private color: string;    // private 只有父类才能反问的属性 继承的子类无法访问
  protected sex: string;    // protected 只允许extends继承的子类访问 通过new实例的不能访问
  readonly stature: number;   // 只读属性 不允许修改
  static categoies: string [] = ['mammal', 'bird'];    // 静态属性
  static isAnimal(a) {        // 静态方法
    return a instanceof Animal
  }
  constructor(name: string){
    this.name = name
  }
  run(){
    return `${this.name} is running`
  }
}

const dog = new Animal('lily')
console.log(dog.run())

class Cat extends Animal{
  bark(){
    return `${this.name} is barking`
  }
}
const xiaobao = new Cat('小八')
console.log(xiaobao.bark())
console.log(xiaobao.run())

class pannan extends Animal{  // 重写父类构造函数
  constructor(name){      // 子类必须使用super调用父类的方法， 否则会报错  
    super(name) 
    console.log(this.name)
  }
  run(){          // run重写
    return 'meow, ' + super.run()  //调用父类方法使用super关键字
  }
}
const maomao = new pannan('maomao')
console.log(maomao.run())     // 体验多态