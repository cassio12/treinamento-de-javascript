// alert('ola sou um alerta')


let segundos = undefined;
let minutos = undefined;
let control;

let inicio = () => {
	console.log('iniciando')
  control = setInterval(cronometro,1000);
}

let sendValue = () => {
	segundos = document.getElementById('tempoSegundo').value
	minutos = document.getElementById('tempoMinuto').value;
	Segundos.innerHTML = ':' +segundos;
  Minutos.innerHTML = minutos;
  if (segundos < 10 || minutos < 10) {
  	segundos = '0'+segundos
  	minutos = '0'+minutos
  	Segundos.innerHTML = ':'+segundos;
  	Minutos.innerHTML = minutos
  }
  if ((segundos == '' || minutos == '') || (segundos <= 0 && minutos <= 0) || (segundos == '' && minutos == 0)) {
  	alert('incira um valor valido nos campos')
  	clearInterval(control)
  	Minutos.innerHTML = '00'
  	Segundos.innerHTML = ':00'
  	document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
  }
  else {
  	document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = false;
    document.getElementById("reinicio").disabled = false;
  }
	console.log('pegou')
}

let parar = () => {
	console.log('parou')
  clearInterval(control);
}
let reinicio = () => {
	console.log('reiniciou')
  clearInterval(control);
  segundos = 0;
  minutos = 0;
  Segundos.innerHTML = ":00";
  Minutos.innerHTML = "00";
}
let cronometro = () => {
	console.log('pomodoro ligado')
	if (segundos <= 0){
		segundos = 60;
		Segundos.innerHTML = segundos
	}
  if (segundos <= 60) {
    segundos--;
    if (segundos < 10) { segundos = "0"+segundos }
    Segundos.innerHTML = ":"+segundos;
  }
  if (segundos == 59) {
    segundos = segundos--;
  }
  if ( segundos == 59) {
    minutos--;
    if (minutos < 10) { minutos = "0"+minutos }
    Minutos.innerHTML = minutos;
  }
  if (minutos == 59) {
    minutos = minutos--;
  }
  if (minutos == 0 && segundos == 0){
  	alert('findo pomodoro')
  	clearInterval(control);
  }
}


//console.log(cronometro())
