import { Component, OnInit, Input } from '@angular/core';
import { faCommentDollar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  @Input() icon: IconDefinition

  constructor() { 
    this.icon = faCommentDollar
  }

  ngOnInit(): void {
  }

}
