import Animal from "./Animal";

class Cat extends Animal {
  // override
  public makeSound(): string {
    return "Meow! Meow!";
  }
}

export default Cat;