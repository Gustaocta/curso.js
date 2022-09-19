function gerar() {
    let num = window.document.querySelector('input#txtn')
    let tab = window.document.querySelector('select#seltab')
    if ( num.value.length == 0) {
        alert('Por Favor, Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}