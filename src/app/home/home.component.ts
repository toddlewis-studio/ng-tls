import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toCard(name: string, link: string, tag: string, img: string, pv: string, ...p: string[]){
    return {name, link, tag, img, pv, p}
  }

  // Would be created in an "admin form" and loaded via API
  cards = [
    this.toCard(
      'Wisp Crypto',
      'https://wispcrypto.com',
      'Collectable Token Arena',
      'https://collection.wispcrypto.com/asset/logo_wisp.PNG',
      './assets/wisp-pv.PNG',
      'Collect Tokens and assemble wisps. Use a team of wisps to battle your friends and enemies.',
      '*Plans for NFT opensea integration.',
    ),
    this.toCard(
      'i0 Framework',
      'https://www.i0framework.com',
      'Javascript Framework',
      'https://i04--blbbrayan.repl.co/www/assets/logo-ico.png',
      './assets/i0-pv.png',
      'Use i0 to quickly create websites. i0 handles frontend and backend and also has Firebase database integration.'
    ),
    this.toCard(
      'Essencials',
      'https://www.essencials.page/',
      'Daily Health & Wellness',
      'https://www.essencials.page/assets/logo.PNG',
      './assets/essencials-pv.PNG',
      'Daily tarot card reading and wellness exercises. Daily exercises are one of each category: affirmation, chakra, meditation, yoga.',
      'Track your own affirmations, goals, budgets, and your schedule.'
    ),
    this.toCard(
      'Gamepro Studio',
      'https://www.gamepro.studio/',
      'Javascript Game Engine',
      'https://www.gamepro.studio/assets/logo.png',
      './assets/gamepro-pv.PNG',
      'Create games with javascript that export as a bundle of assets, html, js, and css files.',
      'Styled for IPad browser "Inspect" which allows for inspecting and other javascript developer tools.'
    )
  ]

}
