import { Component, ElementRef, Input, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //* menu list items
  @Input() menuList: string[]

  constructor(){ 
    this.menuList = [
      'circleselector',
      'navigationline',
      'textbox',
      'listbox',
      'iconbutton',
      'buttonator',
      'radiobutton',
      'infobox',
      'tileselector'
    ]
  }
  
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef | any;
  @ViewChildren('menuitems') menuitems: ElementRef | any

  async loadComponent($event: Event, component: string) {

    let elem = ($event.target as HTMLElement);

    // Components will be lazy loaded - deconstructing the component in order to get the class
    const { CircleSelectorComponent } = await import('./circle-selector/circle-selector.component')
    const { NavigationLineComponent } = await import('./navigation-line/navigation-line.component')
    const { TextBoxComponent } = await import('./text-box/text-box.component')
    const { ListBoxComponent } = await import('./list-box/list-box.component')
    const { IconButtonComponent } = await import('./icon-button/icon-button.component')
    const { ButtonatorComponent } = await import('./buttonator/buttonator.component')
    const { RadioButtonComponent } = await import('./radio-button/radio-button.component')
    const { InfoBoxComponent } = await import('./info-box/info-box.component')
    const { TileSelectorComponent } = await import('./tile-selector/tile-selector.component')

    //array of components
    const comps = await Promise.all([ 
      CircleSelectorComponent,
      NavigationLineComponent,
      TextBoxComponent,
      ListBoxComponent,
      IconButtonComponent,
      ButtonatorComponent,
      RadioButtonComponent,
      InfoBoxComponent,
      TileSelectorComponent
    ])

    this.clearAndCreateComponent(comps, component)
    this.setClickedEffect(elem)
  }

  clearAndCreateComponent(comps: object[], component: string): void {
    if(this.anchor.length === 0){
      comps.forEach((comp,index) => {
        if(this.menuList[index] === component)
          this.anchor.createComponent(comp);
      })
    }else{
      comps.forEach((comp,index) => {
        if(this.menuList[index] === component){
          this.anchor.clear()
          this.anchor.createComponent(comp)
        }
      })
    }
  }

  setClickedEffect(elem: HTMLElement) {
    let i = this.menuList.indexOf(elem.innerText)
    this.menuitems.forEach((item: ElementRef, index: number) => {
      item.nativeElement.style.setProperty('background-color', '#ffffff');
      item.nativeElement.style.setProperty('color', '#000000')
      if(i === index){
        item.nativeElement.style.setProperty('background-color', '#18afb6');
        item.nativeElement.style.setProperty('color', '#ffffff')
      }
    })
  }
}


