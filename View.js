export default class View {
	constructor() {
		//create a board
		const newBoard = document.createElement('div');
		newBoard.className = 'board';
	}

	renderBoard(board) {
		document.querySelector('.board');
		const newBoard = document.createElement('div');
		newBoard.setAttribute('id', 'board');
		newBoard.setAttribute('class', 'd-flex justify-content-center');

		for (let colum = 0; colum < 7; colum++) {
			let newColum = this.createColum(colum);
			for (let cell = 0; cell < 7; cell++) {
				let newCell = this.createCell(board[colum][cell]);
				newColum.prepend(newCell);
			}
			newBoard.appendChild(newColum);
		}

		if (document.querySelector('#board')) {
			document.querySelector('#board').remove();
			document.querySelector('#board-container').appendChild(newBoard);
		} else {
			document.querySelector('#board-container').appendChild(newBoard);
		}
	}

	createColum(id) {
		const newColum = document.createElement('div');
		newColum.setAttribute('id', id);
		newColum.setAttribute('class', `colum`);
		return newColum;
	}
	createCell(color) {
		const newCell = document.createElement('div');
		newCell.setAttribute('class', `cell`);
		newCell.style.backgroundColor = color;
		return newCell;
	}

	invalidMove() {
		if (!document.getElementById('invalid-move')) {
			const messageElement = document.createElement('div');
			messageElement.setAttribute('id', 'invalid-move');
			messageElement.innerText = 'Colum is full, choose another colum';
			document.querySelector('#info').append(messageElement);
		}
	}

	removeInvalidMove() {
		if (document.getElementById('invalid-move')) {
			document.getElementById('invalid-move').remove();
		}
	}
}
