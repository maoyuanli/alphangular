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
    component.avgSentScore = Math.random() - 0.5;
    fixture.detectChanges();
  });

  it('should generate proper dates range', () => {
    const baseDate = new Date(2020, 2, 15);
    spyOn(Date, 'now').and.returnValue(baseDate.getTime());
    const result = component.createDateRangeString(180);
    expect(result).toBe('&start_date=2019-09-17&end_date=2020-03-15');
  });

  it('index return should go with avg sentiment score', async(() => {
    component.fetchStockIndexDirect();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const givenAvgSentScore = Number(component.avgSentScore);
      const calculatedReturn = Number(component.indexData.change);
      expect(givenAvgSentScore * calculatedReturn).toBeGreaterThan(0);
    });
  }));
});
