import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEmocionalComponent } from './educacion-emocional.component';

describe('EducacionEmocionalComponent', () => {
  let component: EducacionEmocionalComponent;
  let fixture: ComponentFixture<EducacionEmocionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducacionEmocionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducacionEmocionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
