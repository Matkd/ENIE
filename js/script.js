let cont = 0;
let suma = 0;
let historial = document.querySelector("#historial");
let promedio = document.querySelector("#promedio");

    function agregar(){
        let nombre = document.querySelector("#nombre").value;
        let gasto = document.querySelector("#gasto").value;

        historial.innerHTML = historial.innerHTML + nombre+": $"+gasto+"<br>";

        suma = suma + parseInt(gasto);

        cont = cont + 1;

        promedio.innerHTML = "Gasto total: $ "+suma+"<br>Cada uno debe poner: $"+(Math.round(suma / cont));
    }

document.querySelector("button").addEventListener("click",function(evento){
    evento.preventDefault(); evento.stopPropagation();
    agregar();
});
