const filmesSection = document.getElementById('filmes');


fetch('http://localhost:3000/api/filmes')
    .then(response => response.json())
    .then(data => {
        const filmes = data.filmes;
        exibirFilmes(filmes);
    })
    .catch(error => {
        console.error('Erro ao buscar filmes:', error);
    });

function exibirFilmes(filmes) {
    filmes.forEach((filme) => {
        const artigo = document.createElement('article');
        const img = document.createElement('img');
        img.src = filme.img;
        img.alt = `Banner do filme ${filme.titulo}`;
    
        const detalhesDiv = document.createElement('div');
        detalhesDiv.classList.add('detalhes');
    
        const tituloH3 = document.createElement('h3');
        tituloH3.textContent = filme.titulo;
    
        const descricaoP = document.createElement('p');
        descricaoP.textContent = filme.descricao;
    
        const anoSpan = document.createElement('span');
        anoSpan.textContent = `Ano: ${filme.ano}`;
    
        const direcaoSpan = document.createElement('span');
        direcaoSpan.textContent = `Direção: ${filme.direcao}`;
    
        const generoSpan = document.createElement('span');
        generoSpan.textContent = `Gênero: ${filme.genero}`;
    
        const valorSpan = document.createElement('span');
        valorSpan.textContent = `Valor: R$ ${filme.valor.toFixed(2)}`;
    
        detalhesDiv.appendChild(tituloH3);
        detalhesDiv.appendChild(descricaoP);
        detalhesDiv.appendChild(anoSpan);
        detalhesDiv.appendChild(direcaoSpan);
        detalhesDiv.appendChild(generoSpan);
        detalhesDiv.appendChild(valorSpan);
    
        const carrinhoAncor = document.createElement('button');
        carrinhoAncor.href = ``;
        carrinhoAncor.textContent = 'Adicionar ao Carrinho';
        carrinhoAncor.classList.add('botao-carrinho');
        carrinhoAncor.id = filme.id;
        carrinhoAncor.addEventListener('click', adicionarAoCarrinho);
    
        artigo.appendChild(img);
        artigo.appendChild(detalhesDiv);
        artigo.appendChild(carrinhoAncor);
    
        filmesSection.appendChild(artigo);
    });
}


function adicionarAoCarrinho(event) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    console.log('Adicionar ao carrinho clicado');
    const filmeId = event.target.id;
    console.log(`Filme a ser adicionado ao carrinho: ${filmeId}`);
    let filme;
    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].id === filmeId) {
            filme = filmes[i];
            break;
        }
    }
    console.log(filme);
    carrinho.push(filme);
    console.log(carrinho);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    fetch('http://localhost:3000/api', () => {
        console.log('Carrinho atualizado no servidor');
    }).then(response => {
        let data = response.json();
        console.log(data);
    });
}

