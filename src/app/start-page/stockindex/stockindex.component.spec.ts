import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StockindexComponent} from './stockindex.component';

describe('StockindexComponent', () => {
  let component: StockindexComponent;
  let fixture: ComponentFixture<StockindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockindexComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
