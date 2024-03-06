import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsItemsComponent } from './collections-items.component';

describe('CollectionsItemsComponent', () => {
  let component: CollectionsItemsComponent;
  let fixture: ComponentFixture<CollectionsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
