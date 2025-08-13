import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDocenteComponent } from './material-docente.component';

describe('MaterialDocenteComponent', () => {
  let component: MaterialDocenteComponent;
  let fixture: ComponentFixture<MaterialDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDocenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
