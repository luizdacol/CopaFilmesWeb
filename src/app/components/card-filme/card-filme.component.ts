import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filme } from 'src/app/interfaces/filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.scss']
})
export class CardFilmeComponent implements OnInit {

  @Input() filme: Filme;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.filme === undefined) {
      this.filme = { id: '-', titulo: '-', ano: 0 };
    }
  }

}
