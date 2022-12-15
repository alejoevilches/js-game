//Creacion de variables globales para botones y otros
let selectPlayerButton=document.getElementById("player_selectbutton");
let shoot=document.getElementById("shoot_button");
let speed=document.getElementById("speed_button");
let defense=document.getElementById("defense_button");
let playersList=["Yassine Bounou", "Kylian Mbappe", "Neymar", "Enzo Fernandez", "Harry Maguire", "Luis Suarez"]
let attackList=["Disparo", "Defensa", "Velocidad"];
let playerAttackSelection
let pcAttackSelection

//Creacion de variables de los elementos dinámicos del DOM
let playerLives=document.getElementById("player_lives");
let pcLives=document.getElementById("pc_lives");
let p1Player=document.getElementById("p1_player")
let pcPlayer=document.getElementById("pc_player")
let pcAttack=document.getElementById("pc_attack");

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

//Función para seleccionar el ataque del jugador
function attackSelect(){
    defense.addEventListener("click", defenseSelection);
    speed.addEventListener("click", speedSelection);
    shoot.addEventListener("click", shootSelection)
    let playerAttack=document.getElementById("player_attack");

    function defenseSelection(){
        alert("Elegiste DEFENSA");
        playerAttackSelection="Defensa"
        playerAttack.innerHTML=playerAttackSelection;
        pcAttackSelect();
        pcAttack.innerHTML=pcAttackSelection
    }

    function speedSelection(){
        alert("Elegiste VELOCIDAD");
        playerAttackSelection="Velocidad"
        playerAttack.innerHTML=playerAttackSelection;
        pcAttackSelect();
        pcAttack.innerHTML=pcAttackSelection
    }

    function shootSelection(){
        alert("Elegiste DISPARO");
        playerAttackSelection="Disparo"
        playerAttack.innerHTML=playerAttackSelection;
        pcAttackSelect();
        pcAttack.innerHTML=pcAttackSelection
    }
}

//Funcion para seleccionar el ataque de la PC
function pcAttackSelect(){
    let selection=Math.floor(Math.random()*(2-0+1))+0;
    pcAttackSelection=attackList[selection];
    console.log(pcAttackSelection);
}

//Event listeners para ejecutar confirmaciónes del jugador
selectPlayerButton.addEventListener("click", handleConfifmPlayerSelection);

