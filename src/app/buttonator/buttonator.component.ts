import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-buttonator',
  templateUrl: './buttonator.component.html',
  styleUrls: ['./buttonator.component.css']
})
export class ButtonatorComponent implements OnInit {

  @Input() buttonText: string
  @Input() isDisabled: boolean
  @Input() backgroundColor: string;
  @Input() color: string;
  @Input() padding: string;
  @Input() borderRadius: string;
  @Input() fontFamily: string;
  @Input() fontWeight: string;
  @Input() fontSize: string;
  @Input() height: string;

  constructor() { 
    this.buttonText = 'VALIDAR'
    this.isDisabled = false
    this.backgroundColor = '#18acb5'
    this.color = '#ffffff'
    this.padding = '0.8em'
    this.borderRadius = '5px'
    this.fontFamily = 'Segoe UI'
    this.fontWeight = '600'
    this.fontSize = '1.5em'
    this.height = 'auto'
  }

  @ViewChild('btn') btn: ElementRef | any

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setDefaultState()
  }

  setDefaultState(): void {
    this.btn.nativeElement.style.setProperty('background-color', this.backgroundColor)
    this.btn.nativeElement.style.setProperty('color', this.color)
    this.btn.nativeElement.style.setProperty('padding', this.padding)
    this.btn.nativeElement.style.setProperty('border-radius', this.borderRadius)
    this.btn.nativeElement.style.setProperty('font-family', this.fontFamily)
    this.btn.nativeElement.style.setProperty('font-weight', this.fontWeight)
    this.btn.nativeElement.style.setProperty('font-size', this.fontSize)
    this.btn.nativeElement.style.setProperty('height', this.height)
  }

  onClick(event: Event): void {
    let btn = (event.target as HTMLElement)
    console.log(btn)
  }
}
