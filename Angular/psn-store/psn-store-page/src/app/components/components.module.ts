import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardGameComponent } from './card-game/card-game.component';
import { InformationGameComponent } from './information-game/information-game.component';

@NgModule({
  declarations: [HeaderComponent, CardGameComponent, InformationGameComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CardGameComponent, InformationGameComponent],
})
export class ComponentsModule {}
