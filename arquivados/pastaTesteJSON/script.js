
// aqui está chamando os arquivos de outro local do projeto
<script type="text/javascript" src="./Testejson.js"></script>
// aqui chama o arquivo json que agora é um texto de volta para json
const json = JSON.parse(irradiacao);
// o var do município vai armazenar o município do cep que o cliente digitar
var municipio = "";

json.map((item) => {
    // o map vai buscar o item que o teste está carregando, no caso o número e vai printar no console
    if ((item.NAME === "Panambi") && (item.STATE === "RIO GRANDE DO SUL")) {
        console.log("A irradiação anual de", item.NAME, "é: ", item.ANNUAL)
    }
});




