import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuotepageComponent} from './quotepage.component';
import {HttpClientModule} from '@angular/common/http';

describe('QuotepageComponent', () => {
  let component: QuotepageComponent;
  let fixture: ComponentFixture<QuotepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [QuotepageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
