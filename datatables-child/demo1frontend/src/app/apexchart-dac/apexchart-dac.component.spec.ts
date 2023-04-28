import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexchartDACComponent } from './apexchart-dac.component';

describe('ApexchartDACComponent', () => {
  let component: ApexchartDACComponent;
  let fixture: ComponentFixture<ApexchartDACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApexchartDACComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApexchartDACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
