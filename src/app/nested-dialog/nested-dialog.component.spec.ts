import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedDialogComponent } from './nested-dialog.component';

describe('NestedDialogComponent', () => {
  let component: NestedDialogComponent;
  let fixture: ComponentFixture<NestedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
