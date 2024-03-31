import { Component } from "@angular/core";


@Component({
  selector:'app-couter',
  template:`
  <h3>Contador: {{couter}}</h3>
<button (click)="increaseBy(+10)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-10)">-1</button>
  `
})
export class CounterComponent{
  couter:number = 20;

  increaseBy(value:number): void{
    this.couter+=value;
  }

  reset(): void{
    this.couter =20;
  }

}
