import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonAnonimoComponent } from './buzon-anonimo.component';

describe('BuzonAnonimoComponent', () => {
  let component: BuzonAnonimoComponent;
  let fixture: ComponentFixture<BuzonAnonimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuzonAnonimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuzonAnonimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
