import { Component, OnInit, Input, ViewChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tile-selector',
  templateUrl: './tile-selector.component.html',
  styleUrls: ['./tile-selector.component.css']
})
export class TileSelectorComponent implements OnInit {

  @Input() btns: string[]

  constructor() { 
    this.btns = ['Señor', 'Señora']
  }

  @ViewChildren('buttons') buttons: ElementRef | any

  ngOnInit(): void {
  }

  onClick(event: Event): void {
    let btn = (event.target as HTMLButtonElement)
    let index = this.btns.indexOf(btn.innerText)
    this.setClickEffect(index)
  }

  setClickEffect(index: number): void {
    console.log('do something')
    this.buttons._results.forEach((btn: ElementRef) => {
      btn.nativeElement.style.setProperty('background-color', '#ecf0f8')
      btn.nativeElement.style.setProperty('color', 'black')
      if(this.buttons._results.indexOf(btn) === index) {
        btn.nativeElement.style.setProperty('background-color', '#18afb6')
        btn.nativeElement.style.setProperty('color', 'white')
      }else return
    })
  }
}
