import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotecardComponent } from './quotecard.component';

describe('QuotecardComponent', () => {
  let component: QuotecardComponent;
  let fixture: ComponentFixture<QuotecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
