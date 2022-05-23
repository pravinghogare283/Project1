import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahindraComponent } from './mahindra.component';

describe('MahindraComponent', () => {
  let component: MahindraComponent;
  let fixture: ComponentFixture<MahindraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahindraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahindraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
