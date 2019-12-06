import {Component, Input, OnInit} from '@angular/core';
import { proximaStatusGame } from '../proxima-gladius/proxima-gladius.component';
import { pinaStatusGame} from '../pina-loun/pina-loun.component';


@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {

  planetActivated: boolean;

  constructor() {}

  ngOnInit() {
      this.planetActivated = true;
  }

  proximaStatus() {
    if (proximaStatusGame === true) {
      return 'Proxima gladius (Terminé !)';
    } else {
      return 'Proxima gladius';
    }
  }

    pinaStatus() {
        if (pinaStatusGame === true) {
            return 'Pina Loun (Terminé !)';
        } else {
            return 'Pina Loun';
        }
    }

    grosusStatus() {
        if (pinaStatusGame === true && proximaStatusGame === true) {
            return 'Grosus Magma';
        } else {
            return 'Grosus Magma (Vérouillé)';
        }
    }

    isGameComplete() {
        if (pinaStatusGame === true && proximaStatusGame === true) {
            return true;
        }
        return false;
    }

}

