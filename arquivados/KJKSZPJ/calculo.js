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
        var potenciaPico = "";
        var eficienciaSistema = 0.83;
        potenciaPico = cm / (eficienciaSistema * indIrrad * (365 / 12) * 1000);
    }
    return potenciaPico
}

function areaEstimada(potenciaPico) {
    console.log("entou o valor de potencia --> Pico", potenciaPico)
    let areaSistema = "";
    let potenciaModulo = 450;
    let areaModulo = 2;
    let fatorSolo = 2.3;
    let fatorTelhado = 1.5;
    let local = document.getElementById("local").value;
    if (local === "empresa") {
        (areaSistema = (potenciaPico / potenciaModulo) * ((areaModulo * areaModulo) * fatorTelhado));
        console.log("fator telhado com area estimada: " + areaSistema)
    } else {
        (areaSistema = (potenciaPico / potenciaModulo) * ((areaModulo * areaModulo) * fatorSolo));
        console.log("fator solo com area estimada: " + areaSistema)
    }
    return areaSistema
}

function energiaGeradaAno(indIrrad, potenciaPico) {
    var geracaoAno = "";
    var eficienciaSistema = 0.83;
    geracaoAno = potenciaPico * eficienciaSistema * indIrrad * 365
    console.log("energia gerada no ano " + geracaoAno)
    return geracaoAno

}

function energiaGeradaMes(geracaoAno) {
    var geracaoMes = 0;
    geracaoMes = geracaoAno / 12
    console.log("A geracao de energia mensal é ", geracaoMes)
    return geracaoMes
}

function exibeGrid(potenciaPico, geracaoMes, geracaoAno, areaSistema) {
    exibe =

        "<div>" +
        "<div>" + potenciaPico + "</div> <!--1-->" +
        "</div>" +

        "<div>" +
        "<div>Tamanho do sistema indicado" + geracaoMes + "</div> <!--2-->" +
        "</div>" +

        "<div>" +
        "<div>Potencia instalada" + geracaoAno + "</div><!--3-->" +
        "</div>" +

        "<div>" +
        "<div>economia mensal" + areaSistema + "</div> <!--1-->" +
        "</div>" +

        "<div>" +
        "<div>Quantidade de módulos " + geracaoMes + "</div><!--2-->" +
        "</div>" +

        "<div>" +
        "<div>Média de produção mensal" + geracaoMes + "</div><!--3-->" +
        "</div>" +

        "<div>" +
        "<div>valor aproximado do investimento" + geracaoMes + "</div> <!--1-->" +
        "</div>" +

        "<div>" +
        "<div>Área estimada" + geracaoMes + "</div><!--2-->" +
        "</div>" +


        `<div>
        asyuid
        ${potenciaPico}
        </div>`;

    document.getElementById("resultado2").innerHTML = exibe;
}


function maeFunction() {
    console.log("entrou na funcao maeFunction")

    var endereco = getCEP()

    var indIrrad = irradJson(endereco);
    var cm = consumoMensal();
    var potenciaPico = picoSistema(indIrrad, cm);
    console.log(potenciaPico, "   var potenciaPico = picoSistema(indIrrad, cm);")

    console.log(areaEstimada(potenciaPico));
    var geracaoAno = energiaGeradaAno(indIrrad, potenciaPico)
    var geracaoMes = energiaGeradaMes(geracaoAno)
    exibeGrid(potenciaPico, geracaoMes, geracaoAno, areaSistema);
}


// preciso fazer a energia gerada no ano
// ajustar a função mãe