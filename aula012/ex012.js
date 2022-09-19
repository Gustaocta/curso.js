var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 ) {
    console.log(`por tanto, bom dia!`)
} else if (hora <= 18) {
    console.log(`por tanto, boa tarde!`)
} else {
    console.log(`por tanto, tenha uma ótima noite!`)
}

    
