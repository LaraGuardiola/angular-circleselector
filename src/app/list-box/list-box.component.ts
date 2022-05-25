import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

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
    this.selectWidth = 500
    this.selectHeight = 500
    this.list = [
      'Autónomo',
      'Asalariado',
      'Funcionario',
      'Pensionista'
    ]
  }

  @ViewChild('select') select: ElementRef | any

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setSelectDefaultState()
  }

  //setting up select style
  setSelectDefaultState(){
    this.select.nativeElement.style.setProperty('width', this.selectWidth + 'px')
    this.select.nativeElement.style.setProperty('height', this.selectHeight + 'px')
  }

}
