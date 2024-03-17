function diaDaSemana() {
    var dia = new Date().getDay();

    console.log(dia); 

    switch (dia) {
    case 0:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Domingo";
        break;
    case 1:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Segunda";
        break;
    case 2:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Terça";
        break;
    case 4:
         //o que acontece
         document.getElementById("teste").innerHTML = "Hoje é Quarta";
         break;
    case 5:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Quinta";
        break;
    case 6:
        //o que acontece
        document.getElementById("teste").innerHTML = "Hoje é Sexta";
        break;
    case 7:
         //o que acontece
         document.getElementById("teste").innerHTML = "Hoje é Segunda";
         break;
    default:
        //o que acontece
        document.getElementById("teste").innerHTML = "Não sei que dia é...";
}

}