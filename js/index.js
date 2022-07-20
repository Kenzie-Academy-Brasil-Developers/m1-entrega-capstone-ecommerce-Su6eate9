/* 
    PROCESSO: PRODUTOS GERADOS PELO DOM
    00 - IDENTIFICAR OS ITENS A SEREM COLOCADOS
    01 - CAPTURAR OS ITENS NA TELA
    02 - CRIAR FUNCTION
    03 - CRIAR ELEMENTOS
*/
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
//SECTION 01
function createProducts(item){
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
            pValor .innerText = `R$${item[i].value}`
        let btnAdd = document.createElement('button')
            btnAdd.classList.add('btnAdd')
            btnAdd.innerText = 'Adicione ao carrinho'

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
createProducts(data)
{/* <li>
    <img src="/img/camiseta_branca.svg" alt="camiseta branca">
    <div>
        <span>Camisetas</span>
        <h2>Nome do produto</h2>
        <p class="desc">Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...</p>
        <p class="valor">Valor do Produto</p>
        <button class="btnAdd">Adicione ao carrinho</button>
    </div>
</li> */}

//SECTION 02
const articleSearch = document.createElement('article')
articleSearch.classList.add('info-search')

const input = document.createElement('input')
const btnSearch = document.createElement('button')

input.placeholder = 'Pesquisar Produto'
btnSearch.classList.add('btnSearch')
btnSearch.innerText = 'Pesquisar'

articleSearch.appendChild(input)
articleSearch.appendChild(btnSearch)

const articleCar = document.createElement('article')
articleCar.classList.add('info-car')

const h2Carrinho = document.createElement('h2')
h2Carrinho.innerText = 'Carrinho de Compras'

const divCarrinho = document.createElement('div')

const h3Div = document.createElement('h3')
const spanDiv = document.createElement('span')

h3Div.innerText = 'Carrinho Vazio'
spanDiv.innerText = 'Adicione Itens'

divCarrinho.appendChild(h3Div)
divCarrinho.appendChild(spanDiv)

articleCar.appendChild(h2Carrinho)
articleCar.appendChild(divCarrinho)

sectionInfo.appendChild(articleSearch)
sectionInfo.appendChild(articleCar)

{/* <article class="info-search">
    <input type="text" placeholder="Pesquisar Produto">
    <button class="btnSearch">Pesquisar</button>
</article>
<article class="info-car">
    <h2>Carrinho de Compras</h2>
    <div>
        <h3>Carrinho Vazio</h3>
        <span>Adicione Itens</span>
    </div>
</article> */}