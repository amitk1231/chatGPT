import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent {
  @ViewChildren('highlight') marker: QueryList<any>;
  @ViewChild('childView')child: CounterComponent;

  constructor( private cdref: ChangeDetectorRef) {}
  ngAfterViewInit() {
    console.log(this.marker);
    this.marker.first.nativeElement.style.color = 'blue';
    this.marker.last.nativeElement.style.color = 'red';
  }

  ngAfterContentChecked() {
     this.cdref.detectChanges();
  }

  inc(){
    this.child.increment();
  }
  dec(){
    this.child.decrement();
  }
}
