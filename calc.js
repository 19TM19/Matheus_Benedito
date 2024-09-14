function insert(num) {
    var numero = document.getElementById('RESULTADO').innerHTML;
    if (numero === "0") {
        document.getElementById('RESULTADO').innerHTML = num;
    } else {
        document.getElementById('RESULTADO').innerHTML = numero + num;
    }
}
function clean() {
    document.getElementById('RESULTADO').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('RESULTADO').innerHTML;
    if (resultado.length > 0) {
        document.getElementById('RESULTADO').innerHTML = resultado.substring(0, resultado.length - 1);
    }
}
function calcular() {
    var resultado = document.getElementById('RESULTADO').innerHTML;
    if (!resultado) {
        document.getElementById('RESULTADO').innerHTML = "0";
        return;
    }
    try {
        document.getElementById('RESULTADO').innerHTML = eval(resultado);
    } catch (error) {
        document.getElementById('RESULTADO').innerHTML = "0";
    }
}
module.exports = { insert, clean, back, calcular };
