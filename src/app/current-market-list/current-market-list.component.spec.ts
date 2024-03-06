import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMarketListComponent } from './current-market-list.component';

describe('CurrentMarketListComponent', () => {
  let component: CurrentMarketListComponent;
  let fixture: ComponentFixture<CurrentMarketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentMarketListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentMarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
