import { Injectable } from '@angular/core';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, AdOptions, BannerAdPluginEvents, AdMobBannerSize } from '@capacitor-community/admob';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  optionsBanner: BannerAdOptions = {
    adId: Constants.BANNER_TEST,
    adSize: BannerAdSize.FULL_BANNER,
    position: BannerAdPosition.BOTTOM_CENTER
  };

  optionsInterstitial: AdOptions  = {
    adId: Constants.INTERSTITIAL_TEST,
  };

  constructor() { }

  prepareInterstitial() {
    return AdMob.prepareInterstitial(this.optionsInterstitial);
  }

  showInterstitial() {
    return AdMob.showInterstitial();
  }

  showBanner() {
    return AdMob.showBanner(this.optionsBanner);
  }

}
