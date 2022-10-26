import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Davi';
  age:number = 30;
  career: string = 'student'

  constructor() { }

  ngOnInit(): void {
  }

}
