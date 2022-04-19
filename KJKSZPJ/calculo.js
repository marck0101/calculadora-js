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
    } else {
        document.getElementById("localidade").innerHTML = "cep invalido";
    }
    return localidade
}

function getLocalidade() {
    console.log("entrou na funcao getLocalidade")
    var endereco = document.getElementById("localidade").value
    return endereco
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

function irradJson(endereco) {
    console.log("entrou na funcao irradJson")
    console.log("localidade recebida " + endereco)
    var json = JSON.parse(irradiacao);
    var indIrrad = "";
    json.map((item) => {
        // o map vai buscar o item que o teste está carregando, no caso o número e vai printar no
        if ((item.NAME === endereco)) {
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

function areaEstimada(potenciaPico) {
    console.log("potencia --> Pico", potenciaPico)
    //let potenciaPico = 100;
    let areaSistema = 0;
    let potenciaModulo = 10;
    let areaModulo = 2;
    let fatorSolo = 2.3;
    let fatorTelhado = 1.5;
    let local = document.getElementById("local").value;

    if (local === "empresa") {
        (areaSistema = (potenciaPico / potenciaModulo) * ((areaModulo * areaModulo) * fatorTelhado));
        console.log("Aqui acessou")
        console.log("fator telhado com area estimada: " + areaSistema)
    } else {
        (areaSistema = (potenciaPico / potenciaModulo) * ((areaModulo * areaModulo) * fatorSolo));
        console.log("fator solo com area estimada: " + areaSistema)
    }
}

function maeFunction() {
    console.log("entrou na funcao maeFunction")
    // console.log(getLocalidade())
    var endereco = getCEP()
    // var localidade = getLocalidade(localidade);
    var indIrrad = irradJson(endereco);
    var cm = consumoMensal();
    var potenciaPico = picoSistema(indIrrad, cm);

   console.log( areaEstimada(potenciaPico));
}