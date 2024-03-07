import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWeekComponent } from './seller-week.component';

describe('SellerWeekComponent', () => {
  let component: SellerWeekComponent;
  let fixture: ComponentFixture<SellerWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerWeekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
