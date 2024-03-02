function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = 'Agora são ${hora} horas.'
if (hora >= 0 && hora < 12) {
    // BOM DIA!
    img.src = 'pexels-daria-obymaha-1684151.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 0 && hora <= 12) {
    // BOA TARDE!
    img.src = 'pexels-nihat-69224.jpg'
    document.body.style.background = '#b9846f'
} else {
    // BOA NOITE!
    img.src = 'pexels-pixabay-355465.jpg'
    document.body.style.background = '#515154'
}
}