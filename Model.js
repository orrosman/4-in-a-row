class Connect4 {
	constructor() {
		this._board = this.createBoard();
		this._currentPlayer = 'Blue';
		this._finished = false;
	}
	createBoard() {
		const board = [];
		for (let i = 0; i < 7; i++) {
			board[i] = new Array(7);
		}
		return board;
	}

	addToBoard(colum, player) {
		for (let i = 0; i < this._board[colum].length; i++) {
			if (!this._board[colum][i]) {
				this._board[colum].splice(i, 1, player);
				this.switchPlayer();
				return;
			}
		}
	}

	switchPlayer() {
		if (this._currentPlayer == 'Blue') {
			this._currentPlayer = 'Red';
		} else {
			this._currentPlayer = 'Blue';
		}
	}

	//gets a start point
	checkWinHorizontal(colum, row, color) {
		let count = 0;
		for (let i = 0; i < 4; i++) {
			if (this._board[colum + i][row] == color && colum + i < 7) {
				count++;
				if (count == 4) {
					return true;
				}
			} else {
				count = 0;
				break;
			}
		}
		count = 0;
		for (let i = 0; i < 4; i++) {
			if (this._board[colum - i][row] == color && colum - i > 0) {
				count++;
				if (count == 4) {
					return true;
				}
			} else {
				count = 0;
				break;
			}
		}

		return false;
	}

	play(move) {
		if (this._finished || move < 0 || move > 6) {
			return false;
		} else {
			this.addToBoard(1, 'blue');
		}
	}
}
