import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagginiComponent } from './messaggini.component';

describe('MessagginiComponent', () => {
  let component: MessagginiComponent;
  let fixture: ComponentFixture<MessagginiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagginiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagginiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
