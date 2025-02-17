import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBaileComponent } from './crear-baile.component';

describe('CrearBaileComponent', () => {
  let component: CrearBaileComponent;
  let fixture: ComponentFixture<CrearBaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearBaileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearBaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
