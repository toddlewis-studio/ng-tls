import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  template: `
    <div class="layer">
        <div class="margin padding">
            <b class="flex v-align">
                <img class="img" width="64px" height="64px" src="{{img}}">
                <a href="{{link}}" target="_blank" class="link bigtext">{{name}}</a>
            </b>
            <i class="flex right">{{tag}}</i>
        </div>
        <div class="flex center">
            <img class="pv" src="{{pv}}">
        </div>
        <div class="margin padding">
            <ng-content></ng-content>
        </div>
    </div>
  `,
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() img: string = '';
  @Input() name: string = '';
  @Input() link: string = '';
  @Input() tag: string = '';
  @Input() pv: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
