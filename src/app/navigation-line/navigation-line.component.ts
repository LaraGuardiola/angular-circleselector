import { Component, OnInit, Input } from '@angular/core';
import { faCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navigation-line',
  templateUrl: './navigation-line.component.html',
  styleUrls: ['./navigation-line.component.css']
})
export class NavigationLineComponent implements OnInit {

  @Input() elemList : (string | number)[]
  @Input() symbol : IconDefinition
  constructor() {
    this.elemList = ['Datos personales', 'Situación actual', 'Stituación económica', 'Oferta', 'Identificación', 'Firma y documentación']
    this.symbol = faCheck
   }

  ngOnInit(): void {
  }

}
