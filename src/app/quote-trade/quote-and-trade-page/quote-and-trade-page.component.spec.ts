import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuoteAndTradePageComponent} from './quote-and-trade-page.component';

describe('QuoteAndTradePageComponent', () => {
  let component: QuoteAndTradePageComponent;
  let fixture: ComponentFixture<QuoteAndTradePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuoteAndTradePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAndTradePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
