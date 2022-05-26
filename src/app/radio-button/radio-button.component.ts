import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faCheck, faSkull, faHelicopter, faVolcano, faVirusCovid, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Input() symbol: any[]
  @Input() symbol1: any[]

  @Input() mainText: string[]

  @Input() isRecommendedGroup: boolean[]
  @Input() displayLists: boolean[]
  @Input() radioValues: boolean[]
  @Input() recommendedText: string

  @Input() list: string[]
  @Input() list1: string[]

  @Input() itemList: any[]

  constructor() {
    this.recommendedText = "Recomendado"

    this.isRecommendedGroup = [true, false]
    this.displayLists = [true, false]
    this.radioValues = [true, false]

    this.symbol = [faTrophy, faSkull, faVirusCovid]
    this.symbol1 = [faVolcano, faSkull]

    this.mainText = [
      'Sí, cumplo con los requisitos y quiero una respuesta inmediata',
      'No, no quiero beneficiarme de las ventajas de BankReady'
    ]

    this.list = [
        "Envio de tus fondos antes",
        "Formulario corto",
        "Menos documentación"
    ],
    this.list1 = [
        "Puede que salga",
        "Puede que no",
    ]

    this.itemList = [ 
      {
        mainText: this.mainText,
        isRecommended: this.isRecommendedGroup,
        displayLists: this.displayLists,
        list: this.list,
        symbol: this.symbol,
        radioValues: this.radioValues
      },
      {
        mainText: this.mainText,
        isRecommended: this.isRecommendedGroup,
        displayLists: this.displayLists,
        list: this.list1,
        symbol: this.symbol1,
        radioValues: this.radioValues
      }
    ]
   }

  ngOnInit(): void {
    if(typeof this.radioValues[1] === 'boolean'){
      console.log('es booleano')
    }else{
      console.log('no es booleano')
    }
  }

  onCheck(event: Event): void {
    let target = (event.target as HTMLInputElement)
    console.log(target.value)
  }
}
