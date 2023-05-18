import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksChildComponent } from './hooks-child.component';

describe('HooksChildComponent', () => {
  let component: HooksChildComponent;
  let fixture: ComponentFixture<HooksChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HooksChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
