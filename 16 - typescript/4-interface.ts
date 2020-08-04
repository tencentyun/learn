// interface接口方便定义object类型
// 1. 对对象的形状(shape)进行描述：例如属性和方法
// 2. 对类(class)进行抽象
// 3. Duck Typing(鸭子类型)：动态编程语言的一种对象的推断策略，更加关注对象如何被使用，而不是对象本身 

interface Person {      // 声明一个interface
  readonly id: number;    // 声明该属性只读
  name: string;
  age?: number          // 该属性可有可无
}

let viking: Person = {    // 对象的属性形状必须和Person一样
  id: 123,
  name: 'viking',
  age: 20
}

// viking.id = 321     // 报错  interface已经声明了只读


// 使用interface对class进行抽象
// 例如汽车和手机都有收音机 理论上没有合适的父类进行继承  但是可以抽象出一个interface接口实现共同属性的继承
interface Radio{      // 收音机
  switchRadio(): void      // void(新的关键字) 表示什么都不返回  
}

interface Battery{    // 电池容量
  checkBatteryStatus();
}

class Car implements Radio {
  switchRadio(){

  }
}

class Cellphone implements Radio, Battery {
  switchRadio(){

  }

  checkBatteryStatus(){

  }
}

// 接口继承
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}
// 使用RadioWithBattery继承  同上面的Cellphone
class Cellphone2 implements RadioWithBattery {
  switchRadio(){

  }

  checkBatteryStatus(){

  }
}