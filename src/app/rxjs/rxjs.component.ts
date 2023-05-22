import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  //Behavior object can't hold multiple values, it can only hold last values
  //Replay subject emits old values to new subscribers and it buffers in number of values
  ngOnInit(): void {
    const $rSubject = new ReplaySubject(2);
    // $rSubject.next('Hellooo...');
    // $rSubject.next(`What's up`);
    // $rSubject.next(`Hii....`);
    // console.log(`Console at line 15`);
    // $rSubject.subscribe((msg) => console.log(`User1: ${msg}`));

    $rSubject.next(`It was the best of time, it was the worst of time`);
    $rSubject.next(`Subject acts as an observer as well as an observable`);
    // $rSubject.subscribe((msg) => console.log(`User2: ${msg}`));
  }
}
