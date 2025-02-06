'use strict'

const categorias = [
    {nome: 'Celulares', icon: 'celular.png', cor: 'red'},
    {nome: 'Informatica', icon: 'notebook.png', cor: 'plum'},
    {nome: 'Games', icon: 'gamer.png', cor: 'red'},
    {nome: 'Móveis', icon: 'cama.png', cor: 'blue'}
]


function criarMenu(categoria){
const novoItem = document.createElement('li')
const novaImagem = document.createElement('img')
const novoSpan = document.createElement('Span')
const lista = document.getElementById('menu')

novaImagem.src = `./img/${categoria.icon}`
novoSpan.textContent = categoria.nome

novoItem.appendChild(novaImagem)
novoItem.appendChild(novoSpan)
novoItem.style = `--cor-hover:${categoria.cor}`

lista.appendChild(novoItem)

}

categorias.forEach(criarMenu)



