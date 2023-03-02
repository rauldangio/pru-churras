import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  logo = 'assets/logo.png'
  cara_coroa = ['assets/cara.png', 'assets/coroa.png']
  image = this.logo;
  resultado = 'Clique no botao para jogar'

  constructor() {}

  jogarMoeda(){
    if(Math.random() < 0.5){
      this.image = this.cara_coroa[0]
      this.resultado = 'Cara!'
    }else{
      this.image = this.cara_coroa[1]
      this.resultado = 'Coroa!'
    }
  }
}
