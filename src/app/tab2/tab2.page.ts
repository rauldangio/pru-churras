import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  time1_score = 0;
  time2_score = 0;
  time1_wins = 0;
  time2_wins = 0;

  constructor() { }

  change_contador(contador: number) {
    this.valendo = contador
  }

  increase_team1_score() {
    this.time1_score += this.valendo
    this.valendo = 1
    if (this.time1_score >= 12) {
      this.time1_wins += 1
      this.time1_score = 0
    }
  }

  decrease_team1_score() {
    if (this.time1_score <= 0) {
      // do nothing
    } else {
      this.time1_score -= this.valendo
      this.valendo = 1
    }
  }

  increase_team2_score() {
    this.time2_score += this.valendo
    this.valendo = 1
    if (this.time2_score >= 12) {
      this.time2_wins += 1
      this.time2_score = 0
    }
  }

  decrease_team2_score() {
    if (this.time2_score <= 0) {
      // do nothing
    } else {
      this.time2_score -= this.valendo
      this.valendo = 1
    }
  }

  clean() {
    this.valendo = 1;
    this.time1_score = 0;
    this.time2_score = 0;
    this.time1_wins = 0;
    this.time2_wins = 0;
  }
}
