import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-proxima-gladius',
  templateUrl: './proxima-gladius.component.html',
  styleUrls: ['./proxima-gladius.component.css']
})

export class ProximaGladiusComponent implements OnInit {

  playerTurn: boolean;
  randomPattern: number[];
  playerInput: number[];
  numberToReproduce: number;
  numberOfWin: number;
  gameStarted: boolean;
  gameWonBool: boolean;
  gameText;

  constructor() { }

  ngOnInit() {
    // proximaStatus = false;
    this.gameWonBool = false;
    this.playerTurn = false;
    this.numberToReproduce = 4;
    this.randomPattern = [];
    this.playerInput = [];
    this.numberOfWin = 0;
    this.gameText = '';
    this.gameStarted = false;

    setTimeout(() => {this.gameText = 'Le jeu va commencer ... Regardez la séquence qui s\'affiche et ' +
          'reproduisez la dans l\'ordre en cliquant sur les couleurs associés ! 3 victoires sont nécessaires'; }, 18000);
    setTimeout(() => {this.gameStarted = true; this.generateRandomPattern(); this.gameTurn(); }, 23000);
  }

  gameTurn() {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= this.randomPattern.length) {
        this.gameText = '';
        switch (this.randomPattern[i]) {
              case 1:
                  this.gameText = 'Rouge';
                  break;
              case 2:
                  this.gameText = 'Vert';
                  break;
              case 3:
                  this.gameText = 'Bleu';
                  break;
              case 4:
                  this.gameText = 'Jaune';
                  break;
              default:
                this.gameText = '';
                break;
          }
      }
      i++;
      }, 1300);
  }

  generateRandomPattern() {
    let i = 0;

    while (i < this.numberToReproduce) {
        let randomNumber = Math.round(Math.random() * 4) + 1;
        while (randomNumber > 4 || randomNumber === this.randomPattern[this.randomPattern.length - 1]) {
            randomNumber = Math.round(Math.random() * 4) + 1;
        }
        this.randomPattern.push(randomNumber);
        i++;
    }
  }

  gameWon() {
    this.gameWonBool = true;
    proximaStatusGame = true;
  }

  playerInputGame(inputNumber: number) {
    if (inputNumber === this.randomPattern[this.playerInput.length]) {
      this.playerInput.push(inputNumber);
      console.log('Player input : ', this.playerInput);
    } else {
      console.log('ERROR !');
      this.gameText = 'Erreur ! Recommance !';
      this.randomPattern = [];
      this.playerInput = [];
      this.generateRandomPattern();
      this.gameTurn();
    }

    if (this.playerInput.length === this.randomPattern.length) {
      console.log('PLAYER WON');
      this.gameText = 'Victoire ! Niveau suivant';
      this.numberOfWin++;
      this.numberToReproduce++;
      this.randomPattern = [];
      this.playerInput = [];
      if (this.numberOfWin >= 3) {
            this.gameText = 'VICTOIRE ! Vous avez complété cette mission';
            this.gameWon();
        } else {
            this.generateRandomPattern();
            this.gameTurn();
        }
    }
  }

  validateGame() {
    proximaStatusGame = true;
  }
}

export let proximaStatusGame: boolean;
