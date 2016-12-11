class Observer {
	constructor(sender) {
		this.sender = sender;
		this.listeners = [];
	}

	attach(listener) {
		this.listeners.push(listener);
	}

	notify(args) {
		for(let index = 0; index < this.listeners.length; index ++) {
			this.listeners[index](this.sender, args);
		}
	}
}