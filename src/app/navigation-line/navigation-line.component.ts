import { Component, OnInit, Input } from '@angular/core';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation-line',
  templateUrl: './navigation-line.component.html',
  styleUrls: ['./navigation-line.component.css']
})
export class NavigationLineComponent implements OnInit {

  //list of element to display
  @Input() elemList : (string | number)[]

  //icon to place inside the navigation line
  @Input() symbol : IconDefinition

  //size of the circles of the navigation line
  @Input() circleWidth: number;
  @Input() circleHeight: number;

  //size of the lines between circles
  @Input() lineWidth: number;
  @Input() lineHeight: number

  @Input() lineStyle = {
    circle: {},
    line: {}
  }
  @Input() listStyle = {}

  constructor() {
    this.elemList = ['Datos personales', 'Situación actual', 'Stituación económica', 'Oferta', 'Identificación', 'Firma y documentación']
    this.symbol = faCheck
    this.circleWidth = 20
    this.circleHeight = 20
    this.lineWidth = 4
    this.lineHeight = 30
    this.listStyle = {
      fontFamily: 'Arial',
    },
    this.lineStyle = {
      circle: {
        width: `${this.circleWidth}px`,
        height: `${this.circleHeight}px`,
        fontSize: `${this.circleHeight * 0.6}px`,
      },
      line: {
        width: `${this.lineWidth}px`,
        height: `${this.lineHeight}px`,
        left: `${ (this.circleWidth / 2) - (this.lineWidth / 2) }px`,
      }
    }
   }

  ngOnInit(): void {
  }

}
