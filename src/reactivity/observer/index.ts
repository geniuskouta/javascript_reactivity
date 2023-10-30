export class Subject<T> {
	private observers: Array<Observer<T>>;

	constructor() {
		this.observers = [];
	}
	addObserver(observer: Observer<T>) {
		this.observers.push(observer);
	}
	removeObserver(observer: Observer<T>) {
		const index = this.observers.indexOf(observer);
		if (index > -1) {
			this.observers.splice(index, 1);
		}
	}
	notify(data: T) {
		this.observers.forEach(observer => observer.update(data));
	}
}

export class Observer<T> {
	update(data: T) {
		// Default update behavior, can be overridden by specific observers.
		console.log(`Received data: ${data}`);
	}
}
