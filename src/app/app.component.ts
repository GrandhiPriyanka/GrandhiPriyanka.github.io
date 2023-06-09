import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Howl, Howler } from 'howler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'adiBirthday';
  showLoader: boolean = true;
  showCards: boolean = false;
  showRouter: boolean;

  constructor(public router: Router) { }

  sound = new Howl({ src: ['assets/images/audio.mpeg'], html5: true });

  ngOnInit(): void {
    //     setTimeout(() => {
    //       this.showLoader = false;
    //       this.showCards = false;
    //     }, 5000);
    //     let element:HTMLElement = document.getElementById('.container') as HTMLElement;

    // element.click();


    // Change global volume.
    Howler.volume(0.5);
  }
  onloaderClick() {
    this.showLoader = false;
    this.showCards = false;
    this.sound.play();
    setTimeout(() => {
      this.showCards = true;
    }, 2000);
  }
  navigateToProfile() {
    this.showCards = true;
  }
  navigateToWishes() {
    this.showRouter = true;
    this.showCards = false;
    // this.router.navigateByUrl('wishes');
  }
  ngOnDestroy(): void {
    this.showCards = false;
    this.sound.stop();
  }
}
