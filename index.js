const key = "c54c883db0d0181212be2e4204e76878"
function colocarDadosNaTela(dados) {
  async function validarInputCidade() {
    const cidade = document.querySelector('input').value;
    if (cidade === '') {

      alert('Por favor, digite algo');
      return;
    } else {
      document.querySelector('h2').innerHTML = `Tempo em ${dados.name}`
    }
  }
  validarInputCidade()
  document.querySelector('.temperatura').innerHTML = Math.floor(dados.main.temp) + "°C"
  let txPrevisão = dados.weather[0].description
  const body = document.querySelector("body")
  document.querySelector('.texto-previsão').innerHTML = txPrevisão
  if (txPrevisão === 'nublado') {
    body.style.backgroundImage = 'url("https://media.istockphoto.com/id/522305524/pt/foto/escuro-c%C3%A9u-nublado-dram%C3%A1tica-tempestuosa-sobre-o-mar.jpg?s=612x612&w=0&k=20&c=ETDFLifEBOaK0eNxPAG9wYgSWhv6nK7tHLVwenb9HZc=")';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = '100% 100%';
  }
  else if (txPrevisão === 'nuvens dispersas') {
    body.style.backgroundImage = 'url("https://media.istockphoto.com/id/1211411254/pt/foto/sunbeam-over-mediterranean-sea-in-antalya-turkey.jpg?s=612x612&w=0&k=20&c=h_WNQVHVWF4oHDYJ9nmRQrMD_gsROy769yW7iUa2RNY=")';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = '100% 100%';
  }
  else if (txPrevisão === "chuva leve") {
    body.style.backgroundImage = 'url("https://media.istockphoto.com/id/174855940/pt/foto/l%C3%A1grimas-de-amor.jpg?s=612x612&w=0&k=20&c=kXITgoGXT390fwjjDeJhlZdrwc0j69HwgMm5AyMkFo8=")';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = '100% 100%';
  } else {
    body.style.backgroundImage = 'url("https://media.istockphoto.com/id/691930476/pt/foto/tuscany-landscape-at-sunrise-with-low-fog.jpg?s=612x612&w=0&k=20&c=nPbfV-diZ9q6LuQALgny63afIz0qbLBcB5rqdEpjJjo=")';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundSize = '100% 100%';
  }
  document.querySelector('.umidade').innerHTML = `umidade: ${dados.main.humidity}%`
  document.querySelector('.img-previsão').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
  console.log(dados)
  colocarDadosNaTela(dados)
}

function cliqueiNoBotão() {
  const cidade = document.querySelector('input').value;
  buscarCidade(cidade); // Em seguida, chama a função de busca.
}