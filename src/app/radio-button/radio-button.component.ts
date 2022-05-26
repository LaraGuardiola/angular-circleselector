import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() symbol: IconDefinition | any
  @Input() list: string[]

  constructor() {
    this.symbol = faCheck
    this.list = [
      "Envio de tus fondos antes",
      "Formulario corto",
      "Menos documentación"
    ]
   }

  ngOnInit(): void {
  }

}
