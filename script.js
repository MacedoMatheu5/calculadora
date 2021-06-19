function insert(num) {
  let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
  document.getElementById('resultado').innerHTML = '';
}
function back() {
  let resultado = document.getElementById('resultado').innerHTML;
  let tamanhoResultado = resultado.length - 1;
  let novaSaida = resultado.substring(0, tamanhoResultado);
  document.getElementById('resultado').innerHTML = novaSaida;
}
function calcular() {
  let resultado = document.getElementById('resultado');
  console.log(resultado.innerHTML);
  if (resultado.innerHTML) {
    resultado.innerHTML = eval(resultado.innerHTML);
  }
  else {
    resultado.innerHTML = "Insira um valor!"
  }
}