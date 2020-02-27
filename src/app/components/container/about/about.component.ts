import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  lat: number = 50.01494851;
  lng: number = 36.22801826;
  constructor() { }

  ngOnInit() {
  }

}
