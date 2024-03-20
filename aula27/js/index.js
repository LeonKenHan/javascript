let data = new Date();

let ano = data.getFullYear();
console.log(ano);

let mes = data.getMonth();

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mesEscrito = mesesdoAno[data.getMonth()];

let diaMes = data.getDate();

let diaSemana = data.getDay();

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();

//PEGAR A MINNUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();

//PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

//PEGAR MILISEGUNDOS - DE 0 ATÉ 999 
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR', { dateStyle: 'short' });
console.log(dataBR);

//PEGAR OS VALORES SEPARADOS
d = new Date();
diMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x< 10 ? '0' + x : '' +x; };

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS 
var hoje = new Date()
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não venceu, tudo certo!");
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS 
var dataInicial= new Date();
var dataFinal = new Date(2022, 11, 31);
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");