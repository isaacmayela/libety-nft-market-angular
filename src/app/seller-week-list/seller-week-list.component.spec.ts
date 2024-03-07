import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWeekListComponent } from './seller-week-list.component';

describe('SellerWeekListComponent', () => {
  let component: SellerWeekListComponent;
  let fixture: ComponentFixture<SellerWeekListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerWeekListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
