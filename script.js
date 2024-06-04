const seasons = ['summer', 'autumn', 'winter', 'spring'];
const seasonNames = ['Verão', 'Outono', 'Inverno', 'Primavera'];
const fallingElements = {
    summer: '☀️',
    autumn: '🍂',
    winter: '❄️',
    spring: '🌸'
};
let currentSeasonIndex = 0;

function changeSeason() {
    // Remover a classe atual
    document.body.classList.remove(seasons[currentSeasonIndex]);

    // Incrementar o índice da estação
    currentSeasonIndex = (currentSeasonIndex + 1) % seasons.length;

    // Adicionar a nova classe
    document.body.classList.add(seasons[currentSeasonIndex]);

    // Atualizar o título da estação
    document.getElementById('season-title').textContent = seasonNames[currentSeasonIndex];

    // Limpar elementos caindo antigos
    const fallingContainer = document.getElementById('falling-container');
    fallingContainer.innerHTML = '';

    // Adicionar novos elementos caindo
    for (let i = 0; i < 50; i++) {
        createFallingElement(fallingContainer, fallingElements[seasons[currentSeasonIndex]]);
    }
}

function createFallingElement(container, symbol) {
    const element = document.createElement('div');
    element.className = 'falling-element';
    element.textContent = symbol;
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duração aleatória entre 2s e 5s
    container.appendChild(element);
}

// Inicializar com a primeira estação
document.body.classList.add(seasons[currentSeasonIndex]);
changeSeason();
