function carregar() {
    var nnh = document.getElementById('fotomanha')
    var img = document.getElementById('fotoboa')
    var date = new Date()

    var hora = 16
    nnh.innerText = (` Agora são ${hora} horas 🌸`)
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'yellow'

    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = 'blue'

    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'pink'
    }

}