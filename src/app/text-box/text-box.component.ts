import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faCircleExclamation, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  //Style of the input 
  @Input() inputType: string
  @Input() height: number
  @Input() width: number
  @Input() fontSize: number;
  @Input() backgroundColor: string

  //style of the placeholder
  @Input() placeholder: string
  @Input() placeholderFontSize: number
  @Input() animation: string
  @Input() symbol: IconDefinition
  @Input() left: string
  @Input() top: string
  @Input() focusTop: string
  @Input() focusFontSize: number 
  @Input() fontWeight: number
  @Input() inputStyle = {}

  constructor() {
    this.inputType = 'text';
    this.height = 80
    this.width = 200
    this.fontSize = 18
    this.backgroundColor = '#e8ebf2'
    this.placeholder = 'Número de documento'
    this.placeholderFontSize = 18
    this.animation = '0.2s ease all'
    this.symbol = faCircleExclamation
    this.left = '20px'
    this.top = `${ (this.height / 2) - (this.placeholderFontSize / 2) }px`
    this.focusTop = `${ ( (this.height / 2) - (this.placeholderFontSize / 2) ) / 3 }px`
    this.focusFontSize = 12
    this.fontWeight = 600
    this.inputStyle = {
      height: `${this.height}px`,
      width: `${this.width}px`,
      fontSize: '16px',
    }
   }

   @ViewChild('input') input: ElementRef | any
   @ViewChild('placeHODL') placeHODL: ElementRef | any

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState(): void {
    this.setInputDefaultState()
    this.setPlaceholderAnimation(this.animation)
    this.setPlaceholderStyle()
  }

  setInputDefaultState(): void {
    this.setBackgroundColor(this.backgroundColor)
    this.setBorder()
  }

  setBackgroundColor(color: string): void {
    this.input.nativeElement.style.backgroundColor = color;
  }

  setBorder(): void {
    this.input.nativeElement.style.borderBottom = '2px solid #88878b'
  }

  setPlaceholderAnimation(animation: string): void {
    this.placeHODL.nativeElement.style.setProperty('transition', animation);
  }

  setPlaceholderStyle(): void {
    this.placeHODL.nativeElement.style.setProperty('font-size', `${this.placeholderFontSize}px`);
    this.placeHODL.nativeElement.style.setProperty('left', this.left);
    this.placeHODL.nativeElement.style.setProperty('top', this.top);
  }

  //* Events

  onFocus(): void {
    console.log('hola')
    this.placeHODL.nativeElement.style.setProperty('top', this.focusTop);
    this.placeHODL.nativeElement.style.setProperty('font-size', `${this.focusFontSize}px`);
    this.placeHODL.nativeElement.style.setProperty('transition', this.animation);
  }

  onFocusOut(): void {
    console.log('adios')
    if(this.input.nativeElement.value.length > 0){
      this.placeHODL.nativeElement.style.setProperty('top', this.focusTop);
      this.placeHODL.nativeElement.style.setProperty('font-size', `${this.focusFontSize}px`);
      this.placeHODL.nativeElement.style.setProperty('font-weight', `${this.fontWeight}`);
    }else{
      this.placeHODL.nativeElement.style.setProperty('font-size', `${this.placeholderFontSize}px`);
      this.placeHODL.nativeElement.style.setProperty('top', this.top);
    }
  }

}
