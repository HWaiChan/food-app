import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-export-meal-plan',
  templateUrl: './export-meal-plan.component.html',
  styleUrls: ['./export-meal-plan.component.css'],
})
export class ExportMealPlanComponent implements OnInit {
  displayString: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { list: string }) {
    this.displayString = data?.list;
  }

  ngOnInit(): void {}
}
