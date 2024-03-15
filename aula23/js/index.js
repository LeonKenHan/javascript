function verificar() {
    let nome = document.getElementById("nome").value;


    if (nome =="" || nome==null){
        let p = document.getElementById("teste"):
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns tudo certinho";
        p.style.color = "green";
    }
}