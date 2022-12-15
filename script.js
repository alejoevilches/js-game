//Creacion de variables globales para botones y otros
let selectPlayerButton=document.getElementById("player_selectbutton");
let shoot=document.getElementById("shoot_button");
let speed=document.getElementById("speed_button");
let defense=document.getElementById("defense_button");
let restartButton=document.getElementById("restart_button")
let playersList=["Yassine Bounou", "Kylian Mbappe", "Neymar", "Enzo Fernandez", "Harry Maguire", "Luis Suarez"]
let attackList=["Disparo", "Defensa", "Velocidad"];
let attackSection=document.getElementById("attack_section")
let playerCurrentLives=3
let pcCurrentLives=3
let playerAttackSelection
let pcAttackSelection
let result

//Creacion de variables de los elementos dinámicos del DOM
let playerLives=document.getElementById("player_lives");
let pcLives=document.getElementById("pc_lives");
let p1Player=document.getElementById("p1_player")
let pcPlayer=document.getElementById("pc_player")
let pcAttack=document.getElementById("pc_attack");
let resultAlert=document.getElementById("result");

function changeDisplay(section){
    section.style.display="block";
}

//Funcion para crear numeros aleatorios
function random(min, max){
    Math.floor(Math.random()*(max-min+1))+min;
}

//Funcion para confirmar selección del jugador
function handleConfifmPlayerSelection(){
    let bounou=document.getElementById("bounou");
    let mbappe=document.getElementById("mbappe");
    let neymar=document.getElementById("neymar");
    let enzo=document.getElementById("enzo");
    let maguire=document.getElementById("maguire");
    let suarez=document.getElementById("suarez");
    if (bounou.checked==true){
        alert("Seleccionaste a Yassine Bounou")
        p1Player.innerText="Yassine Bounou";
    }
    else if (mbappe.checked==true){
        alert("Seleccionaste a Kylian Mbappe")
        p1Player.innerHTML="Kylian Mbappe";
    }
    else if (neymar.checked==true){
        alert("Seleccionaste a Neymar")
        p1Player.innerHTML="Neymar";
    }
    else if (enzo.checked==true){
        alert("Seleccionaste a Enzo Fernandez")
        p1Player.innerHTML="Enzo Fernandez";
    }
    else if (maguire.checked==true){
        alert("Seleccionaste a Harry Maguire")
        p1Player.innerHTML="Harry Maguire";
    }
    else if (suarez.checked==true){
        alert("Seleccionaste a Luis Suarez")
        p1Player.innerHTML="Luis Suarez";
    }
    else{
        alert("Debes seleccionar una opción para poder continuar");
    }
    pcPlayerSelection();
    attackSelect();
}

//Función para que la PC elija un jugador
function pcPlayerSelection(){
    let selection=Math.floor(Math.random()*(5-0+1))+0;
    pcPlayer.innerText=playersList[selection];
}


//Función para seleccionar el ataque del jugador y ejecutar la batalla
function attackSelect(){
    defense.addEventListener("click", defenseSelection);
    speed.addEventListener("click", speedSelection);
    shoot.addEventListener("click", shootSelection)
    let playerAttack=document.getElementById("player_attack");

    function defenseSelection(){
        playerAttackSelection="Defensa"
        playerAttack.innerHTML=playerAttackSelection;
        pcAttackSelect();
        pcAttack.innerHTML=pcAttackSelection
        battle();
    }

    function speedSelection(){
        playerAttackSelection="Velocidad"
        playerAttack.innerHTML=playerAttackSelection;
        pcAttackSelect();
        pcAttack.innerHTML=pcAttackSelection
        battle();
    }

    function shootSelection(){
        playerAttackSelection="Disparo"
        playerAttack.innerHTML=playerAttackSelection;
        pcAttackSelect();
        pcAttack.innerHTML=pcAttackSelection
        battle();
    }
}

//Funcion para seleccionar el ataque de la PC
function pcAttackSelect(){
    let selection=Math.floor(Math.random()*(2-0+1))+0;
    pcAttackSelection=attackList[selection];
}

//Función para reiniciar el juego
function restartGame(){
    location.reload();
}

/* Función de batallas entre personajes. Tambien alerta si un jugador ganó o perdió
MPORTANTE: En este juego Defensa le gana a Velocidad, Disparo le gana a Defensa y Velocidad le gana a Disparo */
function battle(){
    if (playerAttackSelection === pcAttackSelection){
        result="EMPATE" 
    }  else if ((playerAttackSelection=="Defensa" && pcAttackSelection=="Velocidad") || (playerAttackSelection=="Disparo" && pcAttackSelection=="Defensa") || (playerAttackSelection=="Velocidad" && pcAttackSelection=="Disparo")) {
        result="GANASTE";
        pcCurrentLives--
        pcLives.innerHTML=pcCurrentLives;
    } else {
        result="PERDISTE";
        playerCurrentLives--
        playerLives.innerHTML=playerCurrentLives;
    }
    resultAlert.innerText=result;

    if (pcCurrentLives==0){
        alert("GANASTE EL JUEGO!")
        reset.style.display="block";
        defense.disabled=true; 
        shoot.disabled=true;
        speed.disabled=true;
        } else if (playerCurrentLives==0) { 
        alert("PERDISTE")
        reset.style.display="block";
        defense.disabled=true; 
        shoot.disabled=true;
        speed.disabled=true;
    }
}

//Event listeners para ejecutar confirmaciónes del jugador
selectPlayerButton.addEventListener("click", handleConfifmPlayerSelection);