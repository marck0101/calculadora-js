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

function picoSistema(cm) {
    if (cm != 0) {
        // var consumoMensal = 100;
        var potenciaPico = 1000;
        var eficienciaSistema = 5;
        var indiceIrradiacao = 0.5;

        potenciaPico = cm / (eficienciaSistema * indiceIrradiacao * (365 / 12));
        console.log("o pico do sistema e: " + potenciaPico);

        areaEstimada(potenciaPico);
    }
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
    consumoMensal();
}

