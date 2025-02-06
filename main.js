'use strict'

const categorias = [
    {nome: 'Perfume', icon: 'perfume.png', cor: 'pink'},
    {nome: 'Skincare', icon: 'skincare.png', cor: 'palevioletred'},
    {nome: 'Maquiagem', icon: 'maquiagem.png', cor: 'paleturquoise'},
    {nome: 'Esmalte', icon: 'esmalte.png', cor: 'violet'}
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

const produtos = [
    {
        nome: "ESMALTE",
        descricao: "Dê um toque de cor às suas unhas com o Esmalte Color, disponível em várias tonalidades incríveis.",
        imagem: "./img/risque.webp"
    },
    {
        nome: "SKINCARE",
        descricao: "Hidrate e cuide da sua pele com a linha cleanser wepink, para uma pele radiante todos os dias!",
        imagem: "./img/sabonete.png"
    },
    {
        nome: "MAKE PRO",
        descricao: "Descubra a linha MakeUp Pro, para realçar sua beleza com tons vibrantes e longa duração.",
        imagem: "./img/rimel.png"
    }   
    
];

function criarCards() {
    const container = document.querySelector('main'); // Seleciona o <main>

    produtos.forEach(produto => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        wrapper.innerHTML = `
            <figure class="Card">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <figcaption>
                    <h2>${produto.nome}</h2>
                    <div class="detalhes">
                        <p>${produto.descricao}</p>
                    </div>
                </figcaption>
                <button class="compras">COMPRAR</button>
            </figure>
            `;

        container.appendChild(wrapper);
    });
}

criarCards()
