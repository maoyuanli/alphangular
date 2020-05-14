import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchnewsComponent} from './searchnews.component';
import {HttpClientModule} from '@angular/common/http';

describe('SearchnewsComponent', () => {
  let component: SearchnewsComponent;
  let fixture: ComponentFixture<SearchnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SearchnewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
