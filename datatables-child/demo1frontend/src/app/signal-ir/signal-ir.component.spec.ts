import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalIRComponent } from './signal-ir.component';

describe('SignalIRComponent', () => {
  let component: SignalIRComponent;
  let fixture: ComponentFixture<SignalIRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalIRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalIRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
