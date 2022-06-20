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
    document.getElementById("localidade").innerHTML =
      retorno.localidade + "/" + retorno.uf;
    var localidade = (document.getElementById("localidade").innerHTML =
      retorno.localidade);
    console.log("a localidade é: " + localidade);
  } else {
    document.getElementById("localidade").innerHTML = "cep invalido";
  }
  return localidade;
}

function captApresenta(
  cep,
  localidade,
  redeEletrica,
  local,
  contaMes,
  // kwpConsumo,
  nomeCompleto,
  telefoneContato,
  email
) {
  var cep = document.getElementById("cep").value;
  // var localidade = document.getElementById("localidade").value;
  var redeEletrica = document.getElementById("redeEletrica").value; // como saber se é sim ou n o selecionado
  var local = document.getElementById("local").value;
  var contaMes = document.getElementById("contaMes").value;
  var tarifa = document.getElementById("tarifa").value;
  // var kwpConsumo = document.getElementById("kwpConsumo").value;
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
    console.log("tem rede elétrica");
  } else {
    console.log("Não possui rede elétrica");
  }

  if (local === "empresa") {
    console.log("Rede empresarial.");
  } else {
    console.log("outro");
  }

  if (contaMes > 0) {
    console.log("O valor da conta mensal é " + contaMes);
    if (tarifa >= 0) {
      console.log("O valor da tarifa é " + tarifa);
      // if (kwpConsumo > 0) {
      //   console.log("A média de kwp consumida é " + kwpConsumo);
      if (nomeCompleto != undefined && nomeCompleto != "") {
        console.log("Nome do possível Cliente: " + nomeCompleto);
        if (telefoneContato != undefined && telefoneContato != "") {
          console.log("telefone do possível Cliente: " + telefoneContato);
          if ((email != undefined) & (email != "")) {
            console.log("email do Cliente: " + email);
          }
        }
      }
    }
  }
}
// }

function getLocalidade() {
  console.log("entrou na funcao getLocalidade");
  var endereco = document.getElementById("localidade").value;
  return endereco;
}

// console.log("Nome do possível Cliente: " + email)

function irradJson(endereco) {
  console.log("entrou na funcao irradJson");
  console.log("localidade recebida " + endereco);
  var json = JSON.parse(irradiacao);
  var indIrrad = "";
  json.map((item) => {
    // o map vai buscar o item que o teste está carregando, no caso o número e vai printar no
    if (item.NAME === endereco) {
      console.log("A irradiação anual de", item.NAME, "é: ", item.ANNUAL);
      indIrrad = item.ANNUAL;
    }
  });
  return indIrrad;
}

function consumoMensal() {
  console.log("entrou na funcao consumoMensal");
  var contaMes = document.getElementById("contaMes").value;
  var tarifa = document.getElementById("tarifa").value.replace(",", ".");
  console.log("tarifaa", tarifa);
  var cm = 0;
  var quo = Math.floor(contaMes / cm);
  var rem = contaMes % cm;
  if (contaMes != 0 && tarifa != 0) {
    cm = contaMes / tarifa;
    console.log("A media do consumo mensal e " + cm + "kWh");
  } else {
    alert("insira o valor nos campos");
  }
  return cm;
}

function picoSistema(indIrrad, cm) {
  console.log("entrou na funcao picoSistema");
  if (cm != 0) {
    var potenciaPico = "";
    var eficienciaSistema = 0.83;
    potenciaPico = cm / ((eficienciaSistema * indIrrad * (365 / 12)) / 1000);
  }
  return potenciaPico;
}

function areaEstimada(potenciaPico) {
  console.log("entou o valor de potencia --> Pico", potenciaPico);
  let areaSistema = 0;
  let potenciaModulo = 545;
  let areaModulo = 2.564;
  let fatorSolo = 2.3;
  let fatorTelhado = 1.5;
  let numeroModulos = 0;
  let local = document.getElementById("local").value;
  numeroModulos = potenciaPico / potenciaModulo;
  if (local === "empresa") {
    areaSistema = numeroModulos * 1000 * fatorTelhado * areaModulo;
    console.log("fator telhado com area estimada: " + areaSistema);
  } else {
    areaSistema = numeroModulos * 1000 * fatorSolo * areaModulo;
    console.log("fator solo com area estimada: " + areaSistema);
  }
  return areaSistema;
}

