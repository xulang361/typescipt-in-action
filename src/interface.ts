import { type } from "os";

interface List {
  readonly id: number,
  name: string,
  // [x: string]: any, //字符串索引签名
  age?: number
}

interface Result {
  data: List[]
}

function render(res: Result) {
  res.data.forEach(item => {
    console.log(item.name)
    if (item.age) {
      console.log(item.age)
    }
    // item.id++
  })
}

let res= {
  data: [
    {id: 1, name: 'tom', age: 22},
    {id: 2, name: 'jack', sex: 'man'}
  ]
}
render(res)
// render({
//   data: [
//     {id: 1, name: 'tom', age: 22},
//     {id: 2, name: 'jack', sex: 'man'}
//   ]
// } as Result)

interface StringArr {
  [index: number]: string
}

let char: StringArr = ['a', 'b']

interface Name {
  [x: string]: any,
  // y: number
  [y: number]: number
}


// 1、接口约束对象 函数 类的结构
// 2、对象的接口如何定义
// 3、关键字 interface
// 4、作用 ：规范对象的属性 属性的类型 属性值的类型
// 5、类型断言 用as 或者<>的形式 ，后者在react中使用会出问题
// 6、可选属性 通过？来设置
// 7、只读属性 通过readonly 来设置
// 8、当不确定接口中属性个数时需要使用 索引签名
// 9、索引签名包括字符串索引签名和数字索引签名
// 10、当接口中定义了一个索引后，例如设置了 【x:string】= string，就不能设置y：number了。
// 因为设置了【x:string】= string相当于这个接口的字符串索引返回值都是字符串，而y：number违背这一原则，冲突了。反过来 如果定义了【x:string】=Number, 就不能设置 y:string了。
// 11、 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。
// 因为 数字索引或转化为字符串索引，而转化的这部分索引对应的值的类型范围 超过了 字符串索引类型的范围，就会报错，相当于超出范围。


// 函数类型接口
// let add1: (x: number, y:number) => number

// interface Add1 {
//   (x: number, y: number): number
// }

type Add1 = (x: number, y: number) => number

let add: Add1 = (x, y) => { return x + y}

// 混合类型
interface Lib {
  (): void;
  version: string;
  doSth(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSth = () => {}
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSth()
let lib2 = getLib()
lib2()
lib2.doSth()


function add5(x: number, y?: number) {
  return y? x + y : x
}

function add6(x: number, y: 2, z: number) {
  return x + y + z
}
add6(1, undefined, 3)

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}

// 函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  if (typeof rest[0] === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
  if (typeof rest[0] === 'string') {
    return rest.join('')
  }
}

console.log(add8(1, 2, 3))
console.log(add8('a', 'b', 'c'))