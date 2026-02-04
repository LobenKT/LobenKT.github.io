// Letter-Link Battle Game - Enhanced Version with Firebase
class LetterLinkBattle {
    constructor() {
        this.gameState = {
            currentScreen: 'menu',
            roomCode: null,
            playerId: null,
            playerName: null,
            gameMode: 'chain', // 'chain' or 'classic'
            players: {},
            currentTurn: null,
            gameStarted: false,
            round: 0,
            maxRounds: 10,
            roundTime: 15,
            wordChain: [],
            ghostLetters: [],
            scores: {},
            health: {},
            timer: null,
            timeLeft: 0
        };
        
        // Firebase configuration (you'll need to replace with your config)
        this.firebaseConfig = {
            apiKey: "demo-key",
            authDomain: "demo-project.firebaseapp.com",
            databaseURL: "https://demo-project-default-rtdb.firebaseio.com/",
            projectId: "demo-project"
        };
        
        // Enhanced word database with difficulty ratings
        this.wordDatabase = {
            easy: ['apple', 'house', 'water', 'light', 'music', 'dance', 'smile', 'heart', 'peace', 'dream'],
            medium: ['brave', 'flame', 'grace', 'judge', 'knife', 'ocean', 'queen', 'river', 'stone', 'voice'],
            hard: ['azure', 'blitz', 'fjord', 'glyph', 'jinxed', 'quartz', 'sphinx', 'waltz', 'zephyr', 'rhythm']
        };
        
        // Letter difficulty multipliers
        this.letterDifficulty = {
            'q': 2.0, 'x': 2.0, 'z': 2.0, 'j': 1.8, 'k': 1.5, 'v': 1.5, 'w': 1.5, 'y': 1.5,
            'f': 1.3, 'h': 1.3, 'b': 1.2, 'c': 1.2, 'd': 1.2, 'g': 1.2, 'm': 1.2, 'p': 1.2,
            'a': 1.0, 'e': 1.0, 'i': 1.0, 'l': 1.0, 'n': 1.0, 'o': 1.0, 'r': 1.0, 's': 1.0, 't': 1.0, 'u': 1.0
        };
        
        this.init();
    }
    
    async init() {
        // Initialize Firebase (in demo mode, we'll simulate it)
        this.initFirebase();
        
        // Initialize event listeners
        this.setupEventListeners();
        
        // Initialize game mode selector
        this.setupGameModeSelector();
        
        // Generate unique player ID
        this.gameState.playerId = 'player_' + Math.random().toString(36).substr(2, 9);
    }
    
    initFirebase() {
        // In a real implementation, you would initialize Firebase here
        // For demo purposes, we'll simulate Firebase functionality
        console.log('Firebase initialized (demo mode)');
        this.updateConnectionStatus('connected');
        
        // Simulate Firebase real-time database
        this.database = {
            ref: (path) => ({
                set: (data) => console.log(`Setting ${path}:`, data),
                update: (data) => console.log(`Updating ${path}:`, data),
                on: (event, callback) => console.log(`Listening to ${path} for ${event}`),
                off: () => console.log(`Stopped listening to ${path}`),
                once: (event) => Promise.resolve({ val: () => null })
            })
        };
    }
    
