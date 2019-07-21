// 原始类型
let num: number | undefined = 2;
let bool: boolean = false;
let str: string = "abc";

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, '3']

// 元组
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

// 函数
let add = (x: number, y:number) => x + y
let comput: (x: number, y:number) => number
comput = (a, b) => a + b

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// symbol 
 let s1: symbol = Symbol()
 let s2 = Symbol()
//  console.log(s1 === s2)

 // undefined
  let nu: undefined = undefined
  let nl: null = null
  num = undefined
  bool = undefined
  // void  没有任何返回
  let noReturn = () => {}

// any
let a1 = 1
let a2 = false

// newver 永远不会有返回值
let eroor = () => {
  throw new Error('err')
}
