/**
 * Created by ntutikyan on 24.05.2017.
 */

import {StreamingAudioOptions, StreamingMedia} from '@ionic-native/streaming-media';
import {Injectable}    from '@angular/core';

@Injectable()
export class RadioPlayer {

  promise: any;

  constructor(private streamingMedia: StreamingMedia) {
  }

  url = "http://s8.myradiostream.com/15554/listen.mp3";
  stream = new Audio(this.url);

  // private options: StreamingAudioOptions = {
  // successCallback: () => { console.log('Video played') },
  // errorCallback: (e) => { console.log('Error streaming') },
  //   initFullscreen: false
  // };

  play() {
    // this.streamingMedia.playAudio(this.url, this.options);
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
    // this.streamingMedia.stopAudio();
  };

}
