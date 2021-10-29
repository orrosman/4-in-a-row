// import Event from './Events';
class View {
	constructor() {
		this._playerEvent = new Event();
	}

	render() {
		const board = document.createElement('div');
		board.className = 'board';

		for (let colum = 0; colum < 7; colum++) {
			let newColum = document.createElement('div');
			newColum.setAttribute('id', `colum_${colum}`);
			newColum.setAttribute('class', `colum`);
			for (let cell = 0; cell < 7; cell++) {
				let newCell = document.createElement('div');
				newCell.setAttribute('class', `cell`);
				newCell.innerText = 'h';
				newColum.appendChild(newCell);
			}
			board.appendChild(newColum);
		}
		return board;
	}
}
export default View;
