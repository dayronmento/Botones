function fondoRojo() {
	document.body.style.backgroundColor='red';

}

function fondoAzul() {
	document.body.style.backgroundColor='blue';
}

function Hora() {
	var horapc = new Date(); 
	var hora= horapc.getHours();
	var minutos=horapc.getMinutes();
	var segundos=horapc.getSeconds();
	alert('La hora del sistema es: '+hora+':'+minutos+':'+segundos);
}

function direccionURL() {
	alert('La direccion URL es: '+window.location.href);
}

function Fecha() {
var fechapc = new Date(); 
var dia = fechapc.getDate();
var mes = (fechapc.getMonth()+1);
var anio = fechapc.getFullYear();
document.getElementById("botones").innerHTML='La fecha actual es: '+dia+'/'+mes+'/'+anio;
}