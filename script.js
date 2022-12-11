//Creacion de variables
let selectPlayerButton=document.getElementById("player_selectbutton");
let bounou=document.getElementById("bounou");
let mbappe=document.getElementById("mbappe");
let neymar=document.getElementById("neymar");
let enzo=document.getElementById("enzo");
let maguire=document.getElementById("maguire");
let jordi=document.getElementById("jordi");

//Funcion para confirmar selección del jugador
function handleConfifmPlayerSelection(){
    if (bounou.checked==true){
        alert("Seleccionaste a Yassine Bounou")
    }
    else if (mbappe.checked==true){
        alert("Seleccionaste a Kylian Mbappe")
    }
    else if (neymar.checked==true){
        alert("Seleccionaste a Neymar")
    }
    else if (enzo.checked==true){
        alert("Seleccionaste a Enzo Fernandez")
    }
    else if (maguire.checked==true){
        alert("Seleccionaste a Harry Maguire")
    }
    else if (jordi.checked==true){
        alert("Seleccionaste a Jordi Alba")
    }
    else{
        alert("Debes seleccionar una opción para poder continuar")
    }
}

//Event listener para ejecutar confirmación del jugador
selectPlayerButton.addEventListener("click", handleConfifmPlayerSelection);

