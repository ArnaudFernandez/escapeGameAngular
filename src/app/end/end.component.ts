import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  timer;
  isFirstPop;
  isSecondPop;
  isThirdPop;

  constructor() {}

  ngOnInit() {
    this.timer = 0;
    this.isFirstPop = false;
    this.isSecondPop = false;
    this.isThirdPop = false;
    setInterval(() => {this.timer++; this.checkPop(); }, 1000);
  }

  checkPop() {
    if (this.timer >= 7) {
      this.isFirstPop = true;
    }

    if (this.timer >= 14) {
          this.isSecondPop = true;
      }

      if (this.timer >= 20) {
          this.isThirdPop = true;
      }
  }

  firstPop() {
    return this.isFirstPop;
  }

    secondPop() {
        return this.isSecondPop;
    }

    thirdPop() {
        return this.isThirdPop;
    }

    finalBackground() {
      if (this.isThirdPop) {
        return 'finalScreen';
      }
      return 'endContainer';
    }
}
