/*
剪刀石頭布 🚀🔥
此專案涵蓋的概念
👉 迴圈
👉 DOM 操作
👉 變數
👉 條件語句 (if else if)
👉 樣板字面值
👉 事件監聽器
👉 高階函數 (Math.random())
*/

// ** getComputerChoice 函數隨機從 stone paper scissors 選擇一個並返回該字串 **
// getComputerChoice() 👉 '石頭'
// getComputerChoice() 👉 '剪刀'
function getComputerChoice() {
  let pssChoices = ['Stone', 'Paper', 'Scissors'];
  let computerChoice = pssChoices[Math.floor(Math.random()*3)]; // 隨機選數 有點像Python random
  return computerChoice;
}

// ** getResult 函數比較 playerChoice 和 computerChoice 並相應地返回得分 **
function getResult(playerChoice, computerChoice) {
  let score;

  if (playerChoice === computerChoice) {
    score = 0;
  }else if (playerChoice === "Stone" && computerChoice === "Scissors") {
    score = 1;

  }else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;

  }else if (playerChoice === "Paper" && computerChoice === "Stone") {
    score = 1;

  }else{
    score = -1;
  }
  return score;
}

// showResult 函數根據得分在 DOM 上更新為 你贏了 或 你輸了 或 平手！，
// 同時顯示玩家的選擇和電腦的選擇

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById("result"); // 抓取id 為result 的div加入局果
  switch (score) {
    case -1:
      result.innerText = `你輸了！\n你出 ${playerChoice}\n電腦出 ${computerChoice}`;
      break;
    case 1:
      result.innerText = `你贏了！\n你出 ${playerChoice}\n電腦出 ${computerChoice}`;
      break;
    case 0:
      result.innerText = `平手！\n你出 ${playerChoice}\n電腦出 ${computerChoice}`;
      break;
  }
}

// ** 計算誰贏了並在屏幕上顯示 **
function onClickPSS(playerChoice) {
  const computerChoice = getComputerChoice(); // 把電腦選擇的結果存在conputerChoice變數裡面
  const score = getResult(playerChoice.value, computerChoice);  // playerChoice 後面要加 value 不然會取不到 html 裡面 標籤的value值
  showResult(score, playerChoice.value, computerChoice); // 用上面所得到的augument返回相關結果
}

// ** 讓剪刀石頭布按鈕 actively 監聽點擊事件，一旦檢測到點擊就執行某些動作 **
function playGame() {
  let pssButtons = document.querySelectorAll(".pssButton"); // 獲取所有class為pssButton的元素

  // 1. 使用 forEach 迴圈遍歷按鈕
  // 2. 為每個按鈕添加 'click' 事件監聽器
  // 3. 每當有人單擊時調用 onClickPSS 函數
  // 4. 確保將當前選定的剪刀石頭布按鈕作為引數傳遞
  pssButtons.forEach(pssButton => { 
    // _value = pssButton.value;
    pssButton.onclick = () => onClickPSS(pssButton); // 這裡沒辦法獲取_value的值
  })

  // 添加 click 事件監聽器到結束遊戲按鈕上，單擊時運行 endGame() 函數
  let endGameBtn = document.getElementById("endGameButton");
  endGameBtn.onclick = () => endGame();
  
}

// ** endGame 函數清除 DOM 上的所有文本 **
function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame()
