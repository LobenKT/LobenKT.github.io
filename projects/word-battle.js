// Word Battle Game Logic
class WordBattleGame {
    constructor() {
        this.gameState = {
            currentScreen: 'menu',
            roomCode: null,
            players: [],
            currentPlayer: null,
            targetWord: null,
            gameStarted: false,
            winner: null,
            guesses: [],
            playerGuesses: {}
        };
        
        // Word database - in a real app, this would be much larger
        this.wordDatabase = [
            'apple', 'brave', 'crane', 'dance', 'eagle', 'flame', 'grace', 'house',
            'image', 'judge', 'knife', 'light', 'mouse', 'nurse', 'ocean', 'peace',
            'queen', 'river', 'stone', 'table', 'uncle', 'voice', 'water', 'youth',
            'zebra', 'about', 'above', 'abuse', 'actor', 'acute', 'admit', 'adopt',
            'adult', 'after', 'again', 'agent', 'agree', 'ahead', 'alarm', 'album',
            'alert', 'alien', 'align', 'alike', 'alive', 'allow', 'alone', 'along',
            'alter', 'among', 'anger', 'angle', 'angry', 'apart', 'apple', 'apply',
            'arena', 'argue', 'arise', 'array', 'arrow', 'aside', 'asset', 'avoid',
            'awake', 'award', 'aware', 'badly', 'baker', 'bases', 'basic', 'beach',
            'began', 'begin', 'being', 'below', 'bench', 'billy', 'birth', 'black',
            'blame', 'blind', 'block', 'blood', 'board', 'boost', 'booth', 'bound',
            'brain', 'brand', 'brass', 'brave', 'bread', 'break', 'breed', 'brief',
            'bring', 'broad', 'broke', 'brown', 'build', 'built', 'buyer', 'cable',
            'calif', 'carry', 'catch', 'cause', 'chain', 'chair', 'chaos', 'charm',
            'chart', 'chase', 'cheap', 'check', 'chest', 'chief', 'child', 'china',
            'chose', 'civil', 'claim', 'class', 'clean', 'clear', 'click', 'climb',
            'clock', 'close', 'cloud', 'coach', 'coast', 'could', 'count', 'court',
            'cover', 'craft', 'crash', 'crazy', 'cream', 'crime', 'cross', 'crowd',
            'crown', 'crude', 'curve', 'cycle', 'daily', 'dance', 'dated', 'dealt',
            'death', 'debut', 'delay', 'depth', 'doing', 'doubt', 'dozen', 'draft',
            'drama', 'drank', 'dream', 'dress', 'drill', 'drink', 'drive', 'drove',
            'dying', 'eager', 'early', 'earth', 'eight', 'elite', 'empty', 'enemy',
            'enjoy', 'enter', 'entry', 'equal', 'error', 'event', 'every', 'exact',
            'exist', 'extra', 'faith', 'false', 'fault', 'fiber', 'field', 'fifth',
            'fifty', 'fight', 'final', 'first', 'fixed', 'flash', 'fleet', 'floor',
            'fluid', 'focus', 'force', 'forth', 'forty', 'forum', 'found', 'frame',
            'frank', 'fraud', 'fresh', 'front', 'fruit', 'fully', 'funny', 'giant',
            'given', 'glass', 'globe', 'going', 'grace', 'grade', 'grand', 'grant',
            'grass', 'grave', 'great', 'green', 'gross', 'group', 'grown', 'guard',
            'guess', 'guest', 'guide', 'happy', 'harry', 'heart', 'heavy', 'hence',
            'henry', 'horse', 'hotel', 'house', 'human', 'ideal', 'image', 'index',
            'inner', 'input', 'issue', 'japan', 'jimmy', 'joint', 'jones', 'judge',
            'known', 'label', 'large', 'laser', 'later', 'laugh', 'layer', 'learn',
            'lease', 'least', 'leave', 'legal', 'level', 'lewis', 'light', 'limit',
            'links', 'lives', 'local', 'loose', 'lower', 'lucky', 'lunch', 'lying',
            'magic', 'major', 'maker', 'march', 'maria', 'match', 'maybe', 'mayor',
            'meant', 'media', 'metal', 'might', 'minor', 'minus', 'mixed', 'model',
            'money', 'month', 'moral', 'motor', 'mount', 'mouse', 'mouth', 'moved',
            'movie', 'music', 'needs', 'never', 'newly', 'night', 'noise', 'north',
            'noted', 'novel', 'nurse', 'occur', 'ocean', 'offer', 'often', 'order',
            'other', 'ought', 'paint', 'panel', 'paper', 'party', 'peace', 'peter',
            'phase', 'phone', 'photo', 'piano', 'piece', 'pilot', 'pitch', 'place',
            'plain', 'plane', 'plant', 'plate', 'point', 'pound', 'power', 'press',
            'price', 'pride', 'prime', 'print', 'prior', 'prize', 'proof', 'proud',
            'prove', 'queen', 'quick', 'quiet', 'quite', 'radio', 'raise', 'range',
            'rapid', 'ratio', 'reach', 'ready', 'realm', 'rebel', 'refer', 'relax',
            'repay', 'reply', 'right', 'rigid', 'rival', 'river', 'robin', 'roger',
            'roman', 'rough', 'round', 'route', 'royal', 'rural', 'scale', 'scene',
            'scope', 'score', 'sense', 'serve', 'seven', 'shall', 'shape', 'share',
            'sharp', 'sheet', 'shelf', 'shell', 'shift', 'shine', 'shirt', 'shock',
            'shoot', 'short', 'shown', 'sides', 'sight', 'silly', 'since', 'sixth',
            'sixty', 'sized', 'skill', 'sleep', 'slide', 'small', 'smart', 'smile',
            'smith', 'smoke', 'snake', 'snow', 'social', 'solid', 'solve', 'sorry',
            'sound', 'south', 'space', 'spare', 'speak', 'speed', 'spend', 'spent',
            'split', 'spoke', 'sport', 'staff', 'stage', 'stake', 'stand', 'start',
            'state', 'steam', 'steel', 'steep', 'steer', 'steve', 'stick', 'still',
            'stock', 'stone', 'stood', 'store', 'storm', 'story', 'strip', 'stuck',
            'study', 'stuff', 'style', 'sugar', 'suite', 'super', 'sweet', 'table',
            'taken', 'taste', 'taxes', 'teach', 'teeth', 'terry', 'texas', 'thank',
            'theft', 'their', 'theme', 'there', 'these', 'thick', 'thing', 'think',
            'third', 'those', 'three', 'threw', 'throw', 'thumb', 'tiger', 'tight',
            'timer', 'tired', 'title', 'today', 'topic', 'total', 'touch', 'tough',
            'tower', 'track', 'trade', 'train', 'treat', 'trend', 'trial', 'tribe',
            'trick', 'tried', 'tries', 'truck', 'truly', 'trunk', 'trust', 'truth',
            'twice', 'uncle', 'under', 'undue', 'union', 'unity', 'until', 'upper',
            'upset', 'urban', 'usage', 'usual', 'valid', 'value', 'video', 'virus',
            'visit', 'vital', 'vocal', 'voice', 'waste', 'watch', 'water', 'wheel',
            'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women',
            'world', 'worry', 'worse', 'worst', 'worth', 'would', 'write', 'wrong',
            'wrote', 'young', 'youth', 'zebra'
        ];
        
        this.init();
    }
    
