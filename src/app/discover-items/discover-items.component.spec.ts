import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverItemsComponent } from './discover-items.component';

describe('DiscoverItemsComponent', () => {
  let component: DiscoverItemsComponent;
  let fixture: ComponentFixture<DiscoverItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
