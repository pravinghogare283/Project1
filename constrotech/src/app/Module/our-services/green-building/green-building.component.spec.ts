import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBuildingComponent } from './green-building.component';

describe('GreenBuildingComponent', () => {
  let component: GreenBuildingComponent;
  let fixture: ComponentFixture<GreenBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreenBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
