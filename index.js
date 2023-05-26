const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourE1.innerText = h < 10 ? "0" + h : h;
  minuteE1.innerText = m < 10 ? "0" + m : m;
  secondE1.innerText = s < 10 ? "0" + s : s;
  ampmE1.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
