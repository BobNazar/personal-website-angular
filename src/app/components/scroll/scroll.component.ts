import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  activeScroll: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  @HostListener("window:scroll")

  onWindowScroll() {
    window.scrollY >= 560 ? this.activeScroll = true : this.activeScroll = false;
  }

}
