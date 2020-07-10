import {Component} from '@angular/core';
import {AlertController} from "@ionic/angular";

enum NomPossible {
    BORIS,
    ERIC,
    NANTHAN,
}

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    protected nom: NomPossible;
    salutation: string;
    age= 14;

    constructor(public alertController: AlertController) {
        this.nom = NomPossible.BORIS;
        this.salutation = `Bonjour ${this.nom}`;
    }



    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK']
        });

        await alert.present();
    }

    somme(x: number, y: number): number {
        return x + y;
    }

}
