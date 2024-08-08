console.log("Script funcionando")

function soma(a, b) {
    return a + b
}

function gerarResultado() {
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    alert("calculando...")

    const resultado = soma(numero1, numero2)

    alert("O resultado é: " + resultado)

    document.getElementById("txt-resultado").innerText = "Resultado: " + resultado
}
