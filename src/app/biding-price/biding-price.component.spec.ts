import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidingPriceComponent } from './biding-price.component';

describe('BidingPriceComponent', () => {
  let component: BidingPriceComponent;
  let fixture: ComponentFixture<BidingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidingPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BidingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
