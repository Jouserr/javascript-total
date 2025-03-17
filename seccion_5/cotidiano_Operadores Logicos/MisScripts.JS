function comparar() {
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
   
    let resultado = Number(numero1) > Number(numero2);
   
    document.getElementById("resultado").textContent = resultado;
}