import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MusicServiceProvider } from '../../providers/music-service/music-service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'detail/:trackID',
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public currentSong;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public music: MusicServiceProvider) {

  }

  ionViewWillLoad() {
    let songId = this.navParams.get('trackID');
    this.music.loadSong(songId)
      .subscribe(
        res => this.currentSong = res.results[0]
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
