var dc1 = document.getElementById("c1");
var dc2 = document.getElementById("c2");
var dc3 = document.getElementById("c3");
var dc4 = document.getElementById("c4");
var dc5 = document.getElementById("c5");
var dc6 = document.getElementById("c6");

// console.log(dc1); // aquiu mostra todas as informações/propriedades
// console.log(dc1.id);// aqui mostra o id
// console.log(dc1.innerHTML);// aqui mostra o texto do elemento

// dc1.innerHTML = "HTML 5 - Anderson";

var todosElementos = [dc1,dc2,dc3,dc4,dc5,dc6];
// console.log(todosElementos);

function altera_texto(){
     for(d of todosElementos){
        d.innerHTML = "alterado";
     }// altera todos

    dc1.style.backgroundColor = 'blue';//altera a cor de uma div especifica
} 






    

