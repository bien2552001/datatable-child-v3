import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentchartDemoComponent } from './currentchart-demo.component';

describe('CurrentchartDemoComponent', () => {
  let component: CurrentchartDemoComponent;
  let fixture: ComponentFixture<CurrentchartDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentchartDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentchartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
