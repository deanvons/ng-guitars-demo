import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarDetailsComponent } from './guitar-details.component';

describe('GuitarDetailsComponent', () => {
  let component: GuitarDetailsComponent;
  let fixture: ComponentFixture<GuitarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
