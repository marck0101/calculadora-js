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


function captApresenta(cep, localidade, redeEletrica, local, contaMes, kwpConsumo, nomeCompleto, telefoneContato, email) {
    var cep = document.getElementById("cep").value;
    var localidade = document.getElementById("localidade").value;
    var redeEletrica = document.getElementById("redeEletrica").value; // como saber se é sim ou n o selecionado
    var local = document.getElementById("local").value;
    var contaMes = document.getElementById("contaMes").value;
    var tarifa = document.getElementById("tarifa").value;
    var kwpConsumo = document.getElementById("kwpConsumo").value;
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var telefoneContato = document.getElementById("telefoneContato").value;
    var email = document.getElementById("email").value;

    if (cep.length > 7) {
        // console.log("o cep é " + cep)
    }

    //  if(localidade === retorno.localidade){
    //      console.log("A localidade é "+ retorno.localidade)
    // }


    if (redeEletrica === "sim") {

        console.log("tem rede elétrica")
    } else {
        console.log("Não possui rede elétrica")
    }

    if (local === "empresa") {
        console.log("Rede empresarial.")
    } else {
        console.log("outro")
    }

    if (contaMes > 0) {
        console.log("O valor da conta mensal é " + contaMes)
        if (tarifa >= 0) {
            console.log("O valor da tarifa é " + tarifa)
            if (kwpConsumo > 0) {
                console.log("A média de kwp consumida é " + kwpConsumo)
                if ((nomeCompleto != undefined) && (nomeCompleto != "")) {
                    console.log("Nome do possível Cliente: " + nomeCompleto)
                    if ((telefoneContato != undefined) && (telefoneContato != "") && (telefoneContato.length === 11)) {
                        console.log("telefone do possível Cliente: " + telefoneContato)
                        if ((email != undefined) & (email != "")) {
                            console.log("email do Cliente: " + email)

                        }

                    }
                }
            }
        }

    }

}

function getLocalidade() {
    console.log("entrou na funcao getLocalidade")
    var endereco = document.getElementById("localidade").value
    return endereco
}


// console.log("Nome do possível Cliente: " + email)


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

// //a função captApresenta vai estar capturando todas as informações digitadas pelo usuário e armazenando em variáves
// function captApresenta(cep, localidade, redeEletrica, local, contaMes, kwpConsumo, nomeCompleto, telefoneContato, email) {
//     var cep = document.getElementById("cep").value;
//     var localidade = document.getElementById("localidade").value;
//     var redeEletrica = document.getElementById("redeEletrica").value; // como saber se é sim ou n o selecionado
//     var local = document.getElementById("local").value;
//     var contaMes = document.getElementById("contaMes").value;
//     var tarifa = document.getElementById("tarifa").value;
//     var kwpConsumo = document.getElementById("kwpConsumo").value;
//     var nomeCompleto = document.getElementById("nomeCompleto").value;
//     var telefoneContato = document.getElementById("telefoneContato").value;
//     var email = document.getElementById("email").value;

//     if (cep.length > 7) {
//         // console.log("o cep é " + cep)
//     }

//     //  if(localidade === retorno.localidade){
//     //      console.log("A localidade é "+ retorno.localidade)
//     // }


//     if (redeEletrica === "sim") {

//         console.log("tem rede elétrica")
//     } else {
//         console.log("Não possui rede elétrica")
//     }

//     if (local === "empresa") {
//         console.log("Rede empresarial.")
//     } else {
//         console.log("É uma casa")
//     }

//     if (contaMes > 0) {
//         console.log("O valor da conta mensal é " + contaMes)
//     }

//     if (tarifa >= 0) {
//         console.log("O valor da tarifa é " + tarifa)
//     }

//     if (kwpConsumo > 0) {
//         console.log("A média de kwp consumida é " + kwpConsumo)
//     }

//     if (nomeCompleto != undefined) {
//         console.log("Nome do possível Cliente: " + nomeCompleto)
//     }

//     if (telefoneContato == 11) {
//         console.log("telefone do possível Cliente: " + telefoneContato)
//     }

//     if (email != null) {
//         console.log("email do Cliente: " + email)
//     }
//     // console.log("Nome do possível Cliente: " + email)

//     if (email === "" && nomeCompleto === "" && telefoneContato === "") {
//         alert("Preencha todos os campos")
//     } else {

//         exibe =

//             "<div class='grid-container borda2'>" +

//             "<div>" +
//             "<div>investimento</div> <!--1-->" +
//             "</div>" +

//             "<div>" +
//             "<div>Tamanho do sistema indicado</div> <!--2-->" +
//             "</div>" +

//             "<div>" +
//             "<div>Potencia instalada</div><!--3-->" +
//             "</div>" +

//             "<div>" +
//             "<div>economia mensal</div> <!--1-->" +
//             "</div>" +

//             "<div>" +
//             "<div>Quantidade de módulos</div><!--2-->" +
//             "</div>" +

//             "<div>" +
//             "<div>Média de produção mensal</div><!--3-->" +
//             "</div>" +

//             "<div>" +
//             "<div>valor aproximado do investimento</div> <!--1-->" +
//             "</div>" +

//             "<div>" +
//             "<div>Área estimada</div><!--2-->" +
//             "</div>"
//         "</div>";

//         document.getElementById("resultado2").innerHTML = exibe;
//     }

// }

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


function exibeGrid(cm, potenciaPico, areaSistema, geracaoAno) {
    exibe =

        "<div>" +
        "<div>" + cm + "</div> <!--1-->" +
        "</div>" +

        "<div>" +
        "<div>" + potenciaPico + "</div> <!--2-->" +
        "</div>" +

        "<div>" +
        "<div>" + areaSistema + "</div><!--3-->" +
        "</div>" +

        "<div>" +
        "<div>" + geracaoMes + "</div> <!--1-->" +
        "</div>" +

        "<div>" +
        "<div>" + geracaoAno + "</div> <!--1-->" +
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
    console.log(areaEstimada(potenciaPico));
    var geracaoAno = energiaGeradaAno(indIrrad, potenciaPico)
    var geracaoMes = energiaGeradaMes(geracaoAno)
    exibeGrid(cm, potenciaPico, areaSistema, geracaoMes, geracaoAno);
}

