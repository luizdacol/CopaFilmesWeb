import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent implements OnInit {

  @Input() filme;
  @Output() notify =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
