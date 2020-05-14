import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {StockindexComponent} from './stockindex.component';

describe('StockindexComponent', () => {
  let component: StockindexComponent;
  let fixture: ComponentFixture<StockindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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

  it('should generate proper dates range', () => {
    const result = component.createDateRangeString(180);
    expect(result).toBe('&start_date=2019-11-16&end_date=2020-05-14');
  });
});
