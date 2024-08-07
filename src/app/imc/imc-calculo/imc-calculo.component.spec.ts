import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcCalculoComponent } from './imc-calculo.component';

describe('ImcCalculoComponent', () => {
  let component: ImcCalculoComponent;
  let fixture: ComponentFixture<ImcCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImcCalculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImcCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
