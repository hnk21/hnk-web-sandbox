// var datetime = new Date().getDate();
// var datetime = new Date().getDay();
// var datetime = new Date().getFullYear();
// var datetime = new Date().getMonth() + 1;
// var datetime = new Date().toDateString();
// var datetime = new Date().getHours()+1;
// var datetime = new Date().getMilliseconds();

// var datetime = new Date().toLocaleTimeString();
// console.log(datetime); // it will represent date in the console of developers tool
// document.getElementById("time").textContent = datetime; // represent on html page


function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  timeDisplay.textContent = dateString;
}

setInterval(refreshTime, 1000);