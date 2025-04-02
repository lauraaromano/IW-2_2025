 //criar uma variável que vai receber um array com todas as tags p
 var paragrafos = document.getElementsByTagName("p");
//  console.log(paragrafos);
var cores =["blue","red","green" , "yellow"];
var i;

function mudar_cor(){
    for (i=0; i<paragrafos.length; i++){
        paragrafos[i].style.backgroundColor = cores[i];
    }
}
