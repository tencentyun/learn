// 枚举 
enum Direction{
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up)     // 0
console.log(Direction[0])     // Up


enum Direction2{
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
console.log(Direction2.Up)     // UP
console.log(Direction2[0])     // undefined


// 常量枚举  提高性能
const enum Direction3{
  Up = 'Up', 
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
console.log(Direction3.Up)    // Up
