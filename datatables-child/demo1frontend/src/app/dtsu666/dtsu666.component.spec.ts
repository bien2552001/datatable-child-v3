import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dtsu666Component } from './dtsu666.component';

describe('Dtsu666Component', () => {
  let component: Dtsu666Component;
  let fixture: ComponentFixture<Dtsu666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dtsu666Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dtsu666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
