import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {
    @Input() titleToolbar :string;

  constructor() { }

  ngOnInit() {
  }

}
