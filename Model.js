export default class Connect4 {
	constructor() {
		this._board = this.createBoard();
		this._currentPlayer = 'Blue';
		this.lastPositionPlayed = [];
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
				this.lastPositionPlayed = [colum, i, player];
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
			if (colum + i < 7 && this._board[colum + i][row] == color) {
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
			if (colum - i > 0 && this._board[colum - i][row] == color) {
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
			if (row + i < 7 && this._board[colum][row + i] == color) {
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
			if (row - i >= 0 && this._board[colum][row - i] == color) {
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
		//check win starting point to upper-right
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
			if (
				row + i < 7 &&
				colum + i < 7 &&
				this._board[colum + i][row + i] == color
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

		//check win starting point to lower-right
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
			if (
				colum + i < 7 &&
				row - i >= 0 &&
				this._board[colum + i][row - i] == color
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

		//check win starting point to upper-left
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
			if (
				colum - i >= 0 &&
				row + i < 7 &&
				this._board[colum - i][row + i] == color
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

		//check win starting point to lower-left
		for (let i = 0; i < 4; i++) {
			//check for color matching & not over-iterating the array
			if (
				colum - i >= 0 &&
				row - i >= 0 &&
				this._board[colum - i][row - i] == color
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
		return false;
	}

	checkWin(colum, row, color) {
		if (
			this.checkWinHorizontally(colum, row, color) ||
			this.checkWinVertically(colum, row, color) ||
			this.checkWinDiagonally(colum, row, color)
		) {
			this._finished = true;
			return color;
		} else {
			return false;
		}
	}

	checkDraw() {
		for (let i = 0; i < this._board.length; i++) {
			for (let j = 0; j < this._board[i].length; j++) {
				if (this.checkWin(i, j, this._board[i][j])) {
					return false;
				}
			}
		}
		return true;
	}

	checkIfFull(colum) {
		//check the last row of the colum
		if (this._board[colum][6]) {
			return true;
		} else {
			return false;
		}
	}

	play(colum) {
		if (this._finished || colum < 0 || colum > 6 || this.checkIfFull(colum)) {
			return false;
		} else {
			this.addToBoard(colum, this._currentPlayer);
			this.switchPlayer();
			return this._board; //indicate for no win
		}
	}
}
