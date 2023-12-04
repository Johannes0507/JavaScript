// 溢出 捨棄高位留下八位字符
let buf = Buffer.from("Hello") 
console.log(buf)

buf[0] = 361 // 0001 0110 1001 捨棄掉 0001 留下 0110 1001

console.log(buf) // <Buffer 2c 65 6c 6c 6f> 之後輸出的 69 -> 0110 1001 -> 361-255=106 