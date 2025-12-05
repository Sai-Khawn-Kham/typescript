import Animal from "./Animal";

class Dog extends Animal {
  public makeSound(): string {
    return "Woof! Woof!";
  }
}

export default Dog;