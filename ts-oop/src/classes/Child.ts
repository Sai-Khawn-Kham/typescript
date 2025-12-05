import Person from "./Person";

class Child extends Person {
  public showCar() {
    // console.log(this._money); // Property '_money' is private and only accessible within class 'Person'
    return this.myCar;  // Accessing protected property
  }
}

export default Child;