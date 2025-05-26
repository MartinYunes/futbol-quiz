// Categories data
const categories = [
    { id: 1, name: "Jugadores históricos" },
    { id: 2, name: "Clubes europeos" },
    { id: 3, name: "Campeones del mundo" },
    { id: 4, name: "Estadios famosos" },
    { id: 5, name: "Entrenadores legendarios" },
    { id: 6, name: "Competencias internacionales" },
    { id: 7, name: "Goleadores históricos" },
    { id: 8, name: "Selecciones nacionales" },
    { id: 9, name: "Torneos internacionales" },
    { id: 10, name: "Premios y reconocimientos" }
];

// Game state
let selectedCategories = [];
let currentLetter = '';
let score = 0;

// DOM Elements
const playAsGuestBtn = document.getElementById('playAsGuest');
const howToPlayBtn = document.getElementById('howToPlay');
const howToPlayModal = document.getElementById('howToPlayModal');
const modalCloseBtn = document.querySelector('.modal-close');

// Modal functions
function openModal(modal) {
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

// Game functions
function startGameAsGuest() {
    // For now, just navigate to game page
    // In a real app, this would initialize the game state
    console.log('Starting game as guest');
}

function showHowToPlay() {
    openModal(howToPlayModal);
}

function closeHowToPlay() {
    closeModal(howToPlayModal);
}

// Event Listeners
playAsGuestBtn.addEventListener('click', startGameAsGuest);
howToPlayBtn.addEventListener('click', showHowToPlay);
modalCloseBtn.addEventListener('click', closeHowToPlay);

// Add click outside modal to close it
document.addEventListener('click', (e) => {
    if (e.target === howToPlayModal) {
        closeHowToPlay();
    }
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && howToPlayModal.style.display === 'block') {
        closeHowToPlay();
    }
});

// Add retro sound effects
function playSound(type) {
    // In a real app, this would play actual sound effects
    console.log(`Playing ${type} sound`);
}

// Add animations for buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Initialize game
console.log('FÚTBOL QUIZ initialized');
