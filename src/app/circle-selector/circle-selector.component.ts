import { Component, OnInit, Input, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import { generalStyle } from './general-style-interface';

@Component({
  selector: 'app-circle-selector',
  templateUrl: './circle-selector.component.html',
  styleUrls: ['./circle-selector.component.css']
})
export class CircleSelectorComponent implements OnInit, AfterViewInit  {

  //Changes the title of the circle selector
  @Input() title: string;
  //Modifies the list of items you want to display
  @Input() numberList: (string | number)[] = []
  //Sets up default clicked value
  @Input() defaultValue: number | string
  //Sets up the style of the circle selector component (title and circles)
  @Input() titleStyle: generalStyle = {}
  @Input() circleStyle: generalStyle = {}

  constructor() {
    this.title = 'defaultTitle'
    this.numberList = [1, 2, 3, 4, '5+']
    this.defaultValue = 2
    this.titleStyle = {
      fontFamily: 'Arial',
      fontSize: '1.25em',
      color: 'black'
    },
    this.circleStyle = {
      backgroundColor: '#f0f1f8',
      color: '#94979b',
      fontFamily: 'Arial',
      width: '60px',
      height: `60px`,
      fontSize: '30px',
      margin: '0.20em'
    }
  }

  @ViewChildren('circle') circle!: ElementRef | any;

  ngOnInit(): void {} 

  ngAfterViewInit(): void {
    let circleHighlighted = this.circle._results[this.numberList.indexOf(this.defaultValue)]
    circleHighlighted.nativeElement.style.setProperty('background-color','#18acb5')
    circleHighlighted.nativeElement.style.setProperty('color','#FFFFFF')
  }

  onClick($event: Event): void{
    let elem = ($event.target as HTMLElement)
    let index = this.numberList.map( num => num.toString()).indexOf(elem.innerText)
    this.circle._results.forEach((elem: ElementRef, i: number) => {
      if(index === i){
        this.setClicked(elem)
        return
      }
      this.setUnclicked(elem)
    })
  }

  setUnclicked(elem: ElementRef): void {
    elem.nativeElement.style.setProperty('background-color','#f0f1f8')
    elem.nativeElement.style.setProperty('color','#94979b')
  }

  setClicked(elem: ElementRef): void {
    
    elem.nativeElement.style.setProperty('background-color','#18acb5')
    elem.nativeElement.style.setProperty('color','#FFFFFF')
  }

}
