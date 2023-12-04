// console.log('hello js')
// console.log("Hi, ks")

// let name = "Johannes"
// let msg = "今天過的如何"

// console.log(name + msg) 

// fruit = prompt("你最喜歡的水果是什麼")

// alert(fruit)

let food = parseInt(prompt("這餐花費多少"))
let tipPercentage = parseInt(prompt("小費幾趴?")) / 100
let tipAmount = food * tipPercentage
let totalAmount = tipAmount + food
console.log("小費有：" + tipAmount)
console.log("總金額：" + totalAmount )