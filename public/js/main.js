/* class calculator {
  private num1: number;
  private num2: number;
  private operator: string | null;
  public constructor() {
    this.num1 = Number(prompt("number1....!"));
    this.operator = prompt("/ * - +");
    this.num2 = Number(prompt("number2....!"));
  }
  public processor(): any {
    switch (this.operator) {
      case "+": {
        return this.num1 + this.num2;
        break;
      }
      case "-": {
        return this.num1 - this.num2;
        break;
      }
      case "*": {
        return this.num1 * this.num2;
        break;
      }
      case "/": {
        return this.num1 / this.num2;
        break;
      }
      default:
        return "error!";
    }
  }
}
let calc = new calculator();
console.log(calc.processor()); */
/* class Calculator {
  private _num1: number;
  private _num2: number;
  private _operator: string | null;

  // public constructor() {
  //   this._num1 = Number(prompt("number1....!"));
  //   this._operator = prompt("/ * - +");
  //   this._num2 = Number(prompt("number2....!"));
  // }

  public get num1(): number {
    return this._num1;
  }

  public set num1(value: number) {
    this._num1 = value;
  }

  public get num2(): number {
    return this._num2;
  }

  public set num2(value: number) {
    this._num2 = value;
  }

  public get operator(): string | null {
    return this._operator;
  }

  public set operator(value: string | null) {
    this._operator = value;
  }

  public processor(): any {
    switch (this._operator) {
      case "+":
        return this._num1 + this._num2;
      case "-":
        return this._num1 - this._num2;
      case "*":
        return this._num1 * this._num2;
      case "/":
        return this._num1 / this._num2;
      default:
        return "error!";
    }
  }
}

let calc = new Calculator();
calc.num1 = 2;
calc.num2 = 4;
calc.operator = "*";
console.log(calc.processor());
console.log(calc.num1);
console.log(calc.num2);
console.log(calc.operator); */
