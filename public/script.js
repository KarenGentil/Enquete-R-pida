const opcoes = ['JavaScript', 'Python', 'SQL'];
const opcoesContainer = document.getElementById('opcoes');
const resultadosContainer = document.getElementById('resultados');

function carregarOpcoes() {
    opcoesContainer.innerHTML = '';
    opcoes.forEach(opcao => {
        const btn = document.createElement('button');
        btn.textContent = opcao;
        btn.addEventListener('click', () => votar(opcao));
        opcoesContainer.appendChild(btn);
    });
}

async function votar(opcao) {
    await fetch('/votar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ opcao })
    });
    carregarResultados();
}

async function carregarResultados() {
    const res = await fetch('/resultados');
    const dados = await res.json();
    resultadosContainer.innerHTML = '';
    dados.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.opcao_nome}: ${item.total_votos}`;
        resultadosContainer.appendChild(li);
    });
}

carregarOpcoes();
carregarResultados();
setInterval(carregarResultados, 5000);
