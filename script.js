//Inicializo variables
let jugador
let victorias = 0
let derrotas = 0

//Funcion para que la PC elija un numero
function range(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;}

//Funcion para que se muestre en pantalla la eleccion de las partes
function election(val){
    if (val==1){
        return "Piedra";
    } else if (val==2){
        return "Papel";
    } else if (val==3){
        return "Tijera";
    }
    }

function count(pc, jugador){
    if (jugador == pc){
        alert("EMPATE");
    } else if ((jugador==1 && pc==3) || (jugador==2 && pc==1) || (jugador==3 && pc==2)){
        alert("GANASTE");
        victorias++
    } else{
        alert("PERDISTE");
        derrotas++
    }
}

//Hago el bucle para que se repita hasta que gane el mejor de 3
while (victorias < 3 && derrotas < 3){
    let pc=range(1,3);
    let jugador=prompt("1 es piedra, 2 es papel, 3 es tijera");
    alert("El jugador eligió " + election(jugador))
    alert("La PC eligió " + election(pc))
    count(pc, jugador);
}
alert("Fin del juego. Ganaste " + victorias + " veces y perdiste " + derrotas + " veces." )