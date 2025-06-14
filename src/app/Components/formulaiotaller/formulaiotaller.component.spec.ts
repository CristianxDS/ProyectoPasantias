import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaiotallerComponent } from './formulaiotaller.component';

describe('FormulaiotallerComponent', () => {
  let component: FormulaiotallerComponent;
  let fixture: ComponentFixture<FormulaiotallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaiotallerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaiotallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
