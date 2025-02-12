import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailesComponent } from './bailes.component';

describe('BailesComponent', () => {
  let component: BailesComponent;
  let fixture: ComponentFixture<BailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BailesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
