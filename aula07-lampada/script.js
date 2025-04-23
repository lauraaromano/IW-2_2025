// Seleciona os elementos 

const lampada = document.getElementById("lampada"); 
const btnLigar = document.getElementById("ligar"); 
const btnDesligar = document.getElementById("desligar"); 
const estadoLampada = document.getElementById("estadoLampada");


// Funções para ligar e desligar a lâmpada 
function ligarLampada() { 
    lampada.src = "lampada-ligada.png"; 
    lampada.alt = "Lâmpada Ligada"; 
    document.body.style.backgroundColor = "rgb(248, 193, 210)";
    estadoLampada.innerText = "A lâmpada está ligada.";
} 

function desligarLampada() { 
    lampada.src = "lampada-desligada.png"; 
    lampada.alt = "Lâmpada Desligada"; 
    document.body.style.backgroundColor = "rgb(95, 70, 78)";
    estadoLampada.innerText = "A lâmpada está desligada.";
} 

// Adiciona os eventos aos botões 
btnLigar.addEventListener("click", ligarLampada); 
btnDesligar.addEventListener("click", desligarLampada);