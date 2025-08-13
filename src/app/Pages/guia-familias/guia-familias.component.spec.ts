import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaFamiliasComponent } from './guia-familias.component';

describe('GuiaFamiliasComponent', () => {
  let component: GuiaFamiliasComponent;
  let fixture: ComponentFixture<GuiaFamiliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiaFamiliasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuiaFamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
