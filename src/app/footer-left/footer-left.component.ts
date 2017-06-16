import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-left',
  templateUrl: './footer-left.component.html',
  styleUrls: ['./footer-left.component.css']
})
export class FooterLeftComponent implements OnInit {
  @Input() itemsLeft: number;
  constructor() { }

  ngOnInit() {
  }

}
