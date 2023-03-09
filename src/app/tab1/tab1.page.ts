import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({transform: 'rotateZ(0)'})),
      state('rotated', style({transform: 'rotateZ(360deg)'})),
      transition('rotated => default', animate('500ms ease-out')),
      transition('default => rotated', animate('500ms ease-in')),
    ])
  ]
})
export class Tab1Page {
  logo = 'assets/logo.png'
  cara_coroa = ['assets/cara.png', 'assets/coroa.png']
  image = this.logo;
  resultado = 'Clique no botao para jogar'
  state = 'default'

  constructor() {}

  jogarMoeda(){
    this.resultado = 'Girando...'
    this.image = this.logo
    this.state = this.state === 'default' ? 'rotated': 'default';


    setTimeout(() => {
      if(Math.random() < 0.5){
        this.image = this.cara_coroa[0]
        this.resultado = 'Cara!'
      }else{
        this.image = this.cara_coroa[1]
        this.resultado = 'Coroa!'
      }
    },500)


  }
}
