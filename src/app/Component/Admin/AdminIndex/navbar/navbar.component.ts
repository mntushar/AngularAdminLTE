import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'Admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  docElement!: HTMLElement;
  isFullScreen: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.docElement = document.documentElement;
  }

  toggleFullScreen() {
    if (!this.isFullScreen) {
      this.docElement.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
}
}
