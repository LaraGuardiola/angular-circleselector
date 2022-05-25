import { Component, OnInit, Input } from '@angular/core';
import { faSliders, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  //style of the symbol
  @Input() symbol: IconDefinition

  //style of the text
  @Input() buttonText: string

  constructor() { 
    this.symbol = faSliders
    this.buttonText = 'VER DETALLES'
  }

  ngOnInit(): void {
  }

  onClick(event: Event): void {
    let button = (event.target as HTMLElement)
    console.log(button)
  }

}
