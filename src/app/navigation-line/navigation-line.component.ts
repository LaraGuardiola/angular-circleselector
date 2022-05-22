import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-line',
  templateUrl: './navigation-line.component.html',
  styleUrls: ['./navigation-line.component.css']
})
export class NavigationLineComponent implements OnInit {

  @Input() elemList : (string | number)[]

  constructor() {
    this.elemList = ['Datos personales', 'Situación actual', 'Stituación económica', 'Oferta', 'Identificación', 'Firma y documentación']
   }

  ngOnInit(): void {
  }

}
