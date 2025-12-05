import type { Gender } from "../types/PersonTypes";

class Person {
  public myName: string;
  public myAge: number;
  public gender: Gender;

  protected myCar: string = "Lamborghini";  // Property 'myCar' is protected and only accessible within class 'Person' and its subclasses

  private _money: number = 0; // Property '_money' is private and only accessible within class 'Person'

  public getMoney(): number {
    return this._money;
  }

  public depositMoney(amount: number) {
    this._money += amount;
  }

  public withdrawMoney(amount: number) {
    this._money -= amount;
  }

  constructor(name: string, age: number, gender: Gender) {
    this.myName = name;
    this.myAge = age;
    this.gender = gender;
  }
}

export default Person;