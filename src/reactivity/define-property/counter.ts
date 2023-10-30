type CounterState = {
	_count: number,
	count: number,
	totalPrice: number
}

export function setupCounter(element: HTMLButtonElement) {
	const price = 400;
	const counterState: CounterState = {
		_count: 0,
		get count() {
			return this._count;
		},
		set count(value) {
			this._count = value;
			updateDOM();
		},
		get totalPrice() {
			return this._count * price;
		},
	};

	const updateDOM = () => {
		element.innerHTML = `count is ${counterState.count} / total price is ${counterState.totalPrice}`;
	};

	const increment = () => {
		counterState.count += 1;
	};

	element.innerHTML = 'count is 0 / total price is 0';
	element.addEventListener('click', () => { increment(); });
}
