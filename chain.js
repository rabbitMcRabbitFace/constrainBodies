class Chain {
	constructor(obj1,obj2) {
		var options = {
			bodyA: obj1,
			bodyB: obj2,
			stiffness: 0.04,
			length: 10
		}

		this.chain = Constraint.create(options);
		World.add(world, this.chain)
	}

	display() {
		var a = this.chain.bodyA.position;
		var b = this.chain.bodyB.position;

		strokeWeight(4);
		line(a.x, a.y, b.x, b.y);
	}
}
