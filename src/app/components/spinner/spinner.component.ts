import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  // VARIABLES PARA EL SPINNER
  diameter: number = 100;
  strokeWidth : number = 10;
  bProgressSpinner: boolean = true;
  color: string = "success";
  //-------------------------------

  constructor() { }

  ngOnInit(): void {
  }

}
