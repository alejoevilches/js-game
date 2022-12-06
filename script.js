let jugador

//Hacer que la PC elija un numero random cada vuelta
function range(min, max){
    return Math.floor(Math.random()*max+min-1)+min;}

let pc=range(1,3);
console.log(pc);

//1 es piedra, 2 es papel, 3 es tijera. Mostrar la elección de cada una de las partes.

jugador=prompt("1 es piedra, 2 es papel, 3 es tijera")

function election(val){
    if (val==1){
        return "Piedra";
    } else if (val==2){
        return "Papel";
    } else if (val==3){
        return "Tijera";
    }
}

alert("El jugador eligió " + election(jugador))
alert("La PC eligió " + election(pc))

/*if (jugador==1){
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
} */

//COMBATES

if (jugador == pc){
    alert("EMPATE");
} else if ((jugador==1 && pc==3) || (jugador==2 && pc==1) || (jugador==3 && pc==2)){
    alert("GANASTE");
} else{
    alert("PERDISTE");
}
