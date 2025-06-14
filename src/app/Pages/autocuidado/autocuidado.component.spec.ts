import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocuidadoComponent } from './autocuidado.component';

describe('AutocuidadoComponent', () => {
  let component: AutocuidadoComponent;
  let fixture: ComponentFixture<AutocuidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocuidadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutocuidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