function energiaGeradaAno(indIrrad, potenciaPico) {
  var geracaoAno = "";
  var eficienciaSistema = 0.83;
  geracaoAno = potenciaPico * eficienciaSistema * (indIrrad / 1000) * 365;
  console.log("energia gerada no ano " + geracaoAno);
  return geracaoAno;
}

/* Máscaras ER */
function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("telefoneContato").onkeyup = function () {
    mascara(this, mtel);
  };
};

function energiaGeradaMes(geracaoAno) {
  var geracaoMes = "";
  geracaoMes = geracaoAno / 12;
  console.log("A geracao de energia mensal é ", geracaoMes);
  return geracaoMes;
}
function exibeGrid(cm, potenciaPico, areaSistema, geracaoMes, geracaoAno) {
  exibe =
    "<div class='borda4'>" +
    "<div class='row'>" +
    "<div class='col'>" +
    "<div class='teste-item1'>" +
    `<svg class="tamanho-icon" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 610 610" version="1.1">
              <g id="layer4" transform="translate(5 -397.36)">
                <g id="g5296">
                  <g id="g6089" transform="matrix(3.3715 0 0 3.4282 -994.77 -1459.3)">
                    <g id="g6081" fill="#4d4d4d">
                      <path id="path6077" transform="translate(13.378 118.84)" d="m393.96 510.94c0 13.947-11.307 25.254-25.254 25.254s-25.254-11.307-25.254-25.254 11.307-25.254 25.254-25.254 25.254 11.307 25.254 25.254z"/>
                      <path id="rect6079" d="m378.04 641.9h8.0812c4.7568 0 8.5863 3.8295 8.5863 8.5863v8.0812c0 4.7568-3.8295 8.5863-8.5863 8.5863h-8.0812c-4.7568 0-8.5863-3.8295-8.5863-8.5863v-8.0812c0-4.7568 3.8295-8.5863 8.5863-8.5863z"/>
                    </g>
                    <path id="rect6085" fill="#fff" transform="rotate(-10.427)" d="m250.82 714.53h12.753c0.41971 0 0.75761 0.3379 0.75761 0.75762s-0.3379 0.75761-0.75761 0.75761h-12.753c-0.41972 0-0.75761-0.33789-0.75761-0.75761s0.33789-0.75762 0.75761-0.75762z"/>
                    <path id="rect6087" fill="#fff" transform="rotate(-10.427)" d="m250.09 718.46h12.753c0.41972 0 0.75761 0.3379 0.75761 0.75762s-0.33789 0.75761-0.75761 0.75761h-12.753c-0.41972 0-0.75761-0.33789-0.75761-0.75761s0.33789-0.75762 0.75761-0.75762z"/>
                 </g>
                  <path id="path6100" d="m418.08 707.36h103.83" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6104" d="m386.22 619.7 40.044-35.063" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6108" d="m295 851.79v105.58" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6112" d="m386.22 820.12 34.483 40.718" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6116" d="m294.7 587.84v-105.58" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6120" d="m188.95 619.51-34.48-40.72" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6124" d="m170.07 707.36h-103.83" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  <path id="path6126" d="m298.71 851.74v105.58" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                  // <path id="path6128" d="m192.65 820.07-40.044 35.063" stroke="#4d4d4d" stroke-linecap="round" stroke-width="20.94px" fill="#4d4d4d"/>
                </g>
              </g>
            </svg>` +
    "<br>" +
    "<h5 class='espacamento'>Consumo mensal médio considerado: " +
    "<br>" +
    cm.toFixed(2) +
    " kWh </h5>" +
    "</div>" +
    "</div>" +
    "<div class='col'>" +
    "<div class='teste-item1'>" +
    `<svg class="tamanho-icon" fill="#4d4d4d" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg2" viewBox="0 0 610 610" version="1.1">
          <g id="layer4" transform="translate(5 -397.36)">
            <path id="path6183" d="m182.89 957.36 162.63-157.08s-50.523-27.274-50.523-32.325c0-5.0508 150.53-128.29 143.46-130.31-7.0711-2.0203-72.731-25.254-66.67-28.284 6.06-3.03 173.21-152 173.21-152h-269.18l-108.69 200.66s118.79 24.07 113.74 29.121c-5.0508 5.0508-103.84 116.34-103.84 116.34s72.528 24.07 69.497 28.111c-3.0305 4.0406-63.64 125.77-63.64 125.77z" fill="#4d4d4d"/>
          </g>
        </svg>` +
    "<br>" +
    "<h5 class='espacamento'>Potencia Pico: " +
    "<br>" +
    potenciaPico.toFixed(2) +
    " kWp </h5>" +
    "</div>" +
    "</div>" +
    "<div class='col'>" +
    "<div class='teste-item1'>" +
    `<div class="tamanho-icon" >
    <svg version="1.1" fill="#4d4d4d" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M256,0C114.841,0,0,114.841,0,256s114.841,256,256,256s256-114.841,256-256S397.159,0,256,0z M256,493.38
			C125.108,493.38,18.62,386.893,18.62,256S125.108,18.62,256,18.62S493.38,125.108,493.38,256S386.892,493.38,256,493.38z"/>
	</g>
</g>
<g>
	<g>
		<path fill="#4d4d4d" d="M256,34.786C134.021,34.786,34.786,134.022,34.786,256S134.021,477.216,256,477.216S477.216,377.979,477.216,256
			S377.979,34.786,256,34.786z M256,458.596c-111.712,0-202.594-90.884-202.594-202.594S144.288,53.406,256,53.406
			c52.513,0,100.422,20.087,136.453,52.976l-36.583,36.583c-27.586-24.439-62.698-37.803-99.87-37.803
			c-83.173,0-150.84,67.666-150.84,150.84s67.666,150.84,150.84,150.84s150.84-67.666,150.84-150.84c0-5.142-4.168-9.31-9.31-9.31
			c-5.142,0-9.31,4.168-9.31,9.31c0,72.906-59.314,132.22-132.22,132.22S123.78,328.907,123.78,256S183.094,123.781,256,123.781
			c32.196,0,62.632,11.434,86.679,32.374l-46.634,46.634c-11.482-8.678-25.4-13.384-40.045-13.384
			c-36.721,0-66.595,29.874-66.595,66.595s29.874,66.596,66.595,66.596c36.721,0,66.596-29.875,66.596-66.596
			c0-5.142-4.168-9.31-9.31-9.31c-5.142,0-9.31,4.168-9.31,9.31c0,26.454-21.522,47.976-47.976,47.976S208.025,282.454,208.025,256
			s21.521-47.975,47.975-47.975c9.654,0,18.871,2.834,26.705,8.105l-33.287,33.287c-3.636,3.636-3.636,9.531,0,13.166
			c1.817,1.817,4.201,2.727,6.583,2.727c2.382,0,4.765-0.909,6.583-2.727L405.62,119.547c32.889,36.031,52.976,83.94,52.976,136.453
			C458.596,367.712,367.712,458.596,256,458.596z"/>
	</g>
</g>
<g>
	<g>
		<circle cx="381.41" cy="202.436" r="9.31"/>
	</g>
</svg>
</div>` +
    "<br>" +
    "<h5 class='espacamento'>Área estimada:" +
    "<br>" +
    areaSistema.toFixed(2) +
    " m²  </h5>" +
    // "<h5>m²</h5>"+
    "</div>" +
    "</div>" +
    "</div>" +
    "<div class=''>" +
    "<div class='row'>" +
    "<div class='col'>" +
    "<div class='teste-item1'>" +
    `<div class="tamanho-icon">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 441.592 441.592" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 441.592 441.592">
  <path fill="#4d4d4d" d="m431.092,419.555h-120.699l41.587-71.626h77.115c5.799,0 10.5-4.701 10.5-10.5v-222.144c0-5.799-4.701-10.5-10.5-10.5h-296.191c-5.799,0-10.5,4.701-10.5,10.5v222.144c0,5.799 4.701,10.5 10.5,10.5h77.116l41.587,71.626h-241.107c-5.799,0-10.5,4.701-10.5,10.5s4.701,10.5 10.5,10.5h420.592c5.799,0 10.5-4.701 10.5-10.5s-4.701-10.5-10.5-10.5zm-91.112-293.77h78.615v53.048h-78.615v-53.048zm0,74.049h78.615v53.047h-78.615v-53.047zm0,74.046h78.615v53.048h-72.462c-0.125-0.002-0.252-0.002-0.377,0h-5.776v-53.048zm-96.958-148.095h75.958v53.048h-75.958v-53.048zm-0,74.049h75.958v53.047h-75.958v-53.047zm-0,74.046h75.958v53.048h-75.958v-53.048zm-21,53.049h-5.778c-0.126-0.002-0.252-0.002-0.377,0h-72.463v-53.049h78.618v53.049zm0-74.049h-78.618v-53.047h78.618v53.047zm0-74.046h-78.618v-53.048h78.618v53.048zm53.867,240.721l-41.586-71.626h93.394l-41.586,71.626h-10.222zm-273.568-343.605c1.433-5.619 7.152-9.011 12.769-7.581l24.321,6.2c4.389-10.301 11.142-19.109 19.435-25.931l-12.829-21.609c-2.96-4.986-1.318-11.429 3.668-14.389 4.987-2.958 11.43-1.318 14.389,3.668l12.828,21.608c9.959-4.016 20.925-5.729 32.072-4.651l6.2-24.319c1.433-5.62 7.155-9.014 12.769-7.581 5.62,1.432 9.014,7.149 7.581,12.768l-6.198,24.312c9.995,4.245 18.775,10.775 25.718,19.129l21.954-12.595c5.03-2.887 11.447-1.147 14.333,3.882 2.886,5.03 1.148,11.447-3.882,14.333l-30.186,17.318c-4.946,2.838-11.252,1.209-14.206-3.667-6.47-10.679-16.682-18.269-28.768-21.384-0.043-0.01-0.086-0.021-0.128-0.032-0.043-0.011-0.085-0.021-0.127-0.033-25.309-6.375-51.111,8.952-57.616,34.229-0.009,0.036-0.018,0.072-0.027,0.107-0.009,0.036-0.019,0.072-0.028,0.107-3.09,12.242-1.251,24.957 5.181,35.824 0.011,0.019 0.022,0.038 0.034,0.057 0.011,0.019 0.022,0.037 0.034,0.056 6.481,10.882 16.806,18.596 29.081,21.725 5.619,1.433 9.013,7.149 7.581,12.768l-8.594,33.717c-1.21,4.749-5.481,7.909-10.167,7.909-0.859,0-1.731-0.106-2.601-0.328-5.62-1.433-9.014-7.149-7.582-12.768l6.197-24.312c-10.121-4.294-18.985-10.926-25.962-19.423l-21.573,12.809c-4.985,2.961-11.427,1.319-14.389-3.668-2.961-4.986-1.318-11.428 3.668-14.389l21.572-12.809c-4.12-10.194-5.699-21.15-4.625-32.092l-24.316-6.197c-5.619-1.432-9.013-7.149-7.581-12.768z"/>
</svg>
          </div>   ` +
    "<br>" +
    "<h5 class='espacamento'>Geração mensal média:" +
    "<br>" +
    geracaoMes.toFixed(2) +
    " kWh  </h5>" +
    // "<h5>kWh</h5>"+
    "</div>" +
    "</div>" +
    "<div class='col'>" +
    "<div class='teste-item1'>" +
    `
    <div class="tamanho-icon" >
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 302.452 302.452" style="enable-background:new 0 0 302.452 302.452;" xml:space="preserve">
 <g>
   <path fill="#4d4d4d" d="M276.658,126.91L159.56,3.474c-2.1-2.215-5.016-3.468-8.072-3.474c-3.055-0.005-5.977,1.245-8.081,3.459L25.813,126.896
     c-3.077,3.23-3.932,7.977-2.176,12.077c1.757,4.096,5.789,6.753,10.242,6.753h16.004v126.199c0,16.855,13.67,30.526,30.53,30.526
     h60.579v-54.937c-16.129-4.483-28.033-19.119-28.033-36.677v-29.68c-5.629,0-10.192-4.563-10.192-10.192
     c0-5.627,4.563-10.191,10.192-10.191h16.552v-22.503c0-4.22,3.423-7.644,7.644-7.644c4.221,0,7.644,3.424,7.644,7.644v22.503
     h15.288v-22.509c0-4.22,3.423-7.644,7.644-7.644c4.22,0,7.644,3.423,7.644,7.644v22.509h14.033c5.629,0,10.192,4.564,10.192,10.191
     c0,5.629-4.563,10.192-10.192,10.192l-0.004,29.685c-0.005,17.558-11.904,32.188-28.028,36.667v54.941h60.589
     c16.86,0,30.525-13.671,30.525-30.526V145.727h16.079c4.454,0,8.48-2.652,10.237-6.743
     C280.569,134.888,279.723,130.145,276.658,126.91z"/>
 </g>
 </svg>
 
    </div> ` +
    "<br>" +
    "<h5 class='espacamento'><a id='teste'>Geração total ano:</a>" +
    "<br>" +
    geracaoAno.toFixed(2) +
    " kWh  </h5>" +
    // "<h5>kWh</h5>"+
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  //...
  //   `
  // <div class="">

  // <div class="teste-item1">
  // <div class="tamanho-icon">
  // <img src="icons/lampada.png"/>
  // </div>
  // <div class="alinhamento">
  // <h5 class="texto">Consumo mensal médio considerado: ${cm.toFixed(2)} kWh<h5/>
  // </div>
  // </div>

  // <div class="teste-item1">
  // <img src="icons/potencia.png"/>
  // <div class="alinhamento">
  // <h5 class="texto">Potência Pico: ${potenciaPico.toFixed(2)} kWp</h5>
  // </div>
  // </div>

  // <div class="teste-item1">
  // <img src="icons/placa.png"/>
  // <div class="alinhamento">
  // <h5 class="texto">Consumo mensal médio considerado: ${areaSistema.toFixed(2)} m²<h5/>
  // </div>
  // </div>

  // <div class="teste-item1"> <a id='teste'></a>
  // <img src="icons/area.png"/>
  // <div class="alinhamento">
  // <h5 class="texto">Consumo mensal médio considerado: ${geracaoMes.toFixed(2)} kWh<h5/>
  // </div>
  // </div>

  // <div class="teste-item1">
  // <img src="icons/ano.png"/><div class="alinhamento">
  // <h5 class="texto">Consumo mensal médio considerado: ${geracaoAno.toFixed(2)} kWh<h5/>
  // </div>
  // </div>

  // </div>
  // `

  document.getElementById("resultado2").innerHTML = exibe;
}

