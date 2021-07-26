
// Selecting The Elements
// =====================

const p1BtnName = document.querySelector('#p1BtnName');
const p2BtnName = document.querySelector('#p2BtnName');


const p1BtnEdit = document.querySelector('#p1BtnEdit');
const p2BtnEdit = document.querySelector('#p2BtnEdit');

const generateNumber = document.querySelector('#generateNumber');

const resetGame = document.querySelector('#resetGame');

const resetPlayers = document.querySelector('#resetPlayers');

const secrateNumText = document.querySelector('#secrateNumText');
const snQuestion = document.querySelector('#snQuestion');
const snSpin = document.querySelector('#snSpin');
const snScore = document.querySelector('#snScore');

let p1DisplayScore = document.querySelector('#p1DisplayScore');
let p2DisplayScore = document.querySelector('#p2DisplayScore');

const winnerJoy = document.querySelector('body');

const countDown3 = document.querySelector('#countDown3');
const countDown2 = document.querySelector('#countDown2');
const countDown1 = document.querySelector('#countDown1');

// Environment Setup
//=================

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let gameOver = false;

// generateNumber Button Functionality.
//=================================

generateNumber.addEventListener('click', () => {
	if (p1Score > 0 || p2Score > 0) {
		alert("Please Reset the Game First!");
	} else {
		winningScore = Math.floor(Math.random() * 10) + 1;
		snQuestion.textContent = '';
		snScore.textContent = '';
		snSpin.classList.remove('d-none');
		countDown3.classList.remove('d-none');
		countDown2.classList.remove('d-none');
		countDown1.classList.remove('d-none');

	}
});


// Winner Function.
//===============

function winner(oldScore, winningScore) {
	if (oldScore === winningScore) {
		if (p1Score === winningScore) {
			p1BtnName.classList.add('bg-success');
			p2BtnName.classList.add('bg-danger');
			winnerJoy.classList.add('winner-joy')
				;
		} else {
			p1BtnName.classList.add('bg-danger');
			p2BtnName.classList.add('bg-success');
			winnerJoy.classList.add('winner-joy');
		}

		gameOver = true;
		p1BtnName.setAttribute('disabled', 'disabled');
		p2BtnName.setAttribute('disabled', 'disabled');

		snQuestion.classList.add('d-none');
		snSpin.classList.add('d-none');
		snScore.textContent = winningScore;
		secrateNumText.textContent = "The Secrate Number was..."

		alert('Game Over!');
	}
}


// Adding Event Listener to the Player Buttons to Incerement Value.
//======================================================

p1BtnName.addEventListener('click', () => {
	if (!gameOver && winningScore > 0) {
		p1Score++;
		p1DisplayScore.textContent = p1Score;
		winner(p1Score, winningScore);
	} else {
		alert('Generate Random Number First!');
	}

});

p2BtnName.addEventListener('click', () => {
	if (!gameOver && winningScore > 0) {
		p2Score++;
		p2DisplayScore.textContent = p2Score;
		winner(p2Score, winningScore);
	} else {
		alert('Generate Random Number First!');
	}

});


// Reset Fucntion.
//===============

function reset() {
	p1Score = 0;
	p1DisplayScore.textContent = p1Score;
	p1BtnName.removeAttribute('disabled');
	p1BtnName.classList.add('my-secondary-bg');

	p1BtnName.classList.remove('bg-success');
	p1BtnName.classList.remove('bg-danger');

	p2Score = 0;
	p2DisplayScore.textContent = p2Score;
	p2BtnName.removeAttribute('disabled');
	// p2BtnName.
	p2BtnName.classList.remove('bg-success');
	p2BtnName.classList.remove('bg-danger');

	winningScore = 0;
	gameOver = false;

	snQuestion.classList.remove('d-none');
	snQuestion.textContent = '?';
	snSpin.classList.add('d-none');
	snScore.textContent = '';
	secrateNumText.textContent = "The Secrate Number is...";
	winnerJoy.classList.remove('winner-joy');

	return reset();
}

// Reset Game
//===========

resetGame.addEventListener('click', () => {
	reset();
});








