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
				return;
			}
		}
	}

	play(move) {
		if (this._finished || move < 0 || move > 6) {
			return false;
		} else {
			this.addToBoard(1, 'blue');
		}
	}
}
