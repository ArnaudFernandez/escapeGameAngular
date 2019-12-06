import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'EscapeGame';
  planet = 'initialDialog';
  timeToUnlockDialog: number;
  timeToUnlockScreen: number;
  lastUrl: string;

  @Output() planetChange = new EventEmitter<string>();


  constructor(private router: Router) {
      router.events.subscribe((val) => {this.planet = this.currentUrl(); this.shouldEmit(); });
  }

  getPlanet() {
    return this.planet;
  }

  ngOnInit(): void {
    this.timeToUnlockDialog = 0;
    this.planetChange.emit('initialDialog');
    setInterval(() => this.timeToUnlockDialog++, 1000);
  }

  currentUrl() {
    if (this.timeToUnlockDialog > 10) {
        return this.router.url.substr(1, this.router.url.length - 1);
    } else {
      return 'initialDialog';
    }
  }

  shouldEmit() {
    if (this.planet !== this.lastUrl) {
        this.planetChange.emit(this.planet);
        this.lastUrl = this.planet;
    }
  }
}
