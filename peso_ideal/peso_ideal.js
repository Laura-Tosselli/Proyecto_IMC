//FORMULA DE LORENTZ
// Peso ideal masculino = estatura (en cm) – 100 – [(estatura en cm – 150) / 4]. 
// Peso ideal femenino = estatura (en cm) – 100 – [(estatura en cm - 150) / 2,5].

var gender = document.getElementById("cboGender");
var heigth = document.getElementById("heigth");

function calcular_peso_ideal() {

  let idealWeigthWomen = (parseInt(heigth.value) - 100) - ((parseInt(heigth.value)-150) / 2.5);
  let idealWeigthMan = (parseInt(heigth.value) - 100) - ((parseInt(heigth.value)-150) / 4);

  if (validate()) {
    if (gender.value == 'Femenino') {
      alert("Tu peso ideal es: " + idealWeigthWomen +" kgs");
    } else {
      alert("Tu peso ideal es: " + idealWeigthMan +" kgs");
    }
  }
}

function validate() {
  if ((gender.value == 0)) {
    alert("Debe seleccionar el sexo.");
    return false;
  }

  if (heigth.value === '' || heigth.value === 0) {
    alert("Debe ingresar una estatura.");
    return false;
  }

  if (heigth.value.length < 3 || heigth.value.length > 3){
    alert("Debe ingresar como minimo tres caracteres.");
    return false;
  }
  return true;

}

//ver ejemplo:
/*
http://kio4.com/appinventor/169_javascript_imc.htm#:~:text=with%20(Math)%20%7B-,imc%20%3D%20peso%20%2F%20pow(estatura%20%2F%20100%2C2)%3B,%2F%2F%20redondea%20con%202%20decimales.&text=por%20dos%20puntos-,resultado%20%3D%20imc%20%2B%20%22%3A%22%20%2B%20grado%3B,%3D%20%2224.6%3ANormal.%22
*/