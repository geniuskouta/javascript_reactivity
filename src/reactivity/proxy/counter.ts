type CounterState = {
	count: number,
	totalPrice: number
}
  
export function setupCounter(element: HTMLButtonElement) {
	const price = 400;
	const counterHandler: ProxyHandler<Record<string, any>> = {
		get(target, property) {
			return target[String(property)];
		},
		set: function(target, property, value) {
			target[String(property)] = value;
			updateDOM();
			return true; // indicates that the setting has been done successfully
		}
	};
	const counter: CounterState = {
		count: 0,
		get totalPrice () {
			return this.count * price;
		},
	};

	const counterState = new Proxy(counter, counterHandler);

	const updateDOM = () => {
		element.innerHTML = `count is ${counterState.count} / total price is ${counterState.totalPrice}`;
	};

	const increment = () => {
		counterState.count += 1;
	};
	element.innerHTML = 'count is 0 / total price is 0';
	element.addEventListener('click', () => { increment(); });
}
