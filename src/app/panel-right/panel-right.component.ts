import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-right',
  templateUrl: './panel-right.component.html',
  styleUrls: ['./panel-right.component.scss']
})

export class PanelRightComponent implements OnInit {
  
  modules = [ "Reports",
  			  "Review Moderation"
  			]

  constructor() { }

  ngOnInit(): void {
  }

}
