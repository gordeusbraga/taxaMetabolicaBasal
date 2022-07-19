
function enviar(){
    var genero = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var idade = document.getElementById("idade").value;
    console.log(genero, altura, peso, idade);
    if(genero==m){
       let tmb = (66 + ((13.7 * Number(peso)) + ( 5 * Number(altura)) - (6.8 * Number(idade))));
       document.getElementById("tmb").innerText = tmb;
    }    
}
