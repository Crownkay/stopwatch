const startBtn = document.getElementById("start");
const resetBtn = document.getElementById('reset');
const stopBtn = document.getElementById('stop');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false;

startBtn.addEventListener('click', function(){
  timer = true;
  stopWatch(); 
})

resetBtn.addEventListener('click', function(){
  timer = false;
  hour = 0;
  minute =0;
  second = 0;
  count = 0;
  document.getElementById('hour').innerHTML = '00';
  document.getElementById('minute').innerHTML = '00';
  document.getElementById('seconds').innerHTML = '00';
  document.getElementById('counts').innerHTML = '00'
})

stopBtn.addEventListener('click', function(){
  timer = false;
})

function stopwatch(){
  if(timer){
    count++;

    if(count == 100){
      second++
      count = 0;
    }
    if(second == 60){
      minute++;
      second = 0
    }
    if(minute == 60){
      hour++;
      minute = 0;
      second = 0;
    }

    // let hrString = hour;
    // let minString = minute;
    // let secString = second;
    // let countString = count;

    // if(hour < 10){
    //   hrString = '0' + hrString;
    // }

    // if(minute < 10){
    //   minString = '0' + minString;
    // }

    // if(second < 10){
    //   secString = '0' + secString
    // }

    // if(count < 10){
    //   countString = '0' + countString;
    // }

    document.getElementById('hour').innerHTML = hrString;
    document.getElementById('minute').innerHTML = minString;
    document.getElementById('second').innerHTML = secString;
    document.getElementById('counts').innerHtml = count;

    setTimeout(stopWatch, 10)
  }
}