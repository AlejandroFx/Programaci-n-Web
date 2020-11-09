console.log("Hola a todos")

/* Variables: var y let

var: cuando la variable tendrá un valor "variable"
let: constante

*/

var mes= "Octubre";
console.log(typeof(mes))

var dia= 21;
console.log(typeof(dia));

var esFestivo;
esFestivo= null;
console.log(typeof(esFestivo))

function suma(a, b){
   
    document.getElementById('resultado').innerHTML= a + b;
    alert("En hiciste Clic")
}

//Local Storage (no se eliminan los datos almacenados en una llave)

var imprimir= function(dato){
    document.getElementById("valor").innerHTML=dato;

}

var aumentarNumero= function(){
    localStorage.contador++
    imprimir(localStorage.contador)
}

var reiniciar = function(){
    localStorage.contador=0;
    imprimir(localStorage.contador)
}

var eliminar = function(){
    localStorage.removeItem("contador");
}


if(typeof(Storage)!="undefined"){
    if(localStorage.contador){
        imprimir(localStorage.contador);
    }else{
        localStorage.contador=0;
    }
}