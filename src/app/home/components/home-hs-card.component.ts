import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hs-card',
  template: `
    <div class="layer">
        <div class="margin padding">
            <b class="flex v-align">
                <a href="{{link}}" target="_blank" class="link bigtext">{{name}}</a>
            </b>
            <i class="flex right">{{tag}}</i>
        </div>
        <div class="flex center">
            <img class="pv" src="{{preview}}">
        </div>
        <div class="margin padding">
            <ng-content></ng-content>
        </div>
    </div>
  `,
  styleUrls: ['./home-card.component.css']
})
export class HomeHsCardComponent implements OnInit {

  @Input() name: string = '';
  @Input() link: string = '';
  @Input() tag: string = '';
  @Input() preview: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
