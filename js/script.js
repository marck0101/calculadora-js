

function capturaDados(cep, localidade, redeEletrica, local, contaMes, kwpConsumo, nomeCompleto, telefoneContato, email) {
    var cep = document.getElementById("cep").value;
    var localidade = document.getElementById("localidade").value;
    var redeEletrica = document.getElementById("redeEletrica").value; // como saber se é sim ou n o selecionado
    var local = document.getElementById("local").value;
    var contaMes = document.getElementById("contaMes").value;
    var tarifa = document.getElementById("tarifa").value;
    var kwpConsumo = document.getElementById("kwpConsumo").value;
/**/var nomeCompleto = document.getElementById("nomeCompleto").value;
    var telefoneContato = document.getElementById("telefoneContato").value;
    var email = document.getElementById("email").value;

    if (cep.length = 7) {
        console.log("o cep é" + cep.length)
    }

    //  if(localidade === retorno.localidade){
    //      console.log("A localidade é "+ retorno.localidade)
    // }

    if (redeEletrica === "sim") {

        console.log("tem rede elétrica")
    } else {
        console.log("Não possui rede elétrica")
    }

    if (contaMes == 0) {
        console.log("o valor da conta mensal é " + contaMes)
    }

    //
    //
    // vai ser feito todos os calculos aqui
    //aqui puxa todos os dados da tela, todos 

    exibeResultado(cep, localidade, redeEletrica, local, contaMes, tarifa, kwpConsumo, nomeCompleto, telefoneContato, email)


}


function exibeResultado(cep, localidade) {
    exibe =

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
        "</div>";
    //apresenta os dados que for preciso para o usuário 


    document.getElementById("resultado2").innerHTML = exibe;
}

function enviaEmail() {


    // tudo o que precisa ser informado para o comercial
}
