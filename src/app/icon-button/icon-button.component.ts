import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faSliders, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  //style of the symbol
  @Input() symbol: IconDefinition
  @Input() symbolSize: string

  //style of the text
  @Input() buttonText: string

  //style of the fake button
  @Input() hasBorder: boolean
  @Input() borderSize: string
  @Input() borderColor: string


  constructor() { 
    this.symbol = faSliders
    this.symbolSize = '24px'
    this.buttonText = 'VER DETALLES'
    this.borderColor = 'red'
    this.borderSize = '2px'
    this.hasBorder = true
  }

  @ViewChild('icon') icon: ElementRef | any
  @ViewChild('button') button: ElementRef | any

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState(): void {
    this.setSymbolDefaultState()
    this.setButtonDefaultState()
  }

  setSymbolDefaultState(): void {
    this.icon.nativeElement.style.setProperty('font-size', this.symbolSize)
  }

  setButtonDefaultState(): void {
    this.button.nativeElement.style.setProperty('border', this.hasBorder ? `${this.borderSize} solid ${this.borderColor}` : 'none')
  }

  //*Events

  onClick(event: Event): void {
    let button = (event.target as HTMLElement)
    console.log(button)
  }

}
