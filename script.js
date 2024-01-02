const body = document.getElementsByTagName('body')[0];
const contador = document.getElementById('contador');
const h1 = document.getElementById('cumpleaños');
const felicidades = document.getElementById('felicitacion');
const monthsElement = document.getElementById('meses');
const daysElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('minutos');
const secondsElement = document.getElementById('segundos');
const upcomingImg = document.getElementById('upcoming-img');
const otonioImg = document.getElementById('otonio-img');
const inviernoImg = document.getElementById('invierno-img');
const primaveraImg = document.getElementById('primavera-img');
const veranoImg = document.getElementById('verano-img');


let currentDate = new Date();
let goalDate = new Date(2024, 3, 22, 1, 0); //Año, mes (enero==0), día, hora, minutos
let goalOtonio = new Date(2023, 8, 23, 1, 0); //Empieza el 23 de Septiembre
let goalInvierno = new Date(2023, 11, 22, 1, 0); //Empieza el 22 de Diciembre
let goalPrimavera = new Date(2024, 2, 20, 1, 0); //Empieza el 20 de Marzo
let goalVerano = new Date(2024, 5, 21, 1, 0); //Empieza el 21 de Junio
let months, days, hours, mins, seconds, totalSeconds;

//Crea un intervalo que llama a la función cada segundo
let countdownInterval = setInterval(countdown, 1000);
countdown();

//CONTADOR
function countdown() {
  currentDate = new Date();
  totalSeconds = (goalDate - currentDate) / 1000;

  // Condición para comprobar si ha llegado la hora establecida
  if (Math.ceil(totalSeconds) <= 0) {
    showProduct();
    secondsElement.innerHTML = 0;
  }

  //Para saber el equivalente de 1 segundo - meses se dividen los segundos entre 2592000
  //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 o entre 3600 y luego entre 24
  //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
  //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60

  months = Math.floor(totalSeconds / 2592000);
  days = Math.floor(totalSeconds / 3600 / 24);
  hours = Math.floor(totalSeconds / 3600) % 24;
  mins = Math.floor(totalSeconds / 60) % 60;
  seconds = Math.floor(totalSeconds) % 60;

  monthsElement.innerHTML = months;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minsElement.innerHTML = mins;
  secondsElement.innerHTML = seconds;

//Añadimos la condición para que compare las fechas y según el resultado, muestra una imagen diferente

if (currentDate >= goalOtonio && currentDate <= goalInvierno){
  body.className = "mostrarOtonio";
} else if(currentDate >= goalInvierno && currentDate <= goalPrimavera) {
  body.className = "mostrarInvierno";
} else if(currentDate >= goalPrimavera && currentDate <= goalVerano) {
  body.className = "mostrarPrimavera";
} else {
  body.className = "mostrarVerano";
}

};

function showProduct() {
  upcomingImg.classList.remove('nocolor-img');
  //Paramos el intervalo que se estaba ejecutando
  clearInterval(countdownInterval);

  //Se oculta la función, las frases que había y el contador
  countdown.className = "oculto"; 
  h1.className = "oculto";
  contador.className = "oculto";

  //El mensaje de felicitación pasa a ser visible
  felicidades.classList.remove('oculto');
}