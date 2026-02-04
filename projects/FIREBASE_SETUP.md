# Firebase Setup Guide for Letter-Link Battle

## 🚀 Setting Up Real-Time Multiplayer

To enable real multiplayer functionality, you'll need to set up Firebase Realtime Database.

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name your project (e.g., "letter-link-battle")
4. Enable Google Analytics (optional)
5. Create project

### Step 2: Set Up Realtime Database

1. In your Firebase project, go to "Realtime Database"
2. Click "Create Database"
3. Choose "Start in test mode" (for development)
4. Select your preferred location

### Step 3: Get Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon to add a web app
4. Register your app with a nickname
5. Copy the Firebase configuration object

### Step 4: Update the Game Code

Replace the demo Firebase config in `word-battle.js` with your real config:

```javascript
// Replace this in word-battle.js (line ~30)
this.firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com/",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

### Step 5: Initialize Real Firebase

Replace the demo Firebase initialization with real Firebase:

```javascript
initFirebase() {
    // Initialize Firebase
    firebase.initializeApp(this.firebaseConfig);
    this.database = firebase.database();
    
    this.updateConnectionStatus('connected');
    
    // Listen for connection status
    const connectedRef = this.database.ref('.info/connected');
    connectedRef.on('value', (snap) => {
        if (snap.val() === true) {
            this.updateConnectionStatus('connected');
        } else {
            this.updateConnectionStatus('disconnected');
        }
    });
}
```

### Step 6: Implement Real-Time Features

Replace the demo database calls with real Firebase calls:

```javascript
// Create room
async createRoom() {
    const playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert('Please enter your name!');
        return;
    }
    
    this.gameState.roomCode = this.generateRoomCode();
    this.gameState.playerName = playerName;
    
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
        },
        createdAt: firebase.database.ServerValue.TIMESTAMP
    };
    
    // Set room data
    await this.database.ref(`rooms/${this.gameState.roomCode}`).set(roomData);
    
    // Listen for room updates
    this.database.ref(`rooms/${this.gameState.roomCode}`).on('value', (snapshot) => {
        const roomData = snapshot.val();
        if (roomData) {
            this.handleRoomUpdate(roomData);
        }
    });
    
    this.showScreen('lobby');
    document.getElementById('displayRoomCode').textContent = this.gameState.roomCode;
}

// Join room
async joinRoom() {
    const playerName = document.getElementById('playerName').value.trim();
    const roomCode = document.getElementById('roomCode').value.trim().toUpperCase();
    
    if (!playerName || !roomCode) {
        alert('Please enter your name and room code!');
        return;
    }
    
    // Check if room exists
    const roomSnapshot = await this.database.ref(`rooms/${roomCode}`).once('value');
    const roomData = roomSnapshot.val();
    
    if (!roomData) {
        alert('Room not found!');
        return;
    }
    
    if (Object.keys(roomData.players).length >= 2) {
        alert('Room is full!');
        return;
    }
    
    this.gameState.roomCode = roomCode;
    this.gameState.playerName = playerName;
    
    // Add player to room
    await this.database.ref(`rooms/${roomCode}/players/${this.gameState.playerId}`).set({
        name: playerName,
        score: 0,
        health: 100,
        ready: false,
        joinedAt: firebase.database.ServerValue.TIMESTAMP
    });
    
    // Listen for room updates
    this.database.ref(`rooms/${roomCode}`).on('value', (snapshot) => {
        const roomData = snapshot.val();
        if (roomData) {
            this.handleRoomUpdate(roomData);
        }
    });
    
    this.showScreen('lobby');
    document.getElementById('displayRoomCode').textContent = roomCode;
}
```

### Step 7: Database Security Rules

Update your Realtime Database rules for basic security:

```json
{
  "rules": {
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true,
        ".validate": "$roomId.length === 6",
        "players": {
          "$playerId": {
            ".validate": "newData.hasChildren(['name', 'score', 'health'])"
          }
        }
      }
    }
  }
}
```

### Step 8: Room Cleanup

Add automatic room cleanup to prevent database bloat:

```javascript
// Clean up old rooms (call this periodically)
async cleanupOldRooms() {
    const cutoffTime = Date.now() - (30 * 60 * 1000); // 30 minutes ago
    const roomsRef = this.database.ref('rooms');
    
    const snapshot = await roomsRef.once('value');
    const rooms = snapshot.val();
    
    if (rooms) {
        Object.entries(rooms).forEach(([roomId, roomData]) => {
            if (roomData.createdAt < cutoffTime) {
                roomsRef.child(roomId).remove();
            }
        });
    }
}
```

## 🎮 Enhanced Features Implemented

### 1. **Chain Mode**
- Words must connect end-to-start letter
- Dynamic word chain display
- Visual connection arrows

### 2. **Enhanced Scoring System**
- Base points = word length
- Letter difficulty multipliers (Q, X, Z = 2.0x)
- Word difficulty bonuses (easy/medium/hard)
- Perfect match bonus (word length = round number)

### 3. **Burn Timer System**
- 15-second countdown per turn
- Visual timer bar with color changes
- Health reduction on timeout (-10 HP)
- Game ends when health reaches 0

### 4. **Ghost Letters**
- Every 3 rounds, random letters become "haunted"
- Cannot use ghost letters at start/end of words
- Visual display of forbidden letters

### 5. **Real-Time Features**
- Live connection status indicator
- Instant game state synchronization
- Turn-based gameplay
- Score updates in real-time

## 🔧 Testing Without Firebase

The current implementation works in demo mode without Firebase for testing:
- Simulates multiplayer with local state
- All game mechanics work offline
- Perfect for development and testing

## 🚀 Deployment

Once Firebase is set up:
1. Update the configuration
2. Deploy to GitHub Pages
3. Share room codes with friends
4. Enjoy real-time multiplayer word battles!

## 📱 Mobile Optimization

The game is fully responsive and works great on:
- Desktop browsers
- Mobile phones
- Tablets
- Touch devices

## 🎯 Future Enhancements

Potential additions:
- Player rankings/leaderboards
- Tournament mode
- Custom word lists
- Power-ups and special abilities
- Spectator mode
- Chat system