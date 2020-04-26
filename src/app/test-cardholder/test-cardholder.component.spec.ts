import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCardholderComponent } from './test-cardholder.component';

describe('TestCardholderComponent', () => {
  let component: TestCardholderComponent;
  let fixture: ComponentFixture<TestCardholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCardholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
