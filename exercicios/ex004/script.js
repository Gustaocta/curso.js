function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] faltam dados!')
        } else {
            res.innerHTML = `Contando: <br> `
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (p <= 0) {
                alert('Passo Inválido! Considerando PASSO 1')
                p = 1
            }
            if (i < f) {
                // Contagem crescente
                for(let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{270D} `
                } 
            } else {
                // Conatagem regressiva
                for(let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c} \u{270D} `
                }
            }
            res.innerHTML += ` Fim \u{1f3c1} `
            
        }
}