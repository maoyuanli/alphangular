import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuoteAndTradePageComponent} from './quote-and-trade-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

describe('QuoteAndTradePageComponent', () => {
  let component: QuoteAndTradePageComponent;
  let fixture: ComponentFixture<QuoteAndTradePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule],
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
