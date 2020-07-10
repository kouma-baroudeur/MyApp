import { Component, OnInit } from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  login:string; 
  password:string;

  constructor(public alertController: AlertController,public toastController: ToastController,private router: Router) { }

  ngOnInit() {}

  connection() {
    console.log(this.login,this.password)
    if(this.login && this.password){
      let db = JSON.parse(localStorage.getItem('db'))
      let check:boolean = db.username==this.login&& db.password==this.password;
      console.log(check)
      this.presentToast(check);
      if(check)
        this.router.navigate(['tabs']);



    }else{
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Formulaire Invalide',
      subHeader: 'Erreur',
      message: 'Veuillez renseigner vos parametres.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(isOk:boolean) {
    let msg = isOk? 'Bienvenue dans l\'application':'Parametres incorrectes';
    let color = isOk? 'success' : 'danger';
    const toast = await this.toastController.create({
      message:msg ,
      position: 'top',
      color: color,
      duration: 2000
    });
    toast.present();
  }
}
