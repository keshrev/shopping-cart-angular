import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit, OnChanges {
  @Input() cartCount;
  blinkCount: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    // To indicate the user when cart updated.
    this.blinkCount = true;
    setTimeout(() => {
      this.blinkCount = false;
    }, 300);
  }

}
