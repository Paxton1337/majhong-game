import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Pair } from '@models/pair';
import { ControlService } from 'src/app/modules/main-page/services/control.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pair: Pair;
  @Input() startGame: boolean;
  @Input() isSelected: boolean;
  @Input() isSolved: boolean;
  @Input() isHidden: boolean;

  @Output() OnSelect = new EventEmitter<Pair>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pair: Pair): void {
    this.OnSelect.emit(pair);
  }
}
