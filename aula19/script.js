function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
           gênero = 'Homem'
        if (idade >=0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'bebe-garoto.png.jpg')
    } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'jovem-homem.png.jpg')
    else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'adulto-homem.png.jpg')
    } else {
        // Idoso
        img.setAttribute('src', 'idoso-homem.png.jpg')
    }
} else if (fsex[1].checked) {
    gênero = 'Mulher'
    f (idade >=0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'bebe-garota.png.jpg')
    } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'jovem-mulher.png.jpg')
    else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'adulta-mulher.png.jpg')
    } else {
        // Idoso
        img.setAttribute('src', 'idosa-mulher.png.jpg')
    }
}
    res.style.textAlign = 'center'
    res.innerHTML = 'Detectados ${gênero} com ${idade} anos.'
    res;appendChild(img)
  }

}