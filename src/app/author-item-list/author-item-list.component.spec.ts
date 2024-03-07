import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorItemListComponent } from './author-item-list.component';

describe('AuthorItemListComponent', () => {
  let component: AuthorItemListComponent;
  let fixture: ComponentFixture<AuthorItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthorItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