    setupEventListeners() {
        // Word input enter key
        document.getElementById('wordInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitWord();
            }
        });
        
        // Player name enter key
        document.getElementById('playerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.createRoom();
            }
        });
        
        // Room code enter key
        document.getElementById('roomCode').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.joinRoom();
            }
        });
    }
    
    setupGameModeSelector() {
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.gameState.gameMode = btn.dataset.mode;
            });
        });
    }
    
    updateConnectionStatus(status) {
        const statusEl = document.getElementById('connectionStatus');
        statusEl.textContent = status === 'connected' ? '🟢 Connected' : '🔴 Disconnected';
        statusEl.className = `connection-status ${status}`;
    }
    
    generateRoomCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    async createRoom() {
        const playerName = document.getElementById('playerName').value.trim();
        if (!playerName) {
            alert('Please enter your name!');
            return;
        }
        
        this.gameState.roomCode = this.generateRoomCode();
        this.gameState.playerName = playerName;
        
        // Initialize room data
        const roomData = {
            host: this.gameState.playerId,
            gameMode: this.gameState.gameMode,
            players: {
                [this.gameState.playerId]: {
                    name: playerName,
                    score: 0,
                    health: 100,
                    ready: false
                }
            },
            gameState: 'lobby',
            settings: {
                roundTime: 15,
                maxRounds: 10
            }
        };
        
        // In real Firebase implementation:
        // await this.database.ref(`rooms/${this.gameState.roomCode}`).set(roomData);
        
        this.gameState.players = roomData.players;
        this.gameState.scores = { [this.gameState.playerId]: 0 };
        this.gameState.health = { [this.gameState.playerId]: 100 };
        
        this.showScreen('lobby');
        document.getElementById('displayRoomCode').textContent = this.gameState.roomCode;
        this.updateLobby();
    }
    
    showJoinRoom() {
        document.getElementById('join-room-section').style.display = 'block';
    }
    
    async joinRoom() {
        const playerName = document.getElementById('playerName').value.trim();
        const roomCode = document.getElementById('roomCode').value.trim().toUpperCase();
        
        if (!playerName || !roomCode) {
            alert('Please enter your name and room code!');
            return;
        }
        
        this.gameState.roomCode = roomCode;
        this.gameState.playerName = playerName;
        
        // In real Firebase implementation, check if room exists and join
        // For demo, simulate joining
        const player2Id = 'player_' + Math.random().toString(36).substr(2, 9);
        this.gameState.playerId = player2Id;
        
        this.gameState.players = {
            'player_host': { name: 'Host Player', score: 0, health: 100, ready: true },
            [player2Id]: { name: playerName, score: 0, health: 100, ready: false }
        };
        
        this.gameState.scores = { 'player_host': 0, [player2Id]: 0 };
        this.gameState.health = { 'player_host': 100, [player2Id]: 100 };
        
        this.showScreen('lobby');
        document.getElementById('displayRoomCode').textContent = this.gameState.roomCode;
        this.updateLobby();
    }
    
    updateLobby() {
        const lobbyPlayers = document.getElementById('lobbyPlayers');
        lobbyPlayers.innerHTML = '';
        
        Object.entries(this.gameState.players).forEach(([playerId, player]) => {
            const playerCard = document.createElement('div');
            playerCard.className = 'stat-card';
            if (playerId === this.gameState.playerId) {
                playerCard.classList.add('active');
            }
            
            playerCard.innerHTML = `
                <div class="stat-value">${player.name}</div>
                <div class="stat-label">Status: ${player.ready ? '✅ Ready' : '⏳ Waiting'}</div>
                <div class="stat-label">Score: ${player.score}</div>
            `;
            
            lobbyPlayers.appendChild(playerCard);
        });
        
        // Show start button if we have 2 players and current player is host
        const playerCount = Object.keys(this.gameState.players).length;
        if (playerCount === 2) {
            document.getElementById('startGameBtn').style.display = 'block';
        }
    }
    
    async startGame() {
        if (Object.keys(this.gameState.players).length !== 2) {
            alert('Need 2 players to start!');
            return;
        }
        
        // Get game settings
        this.gameState.roundTime = parseInt(document.getElementById('roundTime').value) || 15;
        this.gameState.maxRounds = parseInt(document.getElementById('maxRounds').value) || 10;
        
        // Initialize game state
        this.gameState.gameStarted = true;
        this.gameState.round = 1;
        this.gameState.wordChain = [];
        this.gameState.ghostLetters = [];
        
        // Set first player (random)
        const playerIds = Object.keys(this.gameState.players);
        this.gameState.currentTurn = playerIds[Math.floor(Math.random() * playerIds.length)];
        
        this.showScreen('game');
        this.updateGameDisplay();
        this.startRound();
    }
    
    startRound() {
        this.gameState.timeLeft = this.gameState.roundTime;
        this.updateTimer();
        
        // Start countdown timer
        this.gameState.timer = setInterval(() => {
            this.gameState.timeLeft--;
            this.updateTimer();
            
            if (this.gameState.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
        
        // Update ghost letters every 3 rounds
        if (this.gameState.round % 3 === 0) {
            this.updateGhostLetters();
        }
        
        this.updateGameStatus();
    }
    
    updateTimer() {
        const timerFill = document.getElementById('timerFill');
        const timerText = document.getElementById('timerText');
        
        const percentage = (this.gameState.timeLeft / this.gameState.roundTime) * 100;
        timerFill.style.width = percentage + '%';
        timerText.textContent = `${this.gameState.timeLeft}s remaining`;
        
        // Change timer color based on time left
        timerFill.className = 'timer-fill';
        if (percentage <= 30) {
            timerFill.classList.add('danger');
        } else if (percentage <= 60) {
            timerFill.classList.add('warning');
        }
    }
    
    updateGhostLetters() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numGhostLetters = Math.min(3, Math.floor(this.gameState.round / 3));
        
        this.gameState.ghostLetters = [];
        for (let i = 0; i < numGhostLetters; i++) {
            let letter;
            do {
                letter = alphabet[Math.floor(Math.random() * alphabet.length)];
            } while (this.gameState.ghostLetters.includes(letter));
            this.gameState.ghostLetters.push(letter);
        }
        
        const ghostDiv = document.getElementById('ghostLetters');
        const ghostList = document.getElementById('ghostLettersList');
        
        if (this.gameState.ghostLetters.length > 0) {
            ghostDiv.style.display = 'block';
            ghostList.innerHTML = this.gameState.ghostLetters
                .map(letter => `<span class="ghost-letter">${letter}</span>`)
                .join('');
        } else {
            ghostDiv.style.display = 'none';
        }
    }
    
    updateGameDisplay() {
        // Update player stats
        Object.entries(this.gameState.players).forEach(([playerId, player], index) => {
            const playerNum = index + 1;
            document.getElementById(`player${playerNum}Name`).textContent = player.name;
            document.getElementById(`player${playerNum}Score`).textContent = this.gameState.scores[playerId] || 0;
            document.getElementById(`player${playerNum}Health`).textContent = this.gameState.health[playerId] || 100;
            
            const card = document.getElementById(`player${playerNum}Card`);
            card.classList.toggle('active', playerId === this.gameState.currentTurn);
        });
        
        // Update word chain display
        this.updateWordChainDisplay();
    }
    
    updateWordChainDisplay() {
        const chainDisplay = document.getElementById('word-chain-display');
        chainDisplay.innerHTML = '';
        
        if (this.gameState.wordChain.length === 0) {
            chainDisplay.innerHTML = '<div class="chain-word">Start the chain!</div>';
            return;
        }
        
        this.gameState.wordChain.forEach((wordData, index) => {
            if (index > 0) {
                const arrow = document.createElement('div');
                arrow.className = 'chain-arrow';
                arrow.textContent = '→';
                chainDisplay.appendChild(arrow);
            }
            
            const wordDiv = document.createElement('div');
            wordDiv.className = 'chain-word';
            wordDiv.textContent = `${wordData.word.toUpperCase()} (+${wordData.score})`;
            chainDisplay.appendChild(wordDiv);
        });
    }
    
    updateGameStatus() {
        const statusEl = document.getElementById('gameStatus');
        const isMyTurn = this.gameState.currentTurn === this.gameState.playerId;
        
        if (isMyTurn) {
            const lastWord = this.gameState.wordChain[this.gameState.wordChain.length - 1];
            if (this.gameState.gameMode === 'chain' && lastWord) {
                const requiredStart = lastWord.word.slice(-1).toUpperCase();
                statusEl.textContent = `Your turn! Word must start with "${requiredStart}"`;
            } else {
                statusEl.textContent = 'Your turn! Enter any word to start the chain.';
            }
        } else {
            const currentPlayerName = this.gameState.players[this.gameState.currentTurn]?.name || 'Opponent';
            statusEl.textContent = `${currentPlayerName}'s turn...`;
        }
    }
    
    async submitWord() {
        const wordInput = document.getElementById('wordInput');
        const word = wordInput.value.trim().toLowerCase();
        
        if (!word) {
            alert('Please enter a word!');
            return;
        }
        
        if (this.gameState.currentTurn !== this.gameState.playerId) {
            alert('Not your turn!');
            return;
        }
        
        // Validate word
        const validation = this.validateWord(word);
        if (!validation.valid) {
            alert(validation.error);
            return;
        }
        
        // Calculate score
        const score = this.calculateScore(word);
        
        // Add to word chain
        const wordData = {
            word: word,
            player: this.gameState.playerId,
            playerName: this.gameState.players[this.gameState.playerId].name,
            score: score,
            round: this.gameState.round
        };
        
        this.gameState.wordChain.push(wordData);
        this.gameState.scores[this.gameState.playerId] += score;
        
        // Show score popup
        this.showScorePopup(score);
        
        // Clear input
        wordInput.value = '';
        
        // Clear timer
        if (this.gameState.timer) {
            clearInterval(this.gameState.timer);
        }
        
        // Switch turns
        this.switchTurns();
        
        // Check for game end
        if (this.gameState.round >= this.gameState.maxRounds) {
            this.endGame();
        } else {
            this.gameState.round++;
            this.startRound();
        }
        
        this.updateGameDisplay();
    }
    
    validateWord(word) {
        // Check if word exists in database
        const allWords = [...this.wordDatabase.easy, ...this.wordDatabase.medium, ...this.wordDatabase.hard];
        if (!allWords.includes(word)) {
            return { valid: false, error: 'Word not found in dictionary!' };
        }
        
        // Check minimum length
        if (word.length < 3) {
            return { valid: false, error: 'Word must be at least 3 letters long!' };
        }
        
        // Check if word was already used
        if (this.gameState.wordChain.some(w => w.word === word)) {
            return { valid: false, error: 'Word already used!' };
        }
        
        // Check ghost letters
        const wordUpper = word.toUpperCase();
        for (let letter of this.gameState.ghostLetters) {
            if (wordUpper.startsWith(letter) || wordUpper.endsWith(letter)) {
                return { valid: false, error: `Cannot use ghost letter "${letter}"!` };
            }
        }
        
        // Check chain connection (for chain mode)
        if (this.gameState.gameMode === 'chain' && this.gameState.wordChain.length > 0) {
            const lastWord = this.gameState.wordChain[this.gameState.wordChain.length - 1];
            const requiredStart = lastWord.word.slice(-1).toLowerCase();
            if (!word.startsWith(requiredStart)) {
                return { valid: false, error: `Word must start with "${requiredStart.toUpperCase()}"!` };
            }
        }
        
        return { valid: true };
    }
    
    calculateScore(word) {
        let baseScore = word.length;
        
        // Difficulty multiplier based on letters
        let difficultyMultiplier = 1.0;
        for (let letter of word.toLowerCase()) {
            if (this.letterDifficulty[letter]) {
                difficultyMultiplier *= this.letterDifficulty[letter];
            }
        }
        
        // Word difficulty bonus
        let wordDifficultyBonus = 1.0;
        if (this.wordDatabase.hard.includes(word)) {
            wordDifficultyBonus = 2.0;
        } else if (this.wordDatabase.medium.includes(word)) {
            wordDifficultyBonus = 1.5;
        }
        
        // Perfect match bonus (if word length equals round number)
        let perfectMatchBonus = this.gameState.round === word.length ? 1.5 : 1.0;
        
        const finalScore = Math.round(baseScore * difficultyMultiplier * wordDifficultyBonus * perfectMatchBonus);
        return Math.max(finalScore, 1); // Minimum 1 point
    }
    
    showScorePopup(score) {
        const popup = document.createElement('div');
        popup.className = 'score-popup';
        popup.textContent = `+${score} points!`;
        document.body.appendChild(popup);
        
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 2000);
    }
    
    switchTurns() {
        const playerIds = Object.keys(this.gameState.players);
        const currentIndex = playerIds.indexOf(this.gameState.currentTurn);
        const nextIndex = (currentIndex + 1) % playerIds.length;
        this.gameState.currentTurn = playerIds[nextIndex];
    }
    
    handleTimeout() {
        if (this.gameState.timer) {
            clearInterval(this.gameState.timer);
        }
        
        // Reduce health for current player
        const currentPlayerId = this.gameState.currentTurn;
        this.gameState.health[currentPlayerId] = Math.max(0, this.gameState.health[currentPlayerId] - 10);
        
        // Check if player is eliminated
        if (this.gameState.health[currentPlayerId] <= 0) {
            this.endGame();
            return;
        }
        
        // Switch turns and continue
        this.switchTurns();
        this.gameState.round++;
        
        if (this.gameState.round >= this.gameState.maxRounds) {
            this.endGame();
        } else {
            this.startRound();
        }
        
        this.updateGameDisplay();
    }
    
    endGame() {
        if (this.gameState.timer) {
            clearInterval(this.gameState.timer);
        }
        
        // Determine winner
        const playerIds = Object.keys(this.gameState.players);
        let winner = null;
        let highestScore = -1;
        
        playerIds.forEach(playerId => {
            const score = this.gameState.scores[playerId] || 0;
            const health = this.gameState.health[playerId] || 0;
            
            // Player with health > 0 and highest score wins
            if (health > 0 && score > highestScore) {
                highestScore = score;
                winner = playerId;
            }
        });
        
        this.showScreen('results');
        this.displayResults(winner);
    }
    
    displayResults(winnerId) {
        const playerIds = Object.keys(this.gameState.players);
        
        // Update final scores
        playerIds.forEach((playerId, index) => {
            const playerNum = index + 1;
            const player = this.gameState.players[playerId];
            const score = this.gameState.scores[playerId] || 0;
            
            document.getElementById(`finalPlayer${playerNum}Name`).textContent = player.name;
            document.getElementById(`finalPlayer${playerNum}Score`).textContent = score;
        });
        
        // Display winner message
        if (winnerId) {
            const winnerName = this.gameState.players[winnerId].name;
            document.getElementById('gameResult').textContent = '🎉 Game Over!';
            document.getElementById('winnerMessage').textContent = `${winnerName} wins with ${this.gameState.scores[winnerId]} points!`;
        } else {
            document.getElementById('gameResult').textContent = '🤝 Draw!';
            document.getElementById('winnerMessage').textContent = 'No clear winner!';
        }
        
        // Display game statistics
        const statsDiv = document.getElementById('gameStats');
        statsDiv.innerHTML = `
            <h4>Game Statistics</h4>
            <p>Total Rounds: ${this.gameState.round}</p>
            <p>Words Played: ${this.gameState.wordChain.length}</p>
            <p>Longest Word: ${this.gameState.wordChain.reduce((longest, word) => 
                word.word.length > longest.length ? word.word : longest, '').toUpperCase()}</p>
        `;
    }
    
    playAgain() {
        // Reset game state but keep players
        this.gameState.gameStarted = false;
        this.gameState.round = 0;
        this.gameState.wordChain = [];
        this.gameState.ghostLetters = [];
        
        Object.keys(this.gameState.players).forEach(playerId => {
            this.gameState.scores[playerId] = 0;
            this.gameState.health[playerId] = 100;
        });
        
        if (this.gameState.timer) {
            clearInterval(this.gameState.timer);
        }
        
        this.showScreen('lobby');
        this.updateLobby();
    }
    
    backToMenu() {
        // Reset everything
        this.gameState = {
            currentScreen: 'menu',
            roomCode: null,
            playerId: 'player_' + Math.random().toString(36).substr(2, 9),
            playerName: null,
            gameMode: 'chain',
            players: {},
            currentTurn: null,
            gameStarted: false,
            round: 0,
            maxRounds: 10,
            roundTime: 15,
            wordChain: [],
            ghostLetters: [],
            scores: {},
            health: {},
            timer: null,
            timeLeft: 0
        };
        
        if (this.gameState.timer) {
            clearInterval(this.gameState.timer);
        }
        
        this.showScreen('menu');
        document.getElementById('join-room-section').style.display = 'none';
    }
    
    showScreen(screenName) {
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(`${screenName}-screen`).classList.add('active');
        this.gameState.currentScreen = screenName;
    }
}

// Global functions for HTML onclick events
let game;

function createRoom() {
    game.createRoom();
}

function showJoinRoom() {
    game.showJoinRoom();
}

function joinRoom() {
    game.joinRoom();
}

function startGame() {
    game.startGame();
}

function submitWord() {
    game.submitWord();
}

function playAgain() {
    game.playAgain();
}

function backToMenu() {
    game.backToMenu();
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    game = new LetterLinkBattle();
});