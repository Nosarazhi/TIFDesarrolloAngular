import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraInterfazComponent } from './primera-interfaz.component';

describe('PrimeraInterfazComponent', () => {
  let component: PrimeraInterfazComponent;
  let fixture: ComponentFixture<PrimeraInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimeraInterfazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeraInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
