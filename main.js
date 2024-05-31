var peso=0
var estatura=0
var IMC=0
function PesoK(){
    peso=prompt("ingresa tu peso...")
}
function Estatu(){
    estatura=prompt("Ingresa tu estatura...")
}
function Imc(){
    IMC=peso/(estatura*estatura)
    alert("Tu imc es de..." + IMC)
    if (IMC<18.50) {
        alert("Bajo peso")
    }
    else if(IMC>=18.50 && IMC<24.9){
        alert("Normal")
    }
    else if(IMC>=25.00 && IMC<30){
        alert("Sobrepeso")
    }
    else if(IMC>30){
        alert("Obesidad")
    }
    
}