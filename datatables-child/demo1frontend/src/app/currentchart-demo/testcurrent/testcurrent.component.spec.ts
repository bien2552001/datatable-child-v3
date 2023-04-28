import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcurrentComponent } from './testcurrent.component';

describe('TestcurrentComponent', () => {
  let component: TestcurrentComponent;
  let fixture: ComponentFixture<TestcurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestcurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestcurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
