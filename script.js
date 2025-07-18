let secondHand=document.querySelector(".seconds");
let minutesHand=document.querySelector(".minutes");
let hoursHand=document.querySelector(".hours")

function setDate(){
  let date= new Date()
  let seconds=date.getSeconds();
  let minutes=date.getMinutes();
  let hours=date.getHours();

  const secondsDeg=((seconds/60)*360)+ 270;
  const minutesDeg=((minutes/60)*360) + 270;
  const hoursDeg=((hours/12)*360) + 270;

  secondHand.style.transform=`rotate(${secondsDeg}deg)`;
  minutesHand.style.transform=`rotate(${minutesDeg}deg)`;
  hoursHand.style.transform=`rotate(${hoursDeg}deg)`;
  console.log(secondsDeg)
  
}
setInterval(setDate,1000)