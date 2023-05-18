import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.scss']
})
export class HooksChildComponent implements OnInit, OnChanges{
  
  @Input() parentData: string;
  constructor(){
    console.log('constructor called...');
  }
  
  ngOnInit(): void {
     console.log(`ngOnInit called...`);
   }

  //ngOnChanges belongs to the data-bound property 
  //until and unless any input property is changed, it won't be executed

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges called...`);
  }  
}
