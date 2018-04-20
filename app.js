/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

dice = Math.floor(Math.random()*6) + 1;

document.querySelector('.btn-roll').addEventListener('click', function() {
	// if (gamePlaying != true) return; // Halts ability to roll die if the game is not being played
	if (gamePlaying) {
	// random number
	var dice = Math.floor(Math.random() * 6) + 1;

	// display result
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';

	// update round score if rolled num was !1
	if (dice !== 1) {
		// add score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		// next player
		nextPlayer();
	}
}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
	// Add current score to global score
	scores[activePlayer] += roundScore;

	// Update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	// Check if player is victorious and display the accolade
	if (scores[activePlayer] >= 100) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	} else {
		nextPlayer();
	}
}
});

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	// document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
	// document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');

}

// var x = document.querySelector('#score-0').textContent;
// document.querySelector('#current-').textContent = dice;
// document.querySelector('#current-', activePlayer).textContent = '<em>' + dice + '</em>';