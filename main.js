function calcularIMC() {

    //CALCULAR EL IMC
    let peso = document.getElementById('peso').value;
    let estatura = document.getElementById('estatura').value;

    let imc = Number(peso) / (Number(estatura)**2);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Su IMC es de: '+ Number(imc).toFixed(1);

    //CLASIFICAR EL IMC
    let estado = ' ';

    if (imc < 18.4){
        estado = 'Insuficiencia Ponderal';
    } else if (imc > 18.5, imc < 24.9) {
        estado = 'Normal';
    } else if (imc > 25, imc < 29.9) {
        estado = 'Sobrepeso';
    } else if (imc > 30, imc < 34.9) {
        estado = 'Obesidad I';
    } else if (imc > 35, imc < 39.9) {
        estado = 'Obesidad II';
    } else if(imc >= 40) {
        estado = 'Obesidad III';
    }

    let clasificacion = document.getElementById('clasificacion');
    clasificacion.innerHTML = estado;
}