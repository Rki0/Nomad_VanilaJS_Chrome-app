const clock = document.querySelector("#clock");

function getClock(){
  const time = new Date();
  const hour = String(time.getHours()).padStart(2,0);
  const min = String(time.getMinutes()).padStart(2,0);
  const sec = String(time.getSeconds()).padStart(2,0);
  clock.innerText = `${hour}:${min}:${sec}`
}

getClock();
setInterval(getClock,1000);

/**Add today's date upward clock */
const calendar = document.querySelector("#date");

function getDate(){
  const date = new Date();
  const year = date.getUTCFullYear();
  let month = date.getMonth();
  month = month + 1;
  const stringMonth = String(month).padStart(2,0);
  const day = date.getDate();
  calendar.innerText = `${year}-${stringMonth}-${day}`;
}

getDate();

