// se nada funcionar, aqui vai ser colocado as funções
//aqui vai estar verificando o CEP que o cliente está digitando 
function fazerRequisicao() {
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
        irradJson(localidade);
    } else {
        document.getElementById("localidade").innerHTML = "cep invalido";
    }
}

//a função captApresenta vai estar capturando todas as informações digitadas pelo usuário e armazenando em variáves
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
        console.log("É uma casa")
    }

    if (contaMes > 0) {
        console.log("O valor da conta mensal é " + contaMes)
    }

    if (tarifa >= 0) {
        console.log("O valor da tarifa é " + tarifa)
    }

    if (kwpConsumo > 0) {
        console.log("A média de kwp consumida é " + kwpConsumo)
    }

    if (nomeCompleto != undefined) {
        console.log("Nome do possível Cliente: " + nomeCompleto)
    }

    if (telefoneContato == 11) {
        console.log("telefone do possível Cliente: " + telefoneContato)
    }

    if (email != null) {
        console.log("email do Cliente: " + email)
    }
    // console.log("Nome do possível Cliente: " + email)

    if (email === "" && nomeCompleto === "" && telefoneContato === "") {
        alert("Preencha todos os campos")
    } else {

        exibe =

            "<div class='grid-container borda2'>" +

            "<div>" +
            "<div>investimento</div> <!--1-->" +
            "</div>" +

            "<div>" +
            "<div>Tamanho do sistema indicado</div> <!--2-->" +
            "</div>" +

            "<div>" +
            "<div>Potencia instalada</div><!--3-->" +
            "</div>" +

            "<div>" +
            "<div>economia mensal</div> <!--1-->" +
            "</div>" +

            "<div>" +
            "<div>Quantidade de módulos</div><!--2-->" +
            "</div>" +

            "<div>" +
            "<div>Média de produção mensal</div><!--3-->" +
            "</div>" +

            "<div>" +
            "<div>valor aproximado do investimento</div> <!--1-->" +
            "</div>" +

            "<div>" +
            "<div>Área estimada</div><!--2-->" +
            "</div>"
        "</div>";

        document.getElementById("resultado2").innerHTML = exibe;

        // fazerRequisicao();

        consumoMensal();
        picoSistema(cm);
        // irradJson();
        // potenciaInstalada();
        // areaPesp()

    }
}

//a função consumoMensal vai estar fazendo o cálculo de Cm, média do consumo mensal
function consumoMensal() {
    var contaMes = document.getElementById("contaMes").value;
    var tarifa = document.getElementById("tarifa").value;
    var cm = 0;
    var quo = Math.floor(contaMes / cm);
    // Math.floor vai fazer o arredondamento do cálculo 
    var rem = contaMes % cm;

    if ((contaMes != 0) && (tarifa != 0)) {
        cm = contaMes / tarifa;
        console.log("A media do consumo mensal e " + cm + "kWp");
        picoSistema(cm);
    } else {
        alert("insira o valor nos campos");
    }
}



//A função de irradJson vai buscar a média de irradiação do município setado  
function irradJson(localidade) {
    // aqui está chamando os arquivos de outro local do projeto
    // aqui chama o arquivo json que agora é um texto de volta para json
    var json = JSON.parse(irradiacao);
    // o var do município vai armazenar o município do cep que o cliente digitar
    // console.log("o Json é : ", json)
    // console.log("o Json é : ", json[1].NAME)

    json.map((item) => {
        // o map vai buscar o item que o teste está carregando, no caso o número e vai printar no
        if ((item.NAME === localidade)) {
            console.log("A irradiação anual de", item.NAME, "é: ", item.ANNUAL)
        }
    });
}


function picoSistema(cm) {
    if (cm != 0) {
        // var consumoMensal = 100;
        var potenciaPico = 1000;
        var eficienciaSistema = 5;
        var irradiacao = document.getElementById("item.ANNUAL").value;

        potenciaPico = cm / (eficienciaSistema * irradiacao * (365 / 12));
        console.log("o pico do sistema e " + potenciaPico);

    }
}


function areaEstimada() {
    if (x = !1) {
        console.log("área estimada do sistema");
    }
}

function energiaAnual() {
    if (x = !1) {
        console.log("potencia do pico do sistema");
    }
}
