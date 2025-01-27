import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarDetailsPageComponent } from './guitar-details-page.component';

describe('GuitarDetailsPageComponent', () => {
  let component: GuitarDetailsPageComponent;
  let fixture: ComponentFixture<GuitarDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
