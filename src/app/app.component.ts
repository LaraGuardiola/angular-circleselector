import { Component } from '@angular/core';
import { generalStyle } from './circle-selector/general-style-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  constructor(){
    this.titleStyle = {
      fontFamily: 'Garamond',
      fontSize: '3em',
      color: 'orange'
    },
    this.circleStyle = {
      backgroundColor: '#323232',
      color: '#FFFFFF ',
      fontFamily: 'garamond', 
      width: '100px',
      height: `100px`,
      fontSize: '48px',
      margin: '0.5em'
    },
    this.titleStyle1 = {
      fontFamily: 'Comic Sans MS',
      fontSize: '2em',
      color: 'red',
      fontWeight: 'bold'
    },
    this.circleStyle1 = {
      fontFamily: 'Comic Sans MS', 
      width: '80px',
      height: `80px`,
      fontSize: '60px',
      margin: '1em',
      border: '1px solid red',
      fontWeight: 'bold'
    }
  }
}
