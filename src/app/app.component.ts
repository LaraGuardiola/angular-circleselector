import { Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { generalStyle } from './circle-selector/general-style-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //*circle selector properties
  title = 'Número de personas';
  titleStyle: generalStyle = {}
  circleStyle: generalStyle = {}
  titleStyle1: generalStyle = {}
  circleStyle1: generalStyle = {}
  highlightedBackground = '#FFD300'
  highlightedColor = '#FFFFFF'
  defaultBackground = '#323232'
  defaultColor = '#FFFFFF'
  highlightedBackground1 = '#FFFFFF'
  highlightedColor1 = 'red'
  defaultBackground1 = '#FFFFFF'
  defaultColor1 = '#000000'

  //* navigation line properties  
  circleStyle2 = {}
  lineStyle2 = {}
  listStyle2 = {}
  elemList: string[];
  symbol: any;
  size: number;
  lineWidth: number;
  lineHeight: number;
  defaultValue: number;
  defaultBGcolor: string
  highlightedBGColor: string
  defaultListColor: string
  completeColor: string


  constructor(){
    this.titleStyle = {
      fontFamily: 'Garamond',
      fontSize: '3em',
      color: 'orange'
    }
    this.circleStyle = {
      backgroundColor: '#323232',
      color: '#FFFFFF ',
      fontFamily: 'garamond', 
      width: '100px',
      height: `100px`,
      fontSize: '48px',
      margin: '0.5em'
    }
    this.titleStyle1 = {
      fontFamily: 'Comic Sans MS',
      fontSize: '2em',
      color: 'red',
      fontWeight: 'bold'
    }
    this.circleStyle1 = {
      fontFamily: 'Comic Sans MS', 
      width: '80px',
      height: `80px`,
      fontSize: '60px',
      margin: '1em',
      border: '1px solid red',
      fontWeight: 'bold'
    }
    //* navigation line properties
    this.elemList = ['Datos personales', 'Situación actual', 'Situación económica', 'Oferta', 'Identificación', 'Firma y documentación']
    this.symbol = faHeartCircleCheck
    this.size = 80
    this.lineWidth = 10
    this.lineHeight = 70
    this.defaultValue = 3
    this.defaultBGcolor = '#d2d2d2'
    this.highlightedBGColor = 'orange'
    this.defaultListColor = '#d2d2d2'
    this.completeColor = '#fede56'
    this.listStyle2 = {
      fontFamily: 'Arial',
      marginTop: `${this.size / 6}px`,
      marginBottom: `${this.lineHeight + (this.size * 0.3)}px`,
      fontSize: `${this.size * 0.6}px`,
      color: this.defaultListColor,
    }
    this.circleStyle2 = {
      width: `${this.size}px`,
      height: `${this.size}px`,
      fontSize: `${this.size * 0.6}px`,
      backgroundColor: this.defaultBGcolor,
    }
    this.lineStyle2 = {
      width: `${this.lineWidth}px`,
      height: `${this.lineHeight}px`,
      left: `${(this.size / 2) - (this.lineWidth / 2)}px`,
      backgroundColor: this.defaultBGcolor,
    }
  }
  
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef | any;
  async loadComponent($event: Event, component: string) {

    const { CircleSelectorComponent } = await import('./circle-selector/circle-selector.component')
    const { NavigationLineComponent } = await import('./navigation-line/navigation-line.component')
    const { TextBoxComponent } = await import('./text-box/text-box.component')
    const { ListBoxComponent } = await import('./list-box/list-box.component')
    const { IconButtonComponent } = await import('./icon-button/icon-button.component')
    const { ButtonatorComponent } = await import('./buttonator/buttonator.component')

    let elem = ($event.target as HTMLElement);
    if(this.anchor.length === 0){
      if(component === 'circleselector'){
        this.anchor.createComponent(CircleSelectorComponent)
      }
      if(component === 'navigationline'){
        this.anchor.createComponent(NavigationLineComponent)
      }
      if(component === 'textbox'){
        this.anchor.createComponent(TextBoxComponent)
      }
      if(component === 'listbox'){
        this.anchor.createComponent(ListBoxComponent)
      }
      if(component === 'iconbutton'){
        this.anchor.createComponent(IconButtonComponent)
      }
      if(component === 'buttonator'){
        this.anchor.createComponent(ButtonatorComponent)
      }
    }else{
      if(component === 'circleselector'){
        this.anchor.clear()
        this.anchor.createComponent(CircleSelectorComponent)
      }
      if(component === 'navigationline'){
        this.anchor.clear()
        this.anchor.createComponent(NavigationLineComponent)
      }
      if(component === 'textbox'){
        this.anchor.clear()
        this.anchor.createComponent(TextBoxComponent)
      }
      if(component === 'listbox'){
        this.anchor.clear()
        this.anchor.createComponent(ListBoxComponent)
      }
      if(component === 'iconbutton'){
        this.anchor.clear()
        this.anchor.createComponent(IconButtonComponent)
      }
      if(component === 'buttonator'){
        this.anchor.clear()
        this.anchor.createComponent(ButtonatorComponent)
      }
    }
    this.setClickedEffect(elem)
  }

  setClickedEffect(elem: HTMLElement) {
    if(elem.nodeName === 'A'){
      elem = elem.parentNode as HTMLElement
    }
    let ulElem = elem.parentNode
    let ul = Array.from(ulElem!.childNodes)
    for(let li of ul){
      (li as HTMLElement).style.setProperty('background-color', '#ffffff');
      (li as HTMLElement).style.setProperty('color', '#000000')
    }
    elem.style.setProperty('background-color','#00D1B2')
    elem.style.setProperty('color','#ffffff')
  }
}
