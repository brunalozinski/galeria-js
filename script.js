"use strict"

const images = [
    "./img/imagem1.jpg",
    "./img/imagem2.jpg",
    "./img/imagem3.jpg",
    "./img/imagem4.jpg",
    "./img/imagem5.jpg",
    "./img/imagem6.jpg",
    "./img/imagem7.jpg",
    "./img/imagem8.jpg"
]

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    //NÃO É RECOMENDADO FAZER DESTE JEITO, É O JEITO QUE ENCONTRA NA NET
    // container.innerHTML += `
    //     <a href="${urlImagem}" class="galeria-itens">
    //         <img src="${urlImagem}" alt="">
    //     </a>
    // `

    //CRIANDO UM LINK DA FORMA CORRETA
    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => images.forEach(criarItem)

carregarImagens()