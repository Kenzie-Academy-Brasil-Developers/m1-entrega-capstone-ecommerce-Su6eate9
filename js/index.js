
//CABEÇALHO
const header = document.querySelector('header')

const divCabecalho = document.createElement('div')
divCabecalho.classList.add('cabecalho')
divCabecalho.classList.add('container')
header.appendChild(divCabecalho)

const h1Cabecalho = document.createElement('h1')
h1Cabecalho.innerText = 'Suneater Shop'
const navCabecalho = document.createElement('nav')
navCabecalho.classList.add('cabecalho-nav')

divCabecalho.appendChild(h1Cabecalho)
divCabecalho.appendChild(navCabecalho)

const aTodos = document.createElement('a')
aTodos.href = '#'
aTodos.innerText = 'Todos'
const aAcessorios = document.createElement('a')
aAcessorios.href = '#'
aAcessorios.innerText = 'Acessórios'
const aCalcados = document.createElement('a')
aCalcados.href = '#'
aCalcados.innerText = 'Calçados'
const aCamisetas = document.createElement('a')
aCamisetas.href = '#'
aCamisetas.innerText = 'Camisetas'

navCabecalho.appendChild(aTodos)
navCabecalho.appendChild(aAcessorios)
navCabecalho.appendChild(aCalcados)
navCabecalho.appendChild(aCamisetas)

{/* <div class="cabecalho container">
    <h1>Suneater Shop</h1>
    <nav class="cabecalho-nav">
        <a href="#">Todos</a>
        <a href="#">Acessórios</a>
        <a href="#">Calçados</a>
        <a href="#">Camisetas</a>
    </nav>
</div> */}

//MAIN
const ulProdutos = document.querySelector('#ul-01')
const sectionInfo = document.querySelector('.info')
const sectionCarrinho = document.querySelector('.carrinho-compras ul')

//SECTION 01
let carrinhoProdutos = []

//MOSTRUÁRIO DE ITENS
function listProducts(item){
    for(let i = 0; i < item.length; i++){
        const li = document.createElement('li')
        const div = document.createElement('div')
    
        let img  = document.createElement('img')
            img.src = item[i].img
            img.alt = item[i].nameItem
        let span = document.createElement('span')
            span.innerText = `${item[i].tag}`
        let h2   = document.createElement('h2')
            h2.innerText = `${item[i].nameItem}`
        let pDesc = document.createElement('p')
            pDesc.classList.add('desc')
            pDesc.innerText = `${item[i].description}`
        let pValor = document.createElement('p')
            pValor.classList.add('valor')
            pValor .innerText = `R$${item[i].value}`.replace('.',',')
        let btnAdd = document.createElement('button')
            btnAdd.classList.add('btnAdd')
            btnAdd.innerText = 'Adicione ao carrinho'

        //ADICIONANDO PRODUTO AO CARRINHO
        btnAdd.addEventListener('click', interceptandoProduto)

        function interceptandoProduto(){
            carrinhoProdutos.push(item[i])

            const ulCarrinho = document.querySelector('.carrinho-compras ul')
            let liCarrinho = document.createElement('li')
            liCarrinho.classList.add('oferta')
            let divCarrinho = document.createElement('div')

            let imgCarrinho = document.createElement('img')

            let nameCarrinho = document.createElement('h3')
            let pCarrinho = document.createElement('p')
            let btnCarrinho = document.createElement('button')

            //PROPRIEDADES VARIAVEIS CARRINHO
            imgCarrinho.src = item[i].img
            imgCarrinho.alt = item[i].nameItem

            nameCarrinho.innerText = `${item[i].nameItem}`

            pCarrinho.innerText = `${item[i].description}`

            btnCarrinho.innerText = 'Remover do Carrinho'

            ulCarrinho.appendChild(liCarrinho)

            liCarrinho.appendChild(imgCarrinho)
            liCarrinho.appendChild(divCarrinho)

            divCarrinho.appendChild(nameCarrinho)
            divCarrinho.appendChild(pCarrinho)
            divCarrinho.appendChild(btnCarrinho)
        }
             

        li.appendChild(img)
        li.appendChild(div)

        div.appendChild(span)
        div.appendChild(h2)
        div.appendChild(pDesc)
        div.appendChild(pValor)
        div.appendChild(btnAdd)

        ulProdutos.appendChild(li)
    }
}
listProducts(data)

//INSERE ITENS NO CARRINHO
function createProduct(produto){
    ulProdutos.innerHTML = ' ' //LIMPAR TELA PARA NÃO DUPLICAR

    //ACESSANDO OS ITENS
    let id          = produto.id
    let img         = produto.img
    let name        = produto.nameItem
    let desc        = produto.description
    let value       = produto.value
    let addCart     = produto.addCart
    let tag         = produto.tag

    //CRIANDO PRODUTOS
    const li = document.createElement('li')

    let tagImg = document.createElement('img')
        tagImg.src = item[i].img
        tagImg.alt = item[i].nameItem
    let tagSetor = document.createElement('span')
        tagSetor.innerText = `${item[i].tag}`
    let tagName = document.createElement('h2')
        tagName.innerText = `${item[i].nameItem}`
    let tagDesc = document.createElement('p')
        tagDesc.classList.add('desc')
        tagDesc.innerText = `${item[i].description}`
    let tagValue = document.createElement('p')
        tagValue.classList.add('valor')
        tagValue .innerText = `R$${item[i].value}`.replace('.',',')
    let btnAdd = document.createElement('button')
        btnAdd.classList.add('btnAdd')
        btnAdd.innerText = 'Adicione ao carrinho'
    
    //ADICIONANDO ID NO BOTÃO
    if(id != undefined){
        btnAdd.id = id
    }

    li.appendChild(tagImg)
    li.appendChild(tagSetor)
    li.appendChild(tagName)
    li.appendChild(tagDesc)
    li.appendChild(tagValue)
    li.appendChild(btnAdd)

    return li
}

