import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { generalStyle } from './general-style-interface';

@Component({
  selector: 'app-circle-selector',
  templateUrl: './circle-selector.component.html',
  styleUrls: ['./circle-selector.component.css']
})
export class CircleSelectorComponent implements OnInit {

  @Input() title: string;
  @Input() numberList: (string | number)[] = []
  @Input() defaultValue: number | string
  @Input() titleStyle: generalStyle = {}
  @Input() circleStyle: generalStyle = {}
  @Input() titleStyleActive: generalStyle = {}
  @Input() circleStyleActive: generalStyle = {}

  constructor() {
    this.title = 'defaultTitle'
    this.numberList = [1, 2, 3, 4, '5+']
    this.defaultValue = 2
    this.circleStyle = {
      fontFamily: 'Arial',
      width: '60px',
      height: `60px`,
      fontSize: '30px',
      color: '#FFFFFF',
      backgroundColor: '#18acb5',
      margin: '0.20em',
    },
    this.titleStyle = {
      fontFamily: 'Arial',
      fontSize: '1.25em',
      color: 'black'
    },
    this.titleStyleActive = {},
    this.circleStyleActive = {
      backgroundColor: '#f0f18f',
      color: '#94979b'
    }
  }

  ngOnInit(): void {
  } 

  @ViewChild('circle') circle!: ElementRef | any;

  onClick($event: Event): void {
    ($event.target as HTMLElement).classList.toggle('active')
    let circlesContainer = document.querySelectorAll('.circle-selector-circle')
    circlesContainer.forEach(circle => {
      circle.classList.contains('active')
    })

    //elem.target.classList.toggle('active')

    
   
  }

  setStyles(circle: HTMLElement){
    this.isActive(circle) 
    ? circle.style.backgroundColor = '#18acb5'
    : circle.style.backgroundColor = '#f0f1f8'
  }

  isActive(circle: any): boolean{
    return circle.nativeElement.classList.contains('active')
      ? true
      : false
  }

}