    init() {
        // Initialize event listeners
        document.getElementById('guessInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.makeGuess();
            }
        });
        
        // Auto-uppercase letter inputs
        ['startLetter', 'endLetter'].forEach(id => {
            document.getElementById(id).addEventListener('input', (e) => {
                e.target.value = e.target.value.toUpperCase();
            });
        });
    }
    
    // Generate a random room code
    generateRoomCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
    
    // Find words that start and end with specific letters
    findWordsWithConstraints(startLetter, endLetter) {
        const start = startLetter.toLowerCase();
        const end = endLetter.toLowerCase();
        
        return this.wordDatabase.filter(word => 
            word.charAt(0) === start && 
            word.charAt(word.length - 1) === end &&
            word.length >= 4 && word.length <= 8
        );
    }
    
    // Create a new game room
    createRoom() {
        const playerName = document.getElementById('playerName').value.trim();
        if (!playerName) {
            alert('Please enter your name!');
            return;
        }
        
        this.gameState.roomCode = this.generateRoomCode();
        this.gameState.currentPlayer = {
            name: playerName,
            id: 'player1',
            letters: null,
            guesses: 0
        };
        this.gameState.players = [this.gameState.currentPlayer];
        
        this.showScreen('lobby');
        document.getElementById('displayRoomCode').textContent = this.gameState.roomCode;
        this.updateLobby();
    }
    
    // Show join room input
    showJoinRoom() {
        document.getElementById('join-room-section').style.display = 'block';
    }
    
    // Join an existing room
    joinRoom() {
        const playerName = document.getElementById('playerName').value.trim();
        const roomCode = document.getElementById('roomCode').value.trim().toUpperCase();
        
        if (!playerName || !roomCode) {
            alert('Please enter your name and room code!');
            return;
        }
        
        // In a real implementation, this would connect to a server
        // For demo purposes, we'll simulate joining
        this.gameState.roomCode = roomCode;
        this.gameState.currentPlayer = {
            name: playerName,
            id: 'player2',
            letters: null,
            guesses: 0
        };
        
        // Simulate existing player
        this.gameState.players = [
            { name: 'Player 1', id: 'player1', letters: null, guesses: 0 },
            this.gameState.currentPlayer
        ];
        
        this.showScreen('lobby');
        document.getElementById('displayRoomCode').textContent = this.gameState.roomCode;
        this.updateLobby();
    }
    
    // Update lobby display
    updateLobby() {
        const lobbyPlayers = document.getElementById('lobbyPlayers');
        lobbyPlayers.innerHTML = '';
        
        this.gameState.players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            if (player.id === this.gameState.currentPlayer.id) {
                playerCard.classList.add('active');
            }
            
            playerCard.innerHTML = `
                <h4>${player.name}</h4>
                <p>Status: ${player.letters ? 'Ready' : 'Choosing letters...'}</p>
                ${player.letters ? `<p>Letters: ${player.letters.start} → ${player.letters.end}</p>` : ''}
            `;
            
            lobbyPlayers.appendChild(playerCard);
        });
        
        // Show letter selection if current player hasn't chosen
        if (!this.gameState.currentPlayer.letters) {
            document.getElementById('letter-selection').style.display = 'block';
        }
        
        // Show start button if both players are ready
        if (this.gameState.players.length === 2 && 
            this.gameState.players.every(p => p.letters)) {
            document.getElementById('startGameBtn').style.display = 'block';
        }
    }
    
    // Submit letter choices
    submitLetters() {
        const startLetter = document.getElementById('startLetter').value.trim().toUpperCase();
        const endLetter = document.getElementById('endLetter').value.trim().toUpperCase();
        
        if (!startLetter || !endLetter) {
            alert('Please choose both starting and ending letters!');
            return;
        }
        
        if (startLetter === endLetter) {
            alert('Starting and ending letters must be different!');
            return;
        }
        
        this.gameState.currentPlayer.letters = {
            start: startLetter,
            end: endLetter
        };
        
        document.getElementById('letter-selection').style.display = 'none';
        this.updateLobby();
    }
    
    // Start the game
    startGame() {
        if (this.gameState.players.length !== 2) {
            alert('Need 2 players to start!');
            return;
        }
        
        // Combine letter constraints from both players
        const allLetters = this.gameState.players.flatMap(p => [p.letters.start, p.letters.end]);
        const startLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        const endLetter = allLetters[Math.floor(Math.random() * allLetters.length)];
        
        // Find valid words
        const validWords = this.findWordsWithConstraints(startLetter, endLetter);
        
        if (validWords.length === 0) {
            alert('No valid words found with those letters! Please choose different letters.');
            return;
        }
        
        // Select random word
        this.gameState.targetWord = validWords[Math.floor(Math.random() * validWords.length)];
        this.gameState.gameStarted = true;
        this.gameState.playerGuesses = {};
        this.gameState.guesses = [];
        
        this.showScreen('game');
        this.updateGameDisplay();
    }
    
    // Update game display
    updateGameDisplay() {
        const word = this.gameState.targetWord;
        const clue = word.charAt(0).toUpperCase() + 
                    '_'.repeat(word.length - 2) + 
                    word.charAt(word.length - 1).toUpperCase();
        
        document.getElementById('wordClue').textContent = clue;
        document.getElementById('player1Name').textContent = this.gameState.players[0].name;
        document.getElementById('player2Name').textContent = this.gameState.players[1].name;
        document.getElementById('player1Guesses').textContent = this.gameState.players[0].guesses;
        document.getElementById('player2Guesses').textContent = this.gameState.players[1].guesses;
        
        // Update guess history
        this.updateGuessHistory();
    }
    
    // Make a guess
    makeGuess() {
        const guessInput = document.getElementById('guessInput');
        const guess = guessInput.value.trim().toLowerCase();
        
        if (!guess) {
            alert('Please enter a guess!');
            return;
        }
        
        if (guess.length !== this.gameState.targetWord.length) {
            alert(`Word must be ${this.gameState.targetWord.length} letters long!`);
            return;
        }
        
        // Check if word is correct
        if (guess === this.gameState.targetWord) {
            this.gameState.winner = this.gameState.currentPlayer;
            this.endGame();
            return;
        }
        
        // Add guess to history
        const guessResult = this.evaluateGuess(guess);
        this.gameState.guesses.push({
            player: this.gameState.currentPlayer.name,
            word: guess,
            result: guessResult
        });
        
        this.gameState.currentPlayer.guesses++;
        guessInput.value = '';
        
        this.updateGameDisplay();
        
        // Check for max guesses (optional)
        if (this.gameState.currentPlayer.guesses >= 6) {
            document.getElementById('gameStatus').textContent = 'Maximum guesses reached!';
        }
    }
    
    // Evaluate guess (Wordle-style)
    evaluateGuess(guess) {
        const target = this.gameState.targetWord;
        const result = [];
        
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === target[i]) {
                result.push('correct');
            } else if (target.includes(guess[i])) {
                result.push('present');
            } else {
                result.push('absent');
            }
        }
        
        return result;
    }
    
    // Update guess history display
    updateGuessHistory() {
        const historyDiv = document.getElementById('guessHistory');
        historyDiv.innerHTML = '';
        
        this.gameState.guesses.slice(-5).forEach(guess => {
            const guessDiv = document.createElement('div');
            guessDiv.className = 'guess-grid';
            
            for (let i = 0; i < guess.word.length; i++) {
                const letterBox = document.createElement('div');
                letterBox.className = `letter-box ${guess.result[i]}`;
                letterBox.textContent = guess.word[i].toUpperCase();
                guessDiv.appendChild(letterBox);
            }
            
            const playerLabel = document.createElement('p');
            playerLabel.textContent = `${guess.player}:`;
            playerLabel.style.marginBottom = '0.5rem';
            
            const container = document.createElement('div');
            container.appendChild(playerLabel);
            container.appendChild(guessDiv);
            container.style.marginBottom = '1rem';
            
            historyDiv.appendChild(container);
        });
    }
    
    // End the game
    endGame() {
        this.showScreen('results');
        document.getElementById('finalWord').textContent = this.gameState.targetWord.toUpperCase();
        
        if (this.gameState.winner) {
            document.getElementById('gameResult').textContent = '🎉 Game Won!';
            document.getElementById('winnerMessage').textContent = 
                `${this.gameState.winner.name} found the word in ${this.gameState.winner.guesses + 1} guesses!`;
        } else {
            document.getElementById('gameResult').textContent = '⏰ Time\'s Up!';
            document.getElementById('winnerMessage').textContent = 
                `The word was: ${this.gameState.targetWord.toUpperCase()}`;
        }
    }
    
    // Play again
    playAgain() {
        this.gameState.gameStarted = false;
        this.gameState.winner = null;
        this.gameState.targetWord = null;
        this.gameState.guesses = [];
        this.gameState.players.forEach(p => p.guesses = 0);
        
        this.showScreen('lobby');
        this.updateLobby();
    }
    
    // Back to main menu
    backToMenu() {
        this.gameState = {
            currentScreen: 'menu',
            roomCode: null,
            players: [],
            currentPlayer: null,
            targetWord: null,
            gameStarted: false,
            winner: null,
            guesses: [],
            playerGuesses: {}
        };
        
        this.showScreen('menu');
        document.getElementById('join-room-section').style.display = 'none';
    }
    
    // Show specific screen
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

function submitLetters() {
    game.submitLetters();
}

function startGame() {
    game.startGame();
}

function makeGuess() {
    game.makeGuess();
}

function playAgain() {
    game.playAgain();
}

function backToMenu() {
    game.backToMenu();
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    game = new WordBattleGame();
});