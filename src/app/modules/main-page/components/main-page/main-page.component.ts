import { Component, OnInit } from '@angular/core';
import { Pair } from '@models/pair';
import { ControlService } from '../../services/control.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  pairArr: Pair[];
  startGame = false;

  constructor(private service: ControlService) { }

  ngOnInit(): void {
    this.service.getPairArray(50).subscribe(pairArr => {
      this.pairArr = pairArr;
    });
  }
}
