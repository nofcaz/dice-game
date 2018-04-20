/*
GAME RULES:
- The game consists of two players playing in consecutive rounds.
- For each turn, a player rolls the die as many times as they wish. Each result of the roll gets added to the player's ROUND score.
- If the player rolls a one, the ROUND score gets reset and the other player gets to roll.
- The player can choose to 'hold' their current ROUND score, which adds it to their GLOBAL score, while ending their turn.
- The first player to reach 100 points in their GLOBAL score wins the game.
*/

// Declare global variables
var scores, roundScore, activePlayer, gamePlaying;

// Initialize the game on page load
init();

// Generate dice variable
dice = Math.floor(Math.random()*6) + 1;

// Initialize the game
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
	
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.add('active');
}

// Switch between players
function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Switch between players 1 and 2
	roundScore = 0; // Reset current score
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}

// Start a new game at any point
document.querySelector('.btn-new').addEventListener('click', init);

// Roll the die
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
	// Generate a random die number 
	var dice = Math.floor(Math.random() * 6) + 1;
	// Display the resulting number roll with the proper picture of the corresponding side of the die
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';
	// Update the ROUND score if the rolled number wasn't 1, or else move to the other player
		if (dice !== 1) {
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			} else {
				nextPlayer();
		}
	}
});

// Hold the current score
document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {
		// Add current score to global score
		scores[activePlayer] += roundScore;
		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		// Check if player is victorious and display the accolade while stopping the game
		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
			nextPlayer(); // If the current player hasn't won yet, move on to the next player
		}
	}
});