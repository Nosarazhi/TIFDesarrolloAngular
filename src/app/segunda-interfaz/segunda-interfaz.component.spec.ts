import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaInterfazComponent } from './segunda-interfaz.component';

describe('SegundaInterfazComponent', () => {
  let component: SegundaInterfazComponent;
  let fixture: ComponentFixture<SegundaInterfazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundaInterfazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundaInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
