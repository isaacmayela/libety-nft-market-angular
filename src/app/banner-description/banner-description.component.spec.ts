import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDescriptionComponent } from './banner-description.component';

describe('BannerDescriptionComponent', () => {
  let component: BannerDescriptionComponent;
  let fixture: ComponentFixture<BannerDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
