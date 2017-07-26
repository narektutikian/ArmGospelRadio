/**
 * Created by ntutikyan on 24.05.2017.
 */
export class RadioPlayer {
  url:string;
  stream:any;
  promise:any;

  constructor() {
    this.url = "http://s8.myradiostream.com/15554/listen.mp3";
    this.stream = new Audio(this.url);
  };

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
