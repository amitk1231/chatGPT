import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>Counter is working fine.</p>`,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  
  public counter: number = 0;
  
  constructor(){ }

   ngOnInit(): void{
       
   }

   increment(){
      this.counter++;
   }

   decrement(){
      this.counter--;
   }

}
