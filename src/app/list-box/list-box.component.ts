import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  //style of the select
  @Input() list: string[]
  @Input() selectWidth: number;
  @Input() selectHeight: number;

  //style of the title
  @Input() title: string;

  constructor() {
    this.title = 'Situación laboral'
    this.selectWidth = 300
    this.selectHeight = 70
    this.list = [
      'Autónomo',
      'Asalariado',
      'Funcionario',
      'Pensionista'
    ]
   }

  ngOnInit(): void {
  }

}
