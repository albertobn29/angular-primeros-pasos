import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy ():void {
    this.counter += 1;
  }

  decreaseBy (value: number): void {
    this.counter -= value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
