function funcao1() {
    console.log("iniciou o sistema");
}

function funcao2(param1) {
    console.log("bem vindo ", param1);
}

function funcao3(param1, param2) {
    console.log(" idade ", param1, " sexo ", param2)
}

function funcao4(param1, param2) {
    var result = param1 + param2;
    return result;
}

function funcao5() {
    var a = "ab";
    var b = "cd";
    return a + b;
}

function funcao0() {
    funcao1();

    var nome = "Roberto"

    funcao2(nome);

    funcao3("30", "Masculino");

    console.log(funcao4(50, 20))
    var teste = funcao4(100, 50)
    console.log(teste)

    console.log(funcao5(), teste)
}