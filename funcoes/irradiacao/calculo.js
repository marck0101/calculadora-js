function getCEP() {
    var cep = document.getElementById("cep").value;
    if (cep.length > 7) {
        var urlApi = "https://viacep.com.br/ws/" + cep + "/json/";
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", urlApi, false);
        xhttp.send(); //A execução do script para aqui até a requisição retornar do servidor
        var retorno = JSON.parse(xhttp.responseText);
        console.log("retorno da API: ", xhttp.responseText);
        console.log("cep: ", retorno.cep);
        console.log("localidade: ", retorno.localidade);
        console.log("uf: ", retorno.uf);
        document.getElementById("localidade").innerHTML = retorno.localidade + "/" + retorno.uf;
        var localidade = document.getElementById("localidade").innerHTML = retorno.localidade;
        console.log("a localidade é: " + localidade);
        //getLocalidade(localidade)
    } else {
        document.getElementById("localidade").innerHTML = "cep invalido";
    }
    return localidade
}

function getLocalidade(localidade) {
    console.log("entrou na funcao getLocalidade")

    // var localidade = document.getElementById("localidade").value;
    console.log("A locaclidade é " + localidade)
    return localidade
}


function consumoMensal() {
    console.log("entrou na funcao consumoMensal")

    var contaMes = document.getElementById("contaMes").value;
    var tarifa = document.getElementById("tarifa").value;
    var cm = 0;
    var quo = Math.floor(contaMes / cm);
    var rem = contaMes % cm;

    if ((contaMes != 0) && (tarifa != 0)) {
        cm = contaMes / tarifa;
        console.log("A media do consumo mensal e " + cm + "kWp");
    } else {
        alert("insira o valor nos campos");
    }
    return cm

}


function irradJson(localidade) {
    console.log("entrou na funcao irradJson")
    console.log("localidade recebida " + localidade)

    var json = JSON.parse(irradiacao);
    var indIrrad = "";
    json.map((item) => {
        // o map vai buscar o item que o teste está carregando, no caso o número e vai printar no
        if ((item.NAME === localidade)) {
            console.log("A irradiação anual de", item.NAME, "é: ", item.ANNUAL)
            indIrrad = item.ANNUAL;
        }
    });
    return indIrrad

}

function picoSistema(indIrrad, cm) {
    console.log("entrou na funcao picoSistema")

    if (cm != 0) {
        // var consumoMensal = 100;
        var potenciaPico = 1000;
        var eficienciaSistema = 0.83;
        // var indiceIrradiacao = 0.5;
        potenciaPico = cm / (eficienciaSistema * indIrrad * (365 / 12));
        console.log("o pico do sistema e: " + potenciaPico);
    }
    return potenciaPico
}



function maeFunction() {
    console.log("entrou na funcao maeFunction")
    var localidade = getCEP();
    // var localidade = getLocalidade(localidade);
    var indIrrad = irradJson(localidade);
    var cm = consumoMensal();
    var potenciaPico = picoSistema(indIrrad, cm);
}

// function maeFunction() {
//     var localidade = getLocalidade();
//     var cm = consumoMensal();
//     var irradSolar = irradJson(localidade);
//     picoSistema(irradSolar, cm);
// }

