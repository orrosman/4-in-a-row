import Connect4 from './Model.js';
import View from './View.js';
export default class Controller {
	constructor() {
		this.view = new View();
		this.model = new Connect4();

		this.view.renderBoard(this.model._board);
		const board = document.querySelectorAll('.colum');

		this.addClickEvent(board);
	}

	addClickEvent(board) {
		for (const colum of board) {
			colum.addEventListener('click', () => {
				let newBoard = this.model.play(Number(colum.id));
				if (newBoard) {
					this.view.renderBoard(newBoard);
					const columns = document.querySelectorAll('.colum');
					this.addClickEvent(columns);

					const resultWin = this.checkWin();
					if (resultWin) {
						alert(`${resultWin} wins!`);
					}
				}
			});
		}
	}

	checkWin() {
		const lastPosition = this.model.lastPositionPlayed;
		return this.model.checkWin(...lastPosition);
	}
}
const app = new Controller();
