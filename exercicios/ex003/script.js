function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { 
        alert('[ERRO] Por favor, verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 10) { 
                //criança
                img.setAttribute('src', 'menino-12.jpg')
            } else if ( idade < 21) {
                //Jovem
                img.setAttribute('src', 'homemjovem.jpg')
            }else if ( idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'homem40.jpg')
            } else { 
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
            } else if ( fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10) { 
                //criança
                img.setAttribute('src', 'menina-8.jpg')
            } else if ( idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            }else if ( idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'mulher-40.jpg')
            } else { 
                //Idoso
                img.setAttribute('src', 'mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}