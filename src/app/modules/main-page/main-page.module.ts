import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GameContainerComponent } from './components/game-container/game-container.component';
import { ShufflePipe } from './pipes/shuffle.pipe';
import { CardComponent } from './components/game-container/components/card/card.component';

@NgModule({
  declarations: [MainPageComponent, GameContainerComponent, ShufflePipe, CardComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
