import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pina-loun',
  templateUrl: './pina-loun.component.html',
  styleUrls: ['./pina-loun.component.css']
})
export class PinaLounComponent implements OnInit {

  constructor() { }

    texte;
    questionActuelle;
    chanceRestante;
    isWin: boolean;
    answers1: string[];
    answers2: string[];
    answers3: string[];
    answers4: string[];
    answers;
    gameOn;

    question1 = 'Qui a été le second homme à marcher sur la Lune ?';
    answers1 = ['Neil Armstrong', 'Alan Bean', 'David Scott', 'Buzz Aldrin'];
    question2 = 'Quel est l\'acronyme de la station spatiale internationale ?';
    answers2 = ['ASS', 'SIS', 'ISS', 'SSS'];
    question3 = 'Lequel de ces noms n\'est pas un nom de sonde spatiale ?';
    answers3 = ['Alfred 3', 'Comsos 419', 'Phobos 2', 'Mars 96'];
    question4 = 'Quelle est la planète la plus proche de notre système solaire ?';
    answers4 = ['Mercure', 'Vénus', 'Jupiter', 'Neptune'];
  answer: string;

  ngOnInit() {
    this.questionActuelle = 1;
    this.answers = this.answers1;
    this.chanceRestante = 3;
    this.isWin = false;
    this.texte = 'Répond correctement aux questions ! Il te reste ' + this.chanceRestante + ' chance(s) !';
    this.gameOn = false;
    setTimeout(() => {this.gameOn = true;}, 23000);
  }

  getQuestion() {
    if (this.questionActuelle === 1 ) { return this.question1; }
    if (this.questionActuelle === 2 ) { return this.question2; }
    if (this.questionActuelle === 3 ) { return this.question3; }
    if (this.questionActuelle === 4 ) { return this.question4; }
  }

  submitAnswer(answer: string) {
    if (this.questionActuelle === 1) {
      if (answer === 'Buzz Aldrin' ) {
        this.questionActuelle = 2;
          this.answers = this.answers2;
          return;
      } else {
        this.chanceRestante--;
          this.texte = 'C\'est faux ! Il te reste ' + this.chanceRestante + ' chance(s) !';
          if (this.chanceRestante <= 0) {
              this.perdu();
          }
      }
    }

      if (this.questionActuelle === 2) {
          if (answer === 'ISS') {
              this.questionActuelle = 3;
              this.answers = this.answers3;
              return;
          } else {
              this.chanceRestante--;
              this.texte = 'C\'est faux ! Il te reste ' + this.chanceRestante + ' chance(s) !';
              if (this.chanceRestante <= 0) {
                  this.perdu();
              }
          }
      }

      if (this.questionActuelle === 3) {
          if (answer === 'Alfred 3' ) {
              this.questionActuelle = 4;
              this.answers = this.answers4;
              return;
          } else {
              this.chanceRestante--;
              this.texte = 'C\'est faux ! Il te reste ' + this.chanceRestante + ' chance(s) !';
              if (this.chanceRestante <= 0) {
                  this.perdu();
              }
          }
      }

      if (this.questionActuelle === 4) {
          if (answer === 'Mercure' ) {
              pinaStatusGame = true;
              this.win();
          } else {
              this.chanceRestante--;
              this.texte = 'C\'est faux ! Il te reste ' + this.chanceRestante + ' chance(s) !';
              if (this.chanceRestante <= 0) {
                this.perdu();
              }
          }
      }
  }

  win() {
      this.texte = 'Bravo, c\'est terminé ! Nous en avons terminé ici ! ';
      this.isWin = true;
  }

  perdu() {
      this.texte = 'Plus de chances, il faut recommencer .. ';
      this.questionActuelle = 1;
  }
}

export let pinaStatusGame: boolean;
