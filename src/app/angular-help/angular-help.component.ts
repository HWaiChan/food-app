import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-help',
  templateUrl: './angular-help.component.html',
  styleUrls: ['./angular-help.component.css']
})
export class AngularHelpComponent implements OnInit {
  title = 'food-app';
  constructor() { }

  ngOnInit(): void {
  }

}
