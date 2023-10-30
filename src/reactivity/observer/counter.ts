import { Subject, Observer } from '.';


type CounterState = {
    count: number,
    totalPrice: number
}

class CounterSubject extends Subject<CounterState> {
	private count: number;
	private price = 400;

	constructor(count: number) {
		super();
		this.count = count;
	}

	addObserver(observer: CounterObserver) {
		super.addObserver(observer);
	}

	increment() {
		this.count++;
		super.notify({
			count: this.count,
			totalPrice: this.count * this.price
		});
	}
}

class CounterObserver extends Observer<CounterState> {
	private element: HTMLButtonElement;
	constructor(element: HTMLButtonElement) {
		super();
		this.element = element;
	}

	update(data: CounterState) {
		this.element.innerHTML = `count is ${data.count} / total price is ${data.totalPrice}`;
	}
}

export function setupCounter(element: HTMLButtonElement) {
	const subject = new CounterSubject(0);
	const observer = new CounterObserver(element);
	subject.addObserver(observer);
	element.innerHTML = 'count is 0 / total price is 0';
	element.addEventListener('click', () => subject.increment());
}
