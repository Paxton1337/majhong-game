import { Component, Input, OnInit } from '@angular/core';
import { Pair } from '@models/pair';
import { ControlService } from '../../services/control.service';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html',
  styleUrls: ['./game-container.component.scss']
})
export class GameContainerComponent implements OnInit {
  @Input() pairsArray: Pair[];
  @Input() startGame: boolean;
  selectedPairs: Pair[] = [];
  solvedPairs: Pair[] = [];
  constructor(private service: ControlService) { }

  ngOnInit(): void {
  }

  onSelect(pair: Pair): void {

    this.selectedPairs.push(pair);

    const isValid = this.service.onSelect(pair.number);

    if (!(typeof isValid === 'string')) {
      isValid
        ? this.solvedPairs = [...this.solvedPairs, ...this.selectedPairs.splice(0, 2)]
        : this.selectedPairs = [];
    }
  }

  isSelected(id: number): boolean {
    return !!this.selectedPairs.find(pair => pair.id === id);
  }

  isSolved(id: number): boolean {
    return !!this.solvedPairs.find(pair => pair.id === id);
  }

  isHidden(id: number): boolean {
    return !this.startGame || (this.isSelected(id) || this.isSolved(id));
  }

}
