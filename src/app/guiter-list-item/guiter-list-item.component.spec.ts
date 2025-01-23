import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiterListItemComponent } from './guiter-list-item.component';

describe('GuiterListItemComponent', () => {
  let component: GuiterListItemComponent;
  let fixture: ComponentFixture<GuiterListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiterListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiterListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
