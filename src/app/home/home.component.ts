import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private test: TestService) {  }

  ngOnInit(): void { }

  toCard(name: string, link: string, tag: string, img: string, preview: string, ...p: string[]){
    return {name, link, tag, img, preview, p}
  }

  toHsCard(name: string, link: string, tag: string, preview: string, ...p: string[]){
    return {name, link, tag, preview, p}
  }

  runTest(){
    let returnObj: {msg:string};
    this.test.runTest().subscribe(res => {
      // returnObj = res;
      console.log(res)
    })
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
      'Created with i0, NodeJS, and Firebase.'
    ),
    this.toCard(
      'Essencials',
      'https://www.essencials.page/',
      'Daily Health & Wellness',
      'https://www.essencials.page/assets/logo.PNG',
      './assets/essencials-pv.PNG',
      'Daily tarot card reading and wellness exercises. Daily exercises are one of each category: affirmation, chakra, meditation, yoga.',
      'Track your own affirmations, goals, budgets, and your schedule.',
      'Created with i0 and NodeJS.'
    ),
    this.toCard(
      'Gamepro Studio',
      'https://www.gamepro.studio/',
      'Javascript Game Engine',
      'https://www.gamepro.studio/assets/logo.png',
      './assets/gamepro-pv.PNG',
      'Create games with javascript that export as a bundle of assets, html, js, and css files.',
      'Styled for IPad browser "Inspect" which allows for inspecting and other javascript developer tools.',
      'Created with JavaScript and NodeJS.'
    ),
    this.toCard(
      'i0 Framework',
      'https://www.i0framework.com',
      'Javascript Framework',
      'https://i04--blbbrayan.repl.co/www/assets/logo-ico.png',
      './assets/i0-pv.png',
      'Use i0 to quickly create websites. i0 handles frontend and backend and also has Firebase database integration.',
      'Created with JavaScript and NodeJS.'
    )
  ]

  hsCards = [
    this.toHsCard(
      'Unsung Forest',
      '',//link
      'Arcade Game',
      '',//img
      'Dodge enemies and fire arrows to vanquish foes. Defeat the Dragon boss!',
      'Created in Java via Byrd Engine.',
    ),
    this.toHsCard(
      'Battle Monsters',
      '',//link
      'Turn Based Strategy Game',
      '',//img
      'Select and earn monsters to battle.',
      'Created in Java via Byrd Engine.',
    ),
    this.toHsCard(
      'Byrd Notes',
      '',//link
      'Study Tool',
      '',//img
      'Create notes and flashcards. Test your knowledge with flashcard quiz mode.',
      'Created in Java via Byrd Engine.',
    ),
    this.toHsCard(
      'Pixel World',
      '',//link
      'Mine and Place Game',
      '',//img
      'Mine the blocky world around you and place blocks.',
      'Created in Java via Byrd Engine.',
    ),
    this.toHsCard(
      'Byrd Engine',
      '',//link
      'Java Full-Stack Framework',
      '',//img
      'Featured game engine UI via swing elements and input management, storing and loading data, and a server.',
      'Created in Java.',
    ),
    this.toHsCard(
      'Eye of Power',
      '',//link
      'Role Playing Game',
      '',//img
      'Play as several classes and races. Complete quests. Level up. Unlock pets and mounts.',
      'Created in MIT Scratch.',
    )
  ]

  ngOnDestory(){
    
  }

}