function maeFunction() {
  console.log("entrou na funcao maeFunction");
  //vai retornar a localidade e armazenar na variavel endereco
  var endereco = getCEP();
  //vai usar a variavel de endereco para procurar o nivel de irradiacao
  var indIrrad = irradJson(endereco);
  //consumoMensal está retornando algo que é armazenado dentro de cm
  var cm = consumoMensal();
  //pico sistema retorna um resultado que é armazenado dentro de potenciaPico
  var potenciaPico = picoSistema(indIrrad, cm);
  // console.log(areaEstimada(potenciaPico));

  // a area estimada precisa da potenciaPico para calcular
  var areaSistema = areaEstimada(potenciaPico);

  // var areaSistema = areaEstimada();

  //aqui retorna geração ano, e para calcular é preciso de indIrrad, potenciaPico
  var geracaoAno = energiaGeradaAno(indIrrad, potenciaPico);
  //vai retornar geracaoMes, mas precisa de geracaoAno para calcular
  var geracaoMes = energiaGeradaMes(geracaoAno);

  captApresenta(
    cep,
    localidade,
    redeEletrica,
    local,
    contaMes,
    // kwpConsumo,
    nomeCompleto,
    telefoneContato,
    email
  );

  //exibe grid, mas para isso precisa => ()
  exibeGrid(cm, potenciaPico, areaSistema, geracaoMes, geracaoAno);
}
