let clientes = ['Pyetro', 'Renan', 'Nicolas', 'Felipe']
let limite = 4

function addclientes() {
    clientes.unshift('David')
    console.log(clientes)
}

function removerclientes() {
    clientes.pop()
    addclientes()
}

function verificar(i = clientes.length) {
    if(i < 4) {
        addclientes()
    }
    else {
        removerclientes()
    }
}

console.log(clientes)
verificar()