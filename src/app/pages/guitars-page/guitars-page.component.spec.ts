import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarsPageComponent } from './guitars-page.component';

describe('GuitarsPageComponent', () => {
  let component: GuitarsPageComponent;
  let fixture: ComponentFixture<GuitarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
