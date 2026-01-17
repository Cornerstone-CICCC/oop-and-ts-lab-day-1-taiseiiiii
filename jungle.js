class Animal {
  static remainingAnimals = 0;

  #name;
  #species;
  #energy;

  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
    Animal.remainingAnimals++;
  }

  get name() {
    return this.#name;
  }

  get energy() {
    return this.#energy;
  }

  get species() {
    return this.#species;
  }

  set name(value) {
    this.#name = value;
  }

  set species(value) {
    this.#species = value;
  }

  set energy(value) {
    const wasAlive = this.#energy > 0;
    this.#energy = value;
    if (this.#energy <= 0) {
      this.#energy = 0;
      if (wasAlive) {
        Animal.remainingAnimals--;
      }
    }
  }

  attack(target, damage = 10) {
    if (this.energy <= 0) {
      console.log(`${this.name} has no energy and cannot attack!`);
      return;
    }

    console.log(`${this.name} attacks ${target.name}!`);

    this.energy -= damage;
    target.energy -= damage;

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    this.checkWinLose(target);
  }

  checkWinLose(target) {
    if (this.energy <= 0 && target.energy <= 0) {
      console.log(
        `Both ${this.name} and ${target.name} are out of energy! It's a draw!`,
      );
    } else if (this.energy <= 0) {
      console.log(`${target.name} wins! ${this.name} is out of energy!`);
    } else if (target.energy <= 0) {
      console.log(`${this.name} wins! ${target.name} is out of energy!`);
    }
  }

  eat(amount = 10) {
    console.log(`${this.name} eats and gains energy!`);
    this.energy += amount;
    console.log(`${this.name}'s energy: ${this.energy}`);
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(value) {
    this.#canFly = value;
  }

  attack(target) {
    if (this.energy <= 0) {
      console.log(`${this.name} has no energy and cannot attack!`);
      return;
    }

    console.log(`${this.name} swoops in to attack ${target.name}!`);

    this.energy -= 20;
    target.energy -= 20;

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    this.checkWinLose(target);
  }

  eat() {
    super.eat(10);
  }
}

class Mammal extends Animal {
  #furColor;
  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(value) {
    this.#furColor = value;
  }

  attack(target) {
    if (this.energy <= 0) {
      console.log(`${this.name} has no energy and cannot attack!`);
      return;
    }

    console.log(`${this.name} lunges to attack ${target.name}!`);

    this.energy -= 50;
    target.energy -= 50;

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    this.checkWinLose(target);
  }

  eat() {
    super.eat(20);
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  set coldBlooded(value) {
    this.#coldBlooded = value;
  }

  attack(target) {
    if (this.energy <= 0) {
      console.log(`${this.name} has no energy and cannot attack!`);
      return;
    }

    console.log(`${this.name} strikes to attack ${target.name}!`);

    this.energy -= 30;
    target.energy -= 30;

    console.log(`${this.name}'s energy: ${this.energy}`);
    console.log(`${target.name}'s energy: ${target.energy}`);

    this.checkWinLose(target);
  }

  eat() {
    super.eat(15);
  }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`,
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`,
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`,
);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
