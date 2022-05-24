import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  //type of the input
  @Input() inputType: string
  @Input() height: number
  @Input() width: number
  @Input() placeholder: string
  @Input() backgroundColor: string
  @Input() inputStyle = {}

  constructor() {
    this.inputType = 'text';
    this.height = 30
    this.width = 200
    this.placeholder = 'Número'
    this.backgroundColor = '#e8ebf2'
    this.inputStyle = {
      height: `${this.height}px`,
      width: `${this.width}px`,
    }
   }

   @ViewChild('input') input: ElementRef | any

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setBackgroundColor(this.backgroundColor)
    this.setBorder()
  }

  setBackgroundColor(color: string): void {
    this.input.nativeElement.style.backgroundColor = color;
  }

  setBorder(): void {
    this.input.nativeElement.style.borderBottom = '2px solid #88878b'
  }

  onFocus(): void {

  }

}
