// 專案概念
// - DOM 操作
// - 事件監聽器
// - 迴圈 forEach
// - 變數
// - 條件語句 ( if else if)
// - 樣板字面值


// 將 title 文字轉變成 '標題已經切換！' 將字改成藍色
   
const changeButton = document.getElementById("changeButton"); // 獲取 id 為 changeButton 的標籤
const titleDiv = document.getElementById("title"); // 獲取 id 為 title 的標籤

changeButton.onclick = () => {
    let message = "標題已切換"; //需告一個message
    titleDiv.innerText = message; // 用innerText插入message裡面文字
    titleDiv.innerHTML = `<p>${message}</p>`; 
    titleDiv.style.color = 'blue';
}


const square = document.querySelectorAll(".colorSquare"); // 找出class 是 colorSquare的所有標籤
const output = document.getElementById("output"); // 找出id為output的標籤

// 用forEach綁定所有square
square.forEach(square => { 
    // 當點擊時，在id="output" 輸入onclick(點擊事件)
    square.onclick = () => {     
        // 獲取所有square的id
        _id = square.getAttribute("id"); 
        output.innerHTML = `<div class="colorSquare" id="${_id}" ></div>`;
    }
})