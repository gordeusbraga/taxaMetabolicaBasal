const enviar = document.getElementById("enviar");
enviar.addEventListener("click", function(e){
    e.preventDefault();
    var genero = document.getElementById("sexo").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var idade = document.getElementById("idade").value;
    if(genero=="m"){
        let tmb = (66 + ((13.7 * Number(peso)) + ( 5 * Number(altura)) - (6.8 * Number(idade))));
        document.getElementById("tmb").innerHTML = tmb;
        let pouca = tmb*1.33;
        document.getElementById("pouca").innerHTML = pouca.toFixed(2);
        let moderada = tmb*1.5;
        document.getElementById("moderada").innerHTML = moderada.toFixed(2);
        let intensa = tmb* 1.7;
        document.getElementById("intensa").innerHTML = intensa.toFixed(2);

        
     } 
     if(genero=="f"){
        let tmb = (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
        document.getElementById("tmb").innerHTML = tmb;
        let pouca = tmb*1.375;
        document.getElementById("pouca").innerHTML = pouca.toFixed(2);
        let moderada = tmb*1.55;
        document.getElementById("moderada").innerHTML = moderada.toFixed(2);
        let intensa = tmb* 1.725;
        document.getElementById("intensa").innerHTML = intensa.toFixed(2);

     }
})
