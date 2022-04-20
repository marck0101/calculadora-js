
function mae() {
    var resp = document.getElementById('resp')
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    var c = "";
    var operacao = "";

    if (document.getElementById("soma").checked) {
        c = soma(a, b);
        operacao = "soma"
    }

    if (document.getElementById("subtracao").checked) {
        c = subtracao(a, b);
        operacao = "subtracao"
    }

    if (document.getElementById("multiplicacao").checked) {
        c = multiplicacao(a, b);
        operacao = "multiplicacao"
    }

    if (document.getElementById("divisao").checked) {
        c = divisao(a, b);
        operacao = "divisao"
    }

    console.log("O resultado da ", operacao, " é:", c)
    resp.innerHTML = c;
}

function soma(a, b) {
    c = a + b
    return c
}

function subtracao(a, b) {
    c = a - b
    return c
}

function multiplicacao(a, b) {
    c = a * b
    return c
}

function divisao(a, b) {
    c = a / b
    return c
}