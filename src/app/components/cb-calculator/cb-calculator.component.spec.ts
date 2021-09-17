import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbCalculatorComponent } from './cb-calculator.component';

describe('CbCalculatorComponent', () => {
  let component: CbCalculatorComponent;
  let fixture: ComponentFixture<CbCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CbCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
