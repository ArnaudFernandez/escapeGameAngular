import {Component, EventEmitter, Inject, Input, OnInit} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import {Dialog} from '../dialogFactory/dialogs';
import {Observable, TimeInterval} from 'rxjs/index';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    @Input() planet: EventEmitter<string>;

    durationInSeconds = 1;
    dialog;
    entrydialog: Dialog[] = [
        new Dialog('Ah ! Vous êtes enfin là, vous devez nous aider !', 4),
        new Dialog('Nous devons nous rendre au centre de la galaxie ...', 4),
        new Dialog('Vous allez nous aider ?! Génial !', 4),
        new Dialog('*BOOM*', 3),
        new Dialog('VOUS AVEZ ENTENDU ÇA ?!', 3),
        new Dialog('Vite ! Nous devons nous rendre au centre de la galaxie !', 4),
        new Dialog('Rendez vous sur les planètes pour récupérer les codes de lancement de l\'hyper espace !', 6),
        new Dialog('Roger les a perdu lors de ses expéditons..', 3),
        new Dialog('Plus de temps à perdre, allez-y ! Bonne chance !', 4),
    ];

    proximaDialog: Dialog[] = [
        new Dialog('Proxima Gladius ...', 4),
        new Dialog('C\'est une planète remplis de surprises', 4),
        new Dialog('*Grésillement radio*', 3),
        new Dialog('Nous captons quelque chose ! On dirait un code', 3),
        new Dialog('Déchiffrez le, ça pourrait nous servir !', 3),
    ];

    pinaDialog: Dialog[] = [
        new Dialog('Pina Loun, nos recherches affirment qu\'elle abritait la vie autrefois', 4),
        new Dialog('C\'est ici que Roger à passer la plus grande partie de ses recherches', 4),
        new Dialog('Regardez ! Il nous a laissé une boîte !', 3),
        new Dialog('Encore des énigmes ... Nous n\'avons pas le temps pour ça', 3),
        new Dialog('Mais ça ne devrait pas être un problème pour vous ! Non ?', 3),
    ];

    grosusDialog: Dialog[] = [
        new Dialog('*Bruit d\'interférences*', 50)
    ];

    retourBaseDialog: Dialog[] = [
        new Dialog('Retour à la base, ça fait du bien d\'être à la maison !', 4)
    ];

    ngOnInit() {
        this.planet.subscribe((value) => this.playDialog(value));
    }

    constructor(private snackBar: MatSnackBar) {}

    openSnackBar() {
        const snackBarConfig = new MatSnackBarConfig();
        snackBarConfig.duration = this.durationInSeconds * 1000;
        snackBarConfig.data = this.dialog;
        this.snackBar.openFromComponent(SnackBarComponent, snackBarConfig);
    }

    snackOpenDialog(dialogs: Dialog[]) {

        let interval: number;
        let i = 0;
        this.durationInSeconds = dialogs[i].getDuration();
        this.dialog = dialogs[i].getDialog();
        this.openSnackBar();
        interval = setInterval(() => {
            i++;
            switch (i) {
                case i :
                    if (i < dialogs.length) {
                        this.durationInSeconds = dialogs[i].getDuration();
                        this.dialog = dialogs[i].getDialog();
                        this.openSnackBar();
                    }
                    break;
                default:
                    break;
            }
        }, this.durationInSeconds * 1000);
    }

    playDialog(dialogName: string) {
        switch (dialogName) {
            case 'initialDialog':
                this.snackOpenDialog(this.entrydialog);
                break;
            case 'proximaGladius':
                this.snackOpenDialog(this.proximaDialog);
                break;
            case 'pinaLoun':
                this.snackOpenDialog(this.pinaDialog);
                break;
            case 'grosusMagma':
                this.snackOpenDialog(this.grosusDialog);
                break;
            case 'space':
                this.snackOpenDialog(this.retourBaseDialog);
                break;
        }
    }
}

@Component({
    selector: 'app-snack-bar-component',
    templateUrl: 'snack-bar-component.html',
    styleUrls: [],
})
export class SnackBarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }
}

