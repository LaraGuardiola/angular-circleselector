import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  //style of the select
  @Input() list: string[]
  @Input() selectWidth: number
  @Input() selectHeight: number
  @Input() selectBackgroundColor: string
  @Input() selectColor:  string
  @Input() fontFamily: string
  @Input() fontSize: number
  @Input() fontWeight: string
  @Input() borderBottom: string


  //style of the title
  @Input() title: string;

  constructor() {
    this.title = 'Situación laboral'
    this.selectWidth = 300
    this.selectHeight = 70
    this.selectBackgroundColor = '#e8ebf2'
    this.selectColor = '#88878b'
    this.fontFamily = 'Arial'
    this.fontSize = 16
    this.fontWeight = 'bold'
    this.borderBottom = '2px solid #88878b'
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
    this.select.nativeElement.style.setProperty('background-color', this.selectBackgroundColor)
    this.select.nativeElement.style.setProperty('color', this.selectColor)
    this.select.nativeElement.style.setProperty('font-family', this.fontFamily)
    this.select.nativeElement.style.setProperty('font-size', this.fontSize + 'px')
    this.select.nativeElement.style.setProperty('font-weight', this.fontWeight)
    this.select.nativeElement.style.setProperty('border-bottom', this.borderBottom)
  }

}
