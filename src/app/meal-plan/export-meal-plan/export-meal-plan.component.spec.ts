import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMealPlanComponent } from './export-meal-plan.component';

describe('ExportMealPlanComponent', () => {
  let component: ExportMealPlanComponent;
  let fixture: ComponentFixture<ExportMealPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportMealPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMealPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
