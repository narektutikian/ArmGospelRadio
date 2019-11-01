/**
 * Created by ntutikyan on 24.05.2017.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class RadioPlayer {

  promise: any;

  constructor() {
  }

  url = "http://s8.myradiostream.com/15554/listen.mp3";
  stream = new Audio(this.url);

  // private options: StreamingAudioOptions = {
  // successCallback: () => { console.log('Video played') },
  // errorCallback: (e) => { console.log('Error streaming') },
  //   initFullscreen: false
  // };

  play() {
    this.stream.play();
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });

      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });
    return this.promise;
  };

  pause() {
    this.stream.pause();
  };

}
