
function mae() {
    console.log("entrou na F. mae")

    var resp = document.getElementById('resp')

    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = "";

    // console.log("o valor de A " + a)
    // console.log("o valor de b " + b)

    if (document.getElementById("soma").checked) {
        console.log("o resultado da soma é " + soma(a, b))
        // resp.innerHTML = c;
    }

    if (document.getElementById("subtracao").checked) {

        console.log("o resultado da subtracao é " + subtracao(a, b))
        // resp.innerHTML = c;
    }

    if (document.getElementById("multiplicacao").checked) {
        c = a * b;
        console.log("o resultado da multiplicacao é " + multiplicacao(a, b))
        // resp.innerHTML = c;
    }

    if (document.getElementById("divisao").checked) {
        c = a / b;
        console.log("o resultado da divisao é " + divisao(a, b))
        // resp.innerHTML = c;
    }

    resp.innerHTML = c;
}

function soma(a, b) {
    console.log("entrou na soma")
    c = a + b
    console.log("o c é " + c)
    return c
}

function subtracao(a, b) {
    console.log("entrou na subtracao")
    c = a - b
    console.log("o c é " + c)
    return c
}
function multiplicacao(a, b) {
    console.log("entrou na multiplicacao")
    c = a * b
    console.log("o c é " + c)
    return c
}

function divisao(a, b) {
    console.log("entrou na divisao")
    c = a / b
    console.log("o c é " + c)
    return c
}