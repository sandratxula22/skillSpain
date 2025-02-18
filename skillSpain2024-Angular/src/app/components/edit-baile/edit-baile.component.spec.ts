import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBaileComponent } from './edit-baile.component';

describe('EditBaileComponent', () => {
  let component: EditBaileComponent;
  let fixture: ComponentFixture<EditBaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBaileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
