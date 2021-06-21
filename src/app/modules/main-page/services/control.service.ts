import { Injectable } from '@angular/core';
import { Pair } from '@models/pair';
import { from, Observable, of } from 'rxjs';
import { isPrime } from '../../../utilities/funtions/is-prime';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private compareArr: number[] = [];

  constructor() { }

  generatePairArray(genNumber: number): Observable<number[]> {
    const primeArray = Array
      .from(Array(genNumber).keys())
      .filter(num => isPrime(num));

    return of(primeArray);
  }

  onSelect(selectedNumber: number): boolean | string {
    this.compareArr.push(selectedNumber);
    if (this.compareArr.length === 3 && this.compareArr[0] === this.compareArr[1]) {
      this.compareArr = this.compareArr.splice(-1, 1);
      return true;
    } else if (this.compareArr.length === 3 && this.compareArr[0] !== this.compareArr[1]) {
      this.compareArr = [];
      return false;
    } else {
      return 'wait second';
    }
  }
}
