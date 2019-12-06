import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time: number;
  interval: number;
  play: boolean;
  date;
  originDate;

  constructor() { }

  ngOnInit() {
    this.time = 600;
    this.play = false;
    this.originDate = new Date();
    this.date = new Date(null);
    this.date.setSeconds(this.time);

    setTimeout(() => this.startTimer(), 12 * 1000);
  }

  startTimer() {
      this.play = true;
      this.interval = setInterval(() => {
          this.time--;
          this.date.setSeconds(this.time);
          this.setNewDateTime();
      }, 1000);
    }

  setNewDateTime() {
    this.date.setSeconds(this.time);
  }

  getDateTime() {
    return this.originDate - this.originDate + this.time * 1000 - 3600000;
  }

  toggleTimer() {
    this.play = !this.play;
  }

}
