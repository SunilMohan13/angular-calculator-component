import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class CalculatorComponent implements OnInit {
  inp1: number;
  inp2: number;
  result: number;
  symbol: string;
  count: number = 0;

  ngOnInit() {}

  reset(in1, in2) {
    this.inp1 = in1;
    this.inp2 = in2;
    this.inp1 = +"";
    this.inp2 = +"";
    this.symbol = "+";
    this.count = 0;
    this.result = 0;
  }

  operations(inp1, inp2, op) {
    if (op == "add") {
      this.result = inp1 + inp2;
      this.symbol = "+";
      this.count = this.count + 1;
      return this.result, this.symbol, this.count;
    } else if (op == "sub") {
      this.result = inp1 - inp2;
      this.symbol = "-";
      this.count = this.count + 1;
      return this.result, this.symbol, this.count;
    } else if (op == "mul") {
      this.result = inp1 * inp2;
      this.symbol = "*";
      this.count = this.count + 1;
      return this.result, this.symbol, this.count;
    } else if (op == "div") {
      this.result = inp1 / inp2;
      this.symbol = "/";
      this.count = this.count + 1;
      return this.result, this.symbol, this.count;
    }
  }
}
