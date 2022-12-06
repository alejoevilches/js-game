let jugador=0;
let pc=3;

//1 es piedra, 2 es papel, 3 es tijera

jugador=prompt("1 es piedra, 2 es papel, 3 es tijera")

if (jugador==1){
    alert("Elegiste piedra")
} else if (jugador==2){
    alert("Elegiste papel")
} else if (jugador==3){
    alert("Elegiste tijera")
} 

if (pc==1){
    alert("La maquina eligió piedra")
} else if (pc==2){
    alert("La maquina eligió papel")
} else if (pc==3){
    alert("La maquina eligió tijera")
}

//COMBATES

if (jugador == pc){
    alert("EMPATE");
} else if (jugador==1 && pc==3){
    alert("GANASTE");
} else if (jugador==2 && pc==1){
    alert("GANASTE");
} else if (jugador==3 && pc==2){
    alert("GANASTE");
} else{
    alert("PERDISTE");
}
