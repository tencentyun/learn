// 类型别名  常用场景：在联合类型的时候
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType = sum



type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if(typeof n === 'string'){
    return n
  }else{
    return n() 
  }
}
