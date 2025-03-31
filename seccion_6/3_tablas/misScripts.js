function multiplicar(){
    let elementoTextoTabla = document.getElementById("textoTabla")
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    elementoTablaMultiplicar.innerText = "";

    for(x=1; x<=10; x++){
        let numeroResultado = numeroTabla * x;

        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado

        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}