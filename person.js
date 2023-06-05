class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Hello, my name is ${this.name}!!!`;
  }
}

module.exports = {
  Person,
};
