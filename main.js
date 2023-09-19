let lapArr = [];

let min = sec = ms = "0" + 0;

function putValue() {
  minute.innerText = min;
  second.innerText = sec;
  millisecond.innerText = ms;
}

stopBtn.disabled = true;
resetBtn.disabled = true;
lapBtn.disabled = true;

lapBtn.style.opacity = "0.5";
lapBtn.style.cursor = "not-allowed";

resetBtn.style.opacity = "0.5";
resetBtn.style.cursor = "not-allowed";

stopBtn.style.opacity = "0.5";
stopBtn.style.cursor = "not-allowed";

startBtn.addEventListener("click", function () {
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    } else if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    } else if (min == 30) {
      message.style.display = "block";
      sec = "00";
      ms = "00";
    }
    putValue();
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
  lapBtn.disabled = false;
  startBtn.style.opacity = "0.5";
  startBtn.style.cursor = "not-allowed";

  stopBtn.style.opacity = "1";
  stopBtn.style.cursor = "pointer";

  resetBtn.style.opacity = "0.5";
  resetBtn.style.cursor = "not-allowed";

  lapBtn.style.opacity = "1";
  lapBtn.style.cursor = "pointer";
});

stopBtn.addEventListener("click", function () {
  clearInterval(startTimer);
  startBtn.disabled = false;
  resetBtn.disabled = false;
  stopBtn.style.opacity = "0.5";
  stopBtn.style.cursor = "not-allowed";

  startBtn.style.opacity = "1";
  startBtn.style.cursor = "pointer";

  resetBtn.style.opacity = "1";
  resetBtn.style.cursor = "pointer";
});

resetBtn.addEventListener("click", function () {
  lapContent.innerHTML = "";
  lapArr = []
  min = sec = ms = "0" + 0;
  putValue();
  startBtn.disabled = false;
  message.style.display = "none";

  startBtn.style.opacity = "1";
  startBtn.style.cursor = "pointer";

  stopBtn.style.opacity = "1";
  stopBtn.style.cursor = "pointer";
});

lapBtn.addEventListener("click", function () {
  lapArr.push(`${min}:${sec}:${ms}`);
  lapRender();
});

function lapRender() {
  lapContent.innerHTML = lapArr
    .map((el, index) => {
      return `<li class="lap">${index + 1}. ${el}</li>`;
    })
    .join("");
}
