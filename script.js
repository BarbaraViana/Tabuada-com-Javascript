function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Digite um número!')

    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // limpa a tela antes de mostrar uma nova tabuada
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}` //Sempre utilizar crase
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }

    }

}