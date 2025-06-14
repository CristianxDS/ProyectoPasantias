import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsiedadEscolarComponent } from './ansiedad-escolar.component';

describe('AnsiedadEscolarComponent', () => {
  let component: AnsiedadEscolarComponent;
  let fixture: ComponentFixture<AnsiedadEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsiedadEscolarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnsiedadEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
