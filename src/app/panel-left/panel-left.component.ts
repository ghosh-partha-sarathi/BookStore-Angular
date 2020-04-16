import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-left',
  templateUrl: './panel-left.component.html',
  styleUrls: ['./panel-left.component.scss']
})
export class PanelLeftComponent implements OnInit {
  dynamicCategories = [ 
          "Popular",
  			  "Trending",
  			  "Most Viewed",
  			  "Most Read",
          "New Arrivals",
          "Bestselling",
          "Most Liked",
          "Launching Next",
          "Most Interested",
          "Hello",
          "World",
          "CSS",
          "HTML",
          "aaa"
  			]

  constructor() { }

  ngOnInit(): void {
  }

}
