import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TradeorderComponent} from './tradeorder.component';
import {HttpClientModule} from '@angular/common/http';

describe('TradeorderComponent', () => {
  let component: TradeorderComponent;
  let fixture: ComponentFixture<TradeorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [TradeorderComponent]
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
