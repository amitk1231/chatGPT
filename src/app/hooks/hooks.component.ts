import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss'],
})
export class HooksComponent {
  data: string;

  handleData(event) {
    this.data = event.target.value;
  }
}
