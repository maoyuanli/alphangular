import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeorderComponent } from './tradeorder.component';

describe('TradeorderComponent', () => {
  let component: TradeorderComponent;
  let fixture: ComponentFixture<TradeorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
