

function JUEGO (jugador,maquina){

//usamos puerta logica and (&&)

if(jugador == maquina){
    console.log("EMPATE")
 }
else if(jugador == piedra && maquina== tijera){
    console.log("GANA JUGADOR")
}

else if(jugador== papel && maquina == piedra){
    console.log("GANA JUGADOR")
}

else if (jugador== tijera && maquina == papel){
    console.log("GANA JUGADOR")
}

//Usamos puerta logica or ||

if(jugador==maquina){
    console.log("EMPATE")
}

else if(
    (jugador==piedra && maquina==tijera)
    (jugador==papel && maquina== piedra)
    (jugador==tijera && maquina==papel)
){
    console.log("GANA JUGADOR")
}else{
    console.log("GANA MAQUINA")
}

let jugador ="piedra"; let maquina="papel"
    juego(jugador1,maquina1);
let jugador= "papel"; let maquina= "tijera"
    juego(jugador2,maquina2);



}







