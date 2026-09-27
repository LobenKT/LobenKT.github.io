// Word Bounds Game — two players, five rounds.
// Player 1 picks the starting letter, Player 2 picks the ending letter,
// then each player enters a word within those bounds. Longer valid word wins the round.
(function () {
  'use strict';

  var MAX_ROUNDS = 5;
  var state = { round: 1, scores: [0, 0], start: '', end: '', words: ['', ''], turn: 0, used: {} };

  var $ = function (id) { return document.getElementById(id); };
  var el = {
    round: $('round-number'), p1: $('p1-score'), p2: $('p2-score'), status: $('status-message'),
    p1Section: $('p1-letter-section'), p2Section: $('p2-letter-section'),
    firstInput: $('first-letter-input'), lastInput: $('last-letter-input'),
    submitFirst: $('submit-first-letter'), submitLast: $('submit-last-letter'),
    letterInputs: $('letter-inputs'), chosen: $('chosen-letters-display'),
    startDisplay: $('start-letter-display'), endDisplay: $('end-letter-display'),
    wordSection: $('word-entry-section'), wordLabel: $('word-input-label'), wordInput: $('word-input'),
    submitWord: $('submit-word'), wordError: $('word-error'),
    roundResult: $('round-result'), resultMessage: $('result-message'), nextRound: $('next-round-button'),
    gameOver: $('game-over'), finalScore: $('final-score'), reset: $('reset-game-button')
  };

  function show(node, visible) { node.style.display = visible ? '' : 'none'; }

  function setStatus(text) { el.status.textContent = text; }

  function letterFrom(input) {
    var v = (input.value || '').trim().toUpperCase();
    return /^[A-Z]$/.test(v) ? v : '';
  }

  function beginRound() {
    state.start = ''; state.end = ''; state.words = ['', '']; state.turn = 0;
    el.round.textContent = String(state.round);
    el.firstInput.value = ''; el.lastInput.value = ''; el.wordInput.value = ''; el.wordError.textContent = '';
    show(el.letterInputs, true); show(el.p1Section, true); show(el.p2Section, false);
    show(el.chosen, false); show(el.wordSection, false); show(el.roundResult, false); show(el.gameOver, false);
    setStatus('Player 1: Choose the STARTING letter.');
    el.firstInput.focus();
  }

  function submitFirstLetter() {
    var l = letterFrom(el.firstInput);
    if (!l) { setStatus('Player 1: enter a single letter A–Z.'); return; }
    state.start = l;
    show(el.p1Section, false); show(el.p2Section, true);
    setStatus('Player 2: Choose the ENDING letter.');
    el.lastInput.focus();
  }

  function submitLastLetter() {
    var l = letterFrom(el.lastInput);
    if (!l) { setStatus('Player 2: enter a single letter A–Z.'); return; }
    state.end = l;
    show(el.letterInputs, false); show(el.chosen, true);
    el.startDisplay.textContent = state.start; el.endDisplay.textContent = state.end;
    show(el.wordSection, true);
    promptWord();
  }

  function promptWord() {
    var n = state.turn + 1;
    el.wordLabel.textContent = 'Player ' + n + ', enter a word:';
    el.wordInput.value = ''; el.wordError.textContent = '';
    setStatus('Player ' + n + ': type a word that starts with ' + state.start + ' and ends with ' + state.end + '.');
    el.wordInput.focus();
  }

  function checkDictionary(word) {
    // Free, keyless dictionary lookup. If the network is unavailable we accept the word.
    if (!window.fetch || !window.AbortController) return Promise.resolve(true);
    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, 4000);
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word), { signal: ctrl.signal })
      .then(function (r) { return r.status !== 404; })
      .catch(function () { return true; })
      .then(function (ok) { clearTimeout(timer); return ok; });
  }

  function submitWord() {
    var word = (el.wordInput.value || '').trim().toLowerCase();
    el.wordError.textContent = '';
    if (!/^[a-z]+$/.test(word)) { el.wordError.textContent = 'Letters only, please.'; return; }
    if (word.length < 3) { el.wordError.textContent = 'Words must be at least 3 letters.'; return; }
    if (word[0].toUpperCase() !== state.start) { el.wordError.textContent = 'Word must start with ' + state.start + '.'; return; }
    if (word[word.length - 1].toUpperCase() !== state.end) { el.wordError.textContent = 'Word must end with ' + state.end + '.'; return; }
    if (state.used[word]) { el.wordError.textContent = 'That word was already used this game.'; return; }

    el.submitWord.disabled = true;
    el.wordError.textContent = 'Checking dictionary…';
    checkDictionary(word).then(function (ok) {
      el.submitWord.disabled = false;
      if (!ok) { el.wordError.textContent = '"' + word + '" is not in the dictionary.'; return; }
      state.used[word] = true;
      state.words[state.turn] = word;
      if (state.turn === 0) { state.turn = 1; promptWord(); }
      else finishRound();
    });
  }

  function finishRound() {
    var w1 = state.words[0], w2 = state.words[1], msg;
    if (w1.length > w2.length) { state.scores[0] += w1.length; msg = 'Player 1 wins the round: "' + w1 + '" (' + w1.length + ') beats "' + w2 + '" (' + w2.length + ').'; }
    else if (w2.length > w1.length) { state.scores[1] += w2.length; msg = 'Player 2 wins the round: "' + w2 + '" (' + w2.length + ') beats "' + w1 + '" (' + w1.length + ').'; }
    else { state.scores[0] += w1.length; state.scores[1] += w2.length; msg = 'Tie! Both words are ' + w1.length + ' letters. Both players score.'; }
    el.p1.textContent = String(state.scores[0]); el.p2.textContent = String(state.scores[1]);
    show(el.wordSection, false); show(el.roundResult, true);
    el.resultMessage.textContent = msg;
    setStatus('Round ' + state.round + ' complete.');
    el.nextRound.textContent = state.round >= MAX_ROUNDS ? 'See Final Score' : 'Next Round';
    el.nextRound.focus();
  }

  function nextRound() {
    if (state.round >= MAX_ROUNDS) { endGame(); return; }
    state.round += 1;
    beginRound();
  }

  function endGame() {
    show(el.roundResult, false); show(el.chosen, false); show(el.gameOver, true);
    var s = state.scores, winner = s[0] === s[1] ? "It's a draw!" : (s[0] > s[1] ? 'Player 1 wins!' : 'Player 2 wins!');
    el.finalScore.textContent = 'Player 1: ' + s[0] + '  ·  Player 2: ' + s[1] + '  —  ' + winner;
    setStatus('Game over.');
  }

  function resetGame() {
    state = { round: 1, scores: [0, 0], start: '', end: '', words: ['', ''], turn: 0, used: {} };
    el.p1.textContent = '0'; el.p2.textContent = '0';
    beginRound();
  }

  el.submitFirst.addEventListener('click', submitFirstLetter);
  el.submitLast.addEventListener('click', submitLastLetter);
  el.submitWord.addEventListener('click', submitWord);
  el.nextRound.addEventListener('click', nextRound);
  el.reset.addEventListener('click', resetGame);
  el.firstInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') submitFirstLetter(); });
  el.lastInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') submitLastLetter(); });
  el.wordInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') submitWord(); });

  beginRound();
})();
