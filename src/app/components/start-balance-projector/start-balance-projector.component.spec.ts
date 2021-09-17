import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBalanceProjectorComponent } from './start-balance-projector.component';

describe('StartBalanceProjectorComponent', () => {
  let component: StartBalanceProjectorComponent;
  let fixture: ComponentFixture<StartBalanceProjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartBalanceProjectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBalanceProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
