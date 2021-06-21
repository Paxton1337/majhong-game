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
  solvedArr: Pair[] = [];
  constructor(private service: ControlService) { }

  ngOnInit(): void {
  }

  onSelect(pair: Pair): void {

    this.selectedPairs.push(pair);

    const isValid = this.service.onSelect(pair.number);

    if (typeof isValid === 'string') {
      console.log('wait second number');
    } else if (isValid) {
      this.solvedArr = [...this.solvedArr, ...this.selectedPairs.splice(0, 2)];
      console.log(this.solvedArr, this.selectedPairs);
      // this.selectedPairs = [];
    } else if (!isValid) {
      this.selectedPairs = [];
    }
  }

  isSelected(id: number): boolean {
    return !!this.selectedPairs.find(pair => pair.id === id);
  }

  isSolved(id: number): boolean {
    return !!this.solvedArr.find(pair => pair.id === id);
  }

  isHidden(id: number): boolean {
    if (!this.startGame || (this.isSelected(id) || this.isSolved(id))) {
      return false;
    } else {
      return true;
    }
  }

}
