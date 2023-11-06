const randomNumber = (size) => {
  return Math.floor;
};

const launchDate = new Date("Jan 1, 2024 09:00:00").getTime();
const interval = () => {
  const timeNow = new Date().getTime();
  const timeDifference = launchDate - timeNow;
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  days = days < 10 ? "0" + days : days;

  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hours = hours < 10 ? "0" + hours : hours;

  let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.querySelector("#time-left").innerHTML = `
    
    <ul> 
      <li>
      <span class="time-num">${days}</span>
      <span class="time-text">Dias</span>
    </li>
      <li>
      <span class="time-num">${hours}</span>
      <span class="time-text">Horas</span>
     </li>
     <li>
      <span class="time-num">${minutes}</span>
      <span class="time-text">Minutos</span>
     </li>
     <li>
      <span class="time-num">${seconds}</span>
      <span class="time-text">Segundos</span>
     </li>
    <ul>`;

  if (timeDifference < 0) {
    clearInterval(interval);
    document.querySelector("#time-left").innerHTML = "Tempo Finalizado!";
  }
};
setInterval(interval, 1000);
