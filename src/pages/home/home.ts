import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RadioPlayer} from '../../app/radio';
import { StatusBar } from '@ionic-native/status-bar';
import { BackgroundMode } from '@ionic-native/background-mode';

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
              private statusBar: StatusBar,
          private backgroundMode: BackgroundMode) {

  }
  url = "http://s8.myradiostream.com/15554/listen.mp3";

  play() {
    this.backgroundMode.enable();
    this.player.play();
    this.playFlag = true;
    this.src = 'assets/stop.png';

  }

  pause() {
    this.backgroundMode.disable().then();
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