//RECEBER OS PRODUTOS
// function interceptandoProduto(event){
//     let btnAdd = event.target // > ERROR DE LOCATION

//     if(btnAdd.tagName == 'BUTTON'){
//         //IDENTIFICANDO PRODUTO PELO ID
//         let idProduto = btnAdd.id
//         //VERIFICANDO SE O PRODUTO ESTÁ NA BASE
//         let produto = data.find(function(produto){
//             if(produto.id == idProduto){
//                 return produto
//             }
//         })
//         //FUNÇÃO ADD PRODUTO NO CARRINHO
//         adicionarCarrinho(produto)
//     }
// }
// console.log(interceptandoProduto())

//FUNÇÃO ADD PRODUTO NO CARRINHO
function adicionarCarrinho(produto){
    if(produto !== undefined){
        carrinho.push(produto)
        listProducts(carrinho,ulProdutos)
    }
}

//FUNÇÃO REMOVER CARRINHO
function removerCarrinho(produto){
    
}




/* <li>
    <img src="/img/camiseta_branca.svg" alt="camiseta branca">
    <div>
        <span>Camisetas</span>
        <h2>Nome do produto</h2>
        <p class="desc">Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
        <p class="valor">Valor do Produto</p>
        <button class="btnAdd">Adicione ao carrinho</button>
    </div>
</li> */

//SECTION 02
//PESQUISA ITENS
// const articleSearch = document.createElement('article')
// articleSearch.classList.add('info-search')

// const input = document.createElement('input')
// const btnSearch = document.createElement('button')

// input.placeholder = 'Pesquisar Produto'
// btnSearch.classList.add('btnSearch')
// btnSearch.innerText = 'Pesquisar'

// articleSearch.appendChild(input)
// articleSearch.appendChild(btnSearch)

// //CARRINHO
// const articleCar = document.createElement('article')
// articleCar.classList.add('info-car')

// const h2Carrinho = document.createElement('h2')
// h2Carrinho.innerText = 'Carrinho de Compras'

// const divCarrinho = document.createElement('div')
// divCarrinho.classList.add('carrinho-compras')

// const h3Div = document.createElement('h3')
// const spanDiv = document.createElement('span')

// h3Div.innerText = 'Carrinho Vazio'
// spanDiv.innerText = 'Adicione Itens'

// divCarrinho.appendChild(h3Div)
// divCarrinho.appendChild(spanDiv)

// const divFinal = document.createElement('div')
// divFinal.classList.add('info-final')

// const divQuantidade = document.createElement('div')
// divQuantidade.classList.add('quantidade')

// const divTotal = document.createElement('div')
// divTotal.classList.add('total')

// const pQuantidade = document.createElement('p')
// pQuantidade.classList.add('p-final')
// pQuantidade.innerText = 'Quantidade:'
// const spanQuantidade = document.createElement('span')
// spanQuantidade.classList.add('span-final')
// spanQuantidade.innerText = '0'

// divQuantidade.appendChild(pQuantidade)
// divQuantidade.appendChild(spanQuantidade)

// const pTotal = document.createElement('p')
// pTotal.classList.add('p-final')
// pTotal.innerText = 'Total:'
// const spanTotal = document.createElement('span')
// spanTotal.classList.add('span-final')
// spanTotal.innerText = 'R$0.00'

// divTotal.appendChild(pTotal)
// divTotal.appendChild(spanTotal)

// divFinal.appendChild(divQuantidade)
// divFinal.appendChild(divTotal)

// //APPEND FINAL
// articleCar.appendChild(h2Carrinho)
// articleCar.appendChild(divCarrinho)
// articleCar.appendChild(divFinal)

// sectionInfo.appendChild(articleSearch)
// sectionInfo.appendChild(articleCar)

/* 
<article class="info-search">
    <input type="text" placeholder="Pesquisar Produto">
    <button class="btnSearch">Pesquisar</button>
</article>
<article class="info-car">
    <h2>Carrinho de Compras</h2>
    <div class="carrinho-compras">
        <h3>Carrinho Vazio</h3>
        <span>Adicione Itens</span>
    </div>
    <div class="info-final">
        <div class="quantidade">
            <p class="p-final">Quantidade:</p>
            <span class="span-final">0</span>
        </div>
        <div class="total">
            <p class="p-final">Total:</p>
            <span class="span-final">R$0.00</span>
        </div>
    </div>
</article>
*/