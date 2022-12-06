let jugador=0;
let pc=2;

//1 es piedra, 2 es papel, 3 es tijera

jugador=prompt("1 es piedra, 2 es papel, 3 es tijera")
console.log(jugador)
if (jugador==1){
    alert("Perdiste")
} else if (jugador==2){
    alert("Empatamos")
} else if (jugador==3){
    alert("Ganaste")
}
