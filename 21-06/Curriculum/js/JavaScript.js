function Submit() {
	var name = document.getElementById("name").value;
	var lastnames = document.getElementById("lastnames").value;
	var idType = document.getElementById("idType").value;
	var idNum = document.getElementById("idNum").value;
	var bornDay = document.getElementById("bornDay").value;
	var bornMonth = document.getElementById("bornMonth").value;
	var	bornYear = document.getElementById("bornYear").value;
	var gender = (document.getElementById("genderMale").checked)?'Masculino':'Femenino';
	var	relationship = document.getElementById("relationship").value;
	var	license = document.getElementById("license").


	alert("Nombre: " + name + " " + lastnames + "\n" +
		idType + ": " + idNum + "\nFecha de nacimiento:" + 
		bornDay + "-" + bornMonth +	"-" + bornYear + "\nGénero: " +
		gender + ", " + relationship);
}