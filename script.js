
// script.js

// Captura os botões
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Captura os elementos de pontuação e resultado
const resultText = document.querySelector('.result');
const yourScoreText = document.querySelector('.your-score span');
const machineScoreText = document.querySelector('.machine-score span');

// Variáveis para armazenar as pontuações
let yourScore = 0;
let machineScore = 0;

// Função para gerar a escolha da máquina
function getMachineChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Função para determinar o vencedor
function determineWinner(yourChoice, machineChoice) {
    if (yourChoice === machineChoice) {
        return 'Empate!';
    } else if (
        (yourChoice === 'rock' && machineChoice === 'scissors') ||
        (yourChoice === 'paper' && machineChoice === 'rock') ||
        (yourChoice === 'scissors' && machineChoice === 'paper')
    ) {
        yourScore++;
        return 'Você venceu!';
    } else {
        machineScore++;
        return 'Alexa venceu!';
    }
}

// Função para atualizar a interface
function updateScore() {
    yourScoreText.textContent = yourScore;
    machineScoreText.textContent = machineScore;
}

// Função principal para o jogo
function playGame(yourChoice) {
    const machineChoice = getMachineChoice();
    const result = determineWinner(yourChoice, machineChoice);
    resultText.textContent = `Você escolheu ${yourChoice}. Alexa escolheu ${machineChoice}. ${result}`;
    updateScore();
}

// Adiciona os eventos de clique para os botões
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
