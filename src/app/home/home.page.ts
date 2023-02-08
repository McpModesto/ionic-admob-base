import { Component, OnInit } from '@angular/core';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private admob: AdmobService) { }

  ngOnInit() {
    // Preparamos y ejecutamos banner.
    this.admob.showBanner().then(
      value => {
        console.log(value);
      },
      error => {
        console.error(error);
      }
    );

    // Preparamos intersticial para luego ser mostrado.
    this.admob.prepareInterstitial().then(
      value => {
        console.log(value);
      },
      error => {
        console.error(error);
      }
    );

  }

  mostrarInterstitial() {
    // Mostrarmos intersticial.
    this.admob.showInterstitial().then(
      value => {
        console.log(value);
      },
      error => {
        console.error(error);
      }
    )
  }

}
