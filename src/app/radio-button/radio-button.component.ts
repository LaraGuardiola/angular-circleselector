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

  @Input() list: string[]
  @Input() mainText: string[]

  @Input() isRecommended: boolean
  @Input() isRecommended1: boolean
  @Input() isRecommendedGroup: boolean[]
  @Input() displayLists: boolean[]
  @Input() recommendedText: string

  @Input() list1: string[]
  @Input() recommendedText1: string

  @Input() numOfRadioButtons: number
  @Input() itemList: any[]

  constructor() {
    this.symbol = [faTrophy, faSkull, faVirusCovid]
    this.symbol1 = [faVolcano, faSkull]

    this.mainText = [
      'Sí, cumplo con los requisitos y quiero una respuesta inmediata',
      'No, no quiero beneficiarme de las ventajas de BankReady'
    ]
    
    this.recommendedText = "Recomendado"
    this.isRecommended = true
    this.isRecommended1 = true
    this.isRecommendedGroup = [this.isRecommended, this.isRecommended1]
    this.displayLists = [true, true]

    this.recommendedText1 = "No Recomendado"


    this.numOfRadioButtons = 2

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
        symbol: this.symbol
      },
      {
        mainText: this.mainText,
        isRecommended: this.isRecommendedGroup,
        displayLists: this.displayLists,
        list: this.list1,
        symbol: this.symbol1
      }
    ]
   }

  @ViewChild('lista') lista: ElementRef | any

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    
  }



}
