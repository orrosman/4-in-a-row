import Connect4 from './Model.js';
import View from './View.js';
export default class Controller {
	constructor() {
		this.view = new View();
		this.model = new Connect4();

		this.view.renderBoard(this.model._board);
		const board = document.querySelectorAll('.colum');

		this.addClickEvent(board);

		document.getElementById('reset-game').addEventListener('click', () => {
			this.resetGame();
		});
	}

	addClickEvent(board) {
		this.showCurrentPlayer();

		for (const colum of board) {
			colum.addEventListener('click', () => {
				let newBoard = this.model.play(Number(colum.id)); //return a new board or false (for invalid move)

				if (newBoard) {
					this.view.renderBoard(newBoard); //render new board

					const columns = document.querySelectorAll('.colum');
					this.addClickEvent(columns); //add event listeners for new board
					this.view.removeInvalidMove();

					const resultWin = this.checkWin();

					if (resultWin) {
						alert(`${resultWin} wins!`);
						this.resetGame();
					} else if (this.model.checkDraw()) {
						alert("It's a draw!");
						this.resetGame();
					}
				} else {
					this.view.invalidMove();
				}
			});
		}
	}

	checkWin() {
		const lastPosition = this.model.lastPositionPlayed;
		return this.model.checkWin(...lastPosition);
	}

	showCurrentPlayer() {
		const player = this.model._currentPlayer;
		const playerElement = document.getElementById('player');

		playerElement.innerText = player;
		playerElement.style.color = player;
	}
	resetGame() {
		this.view = new View();
		this.model = new Connect4();

		this.view.renderBoard(this.model._board);
		const board = document.querySelectorAll('.colum');

		this.addClickEvent(board);
	}
}
const app = new Controller();
