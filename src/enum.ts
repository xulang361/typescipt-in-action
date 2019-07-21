// 数字枚举
enum Role {
  Reporter = 1,
  Develop,
  Maintainer,
  Owner,
  Guest
}
// console.log(Role);
// js 实现 反向映射
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Develop"] = 2] = "Develop";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));

// 字符串枚举
enum Message {
  Success = "恭喜成功了",
  Fail = "抱歉，失败了"
}

// 异构枚举
enum Answer {
  N,
  Y = "yes"
}

//枚举成员
// Role.Reporter = 4
enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = "123".length,
  f = 4
}
// console.log(Char.d)

// var Char;
// (function (Char) {
//     // const
//     Char[Char["a"] = 0] = "a";
//     Char[Char["b"] = 0] = "b";
//     Char[Char["c"] = 4] = "c";
//     // computed
//     Char[Char["d"] = Math.random()] = "d";
//     Char[Char["e"] = '123'.length] = "e";
// })(Char || (Char = {}));

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];

//枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = "apple",
  b = "banana"
}

let e: E = 3
let f: F = 3
// e === f

let e1: E.a = 1
let e2: E.b
// e1 === e2
let e3: E.a = 1
e1 === e3

let g1: G = G.a
let g2: G.a = G.a

enum Roles {
  Reporter = 1,
  Develop,
  Maintainer,
  Owner,
  Guest
}
//实践： 用枚举实现角色判断
let initByRole: (r: Roles) => void
initByRole = (role) => {
  switch (Roles[role]) {
    case Roles[1]:
      console.log(role)
      break;
    case Roles[2]:
    case Roles[3]:
      console.log(role)
      break
  }
}
// initByRole(2)