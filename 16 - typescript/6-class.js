// 在js中，使用原型和原型链实现继承
// 类(class): 定义了一切事务的抽象特点，有属性、方法。例如汽车的图纸就可以比作一个类
// 对象(Object): 类的实例，通过new来生成。例如奥迪Q3是一个实例
// 面向对象(OOP)三大特性：封装(只暴露接口)、继承、多态(由继承而产生相关的不同的类，对不同的方法有不同的响应，例如猫和狗都继承动物，但是吃有不同的方法)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        return this.name + " is running";
    };
    return Animal;
}());
var dog = new Animal('lily');
console.log(dog.run);
