import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  @Input() list: string[]

  constructor() {
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
