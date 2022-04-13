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

//A função de irradJson vai buscar a média de irradiação do município setado  
function irradJson(localidade) {
    // aqui está chamando os arquivos de outro local do projeto
    // aqui chama o arquivo json que agora é um texto de volta para json
    var json = JSON.parse(irradiacao);
    // o var do município vai armazenar o município do cep que o cliente digitar
    console.log("o Json é : ", json)
    console.log("o Json é : ", json[1].NAME)

    json.map((item) => {
        // o map vai buscar o item que o teste está carregando, no caso o número e vai printar no
        if ((item.NAME === localidade)) {
            console.log("A irradiação anual de", item.NAME, "é: ", item.ANNUAL)
        }
    });
}


