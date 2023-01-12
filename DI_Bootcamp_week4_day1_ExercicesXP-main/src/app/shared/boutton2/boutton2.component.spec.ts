import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boutton2Component } from './boutton2.component';

describe('Boutton2Component', () => {
  let component: Boutton2Component;
  let fixture: ComponentFixture<Boutton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boutton2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boutton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
