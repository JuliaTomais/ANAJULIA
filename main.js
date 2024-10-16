function criaCartão(categoria,pergunta,resposta)
let conteiner = document.getElementById('container');
let cartão = document.createElement('article');
cartão.className = 'catão',
cartao.innerHTML = 
<div class="conteudo-cartao">
    <h3>${categoria}</h3>
    <div clss="pergunta-cartao">
        <p>${pergunta}</p>
</div>
<div class="perguntas-catao">
    <p>${resposta}</p>
    </div> 
    </div>
    conteiner.appendChild(cartao);
}