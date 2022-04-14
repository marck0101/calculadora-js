function consumoMensal(contaMes, tarifa) {
    var contaMes = document.getElementById("contaMes").value;
    var tarifa = document.getElementById("tarifa").value;
    var divisao = 0;
    var quo = Math.floor(contaMes / divisao);
    var rem = contaMes % divisao;


    if ((contaMes != 0) && (tarifa != 0)) {
        divisao = contaMes / tarifa;
        alert("A media do consumo mensal e " + divisao);

    }
}
function potenciaInstalada() {

}

function areaPesp() {

}