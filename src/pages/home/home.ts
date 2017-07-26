import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RadioPlayer} from '../../app/radio';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RadioPlayer]
})
export class HomePage {

  private playFlag : boolean = false;
  private src : string = 'assets/play.png';

  constructor(public navCtrl: NavController,
            private player: RadioPlayer,
              private statusBar: StatusBar) {

  }

  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });
    this.playFlag = true;
    this.src = 'assets/stop.png';

  }

  pause() {
    this.player.pause();
    this.playFlag = false;
    this.src =  'assets/play.png';

  }

  button() {

    if(this.playFlag)
      this.pause();
    else
      this.play();

  }

}
