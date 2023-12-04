let seconds = 0 // 秒數
let m_seconds = 0 // 百分秒
const displayMSeconds = document.getElementById('m_seconds') // 顯示的毫秒
const displaySeconds = document.getElementById('seconds') // 顯示的秒數
const buttonStart = document.getElementById('button-start') // 開始按鈕
const buttonStop = document.getElementById('button-stop') // 停止按鈕
const buttonReset = document.getElementById('button-reset') // 重新計算按鈕
let interval

// 綁定 buttonStart 按鈕的觸發事件
buttonStart.onclick = () => {
  // 1000 => 1s
  // set
  interval = setInterval(timer, 10);
}

// 綁定 buttonStop 按鈕的觸發事件
buttonStop.onclick = () => {
  // 清除計時器功能
  clearInterval(interval);
}

// 綁定 buttonReset 按鈕的觸發事件
buttonReset.onclick = () => {
  // 終止計時器
  clearInterval(interval);
  // 把原本的"秒" & "毫秒" 歸零之後傳上HTML
  m_seconds = 0;
  seconds = 0;
  displayMSeconds.innerHTML = `0${m_seconds}`;
  displaySeconds.innerHTML = `0${seconds}`;
}

// 碼錶讀取方法
const timer = () => {
  // 執行時會依值加一
  m_seconds++; 

  // 假設"豪"秒小於9時就幫數字前面加一個0
  if (m_seconds <= 9) {
    displayMSeconds.innerHTML = `0${m_seconds}` // 插入m_seconds到HTML
  }else{
    displayMSeconds.innerHTML = m_seconds
  }
  
  // 當大於99的時候對"秒"做加1
  if (m_seconds > 99) {
    seconds++;
    displaySeconds.innerHTML = `0${seconds}`;
    m_seconds = 0;
    displayMSeconds.innerHTML = `0${m_seconds}`;
  }

  // 假設"秒"小於9時就幫數字前面加一個0
  if (seconds <= 9) {
    displaySeconds.innerHTML = `0${seconds}`
  }else{
    displaySeconds.innerHTML = seconds
  }

}
