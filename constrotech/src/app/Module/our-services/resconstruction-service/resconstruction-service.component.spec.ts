import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResconstructionServiceComponent } from './resconstruction-service.component';

describe('ResconstructionServiceComponent', () => {
  let component: ResconstructionServiceComponent;
  let fixture: ComponentFixture<ResconstructionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResconstructionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResconstructionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
