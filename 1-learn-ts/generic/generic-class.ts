class Container<T> {
  constructor(private value: T) {}
  
  getValue(): T {
    return this.value;
  }
  
  map<U>(fn: (value: T) => U): Container<U> {
    return new Container(fn(this.value));
  }
}