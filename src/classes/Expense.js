class Expense {
	constructor(name, price, date) {
		this.id = Date.now().toString(32) + Math.random().toString(16);
		this.name = name;
		this.price = price;
		this.date = date;
	}
}

export default Expense;
