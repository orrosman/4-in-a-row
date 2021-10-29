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
	checkWinHorizontally(colum, row, color) {
		let count = 0;
		//check win to the right
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
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
		//check win to the left
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
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

	//gets a start point
	checkWinVertically(colum, row, color) {
		let count = 0;
		//check win up
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
			if (this._board[colum][row + i] == color && row + i < 7) {
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
		//check win down
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
			if (this._board[colum][row - i] == color && row - i >= 0) {
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

	//gets a start point
	checkWinDiagonally(colum, row, color) {
		let count = 0;
		//check win bottom-left to upper-right
		for (let i = 0; i < 4; i++) {
			console.log(this._board[colum + i][row + i]);
			//check for color matching & not over-iterating the array
			if (
				this._board[colum + i][row + i] == color &&
				row + i < 7 &&
				colum + i < 7
			) {
				count++;
				if (count == 4) {
					return true;
				}
			} else {
				count = 0;
				break;
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
