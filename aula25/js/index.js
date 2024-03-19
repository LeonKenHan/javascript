const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevete"];
var tamanho = carros.length;

for (let i = 0; i < tamanho; i++) {
document.getElementById("teste").innerHTML += carros[i] + " - ";
}