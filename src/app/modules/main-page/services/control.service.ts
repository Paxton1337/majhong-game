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

  getPairArray(genNumber: number): Observable<Pair[]> {
    const primeArray = Array
      .from(Array(genNumber).keys())
      .filter(num => isPrime(num));

    return of(
      [...primeArray, ...primeArray].map((num, i) => ({ id: i, number: num }))
    );
  }

  onSelect(selectedNumber: number): any {
    this.compareArr.push(selectedNumber);
    console.log(this.compareArr);
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
