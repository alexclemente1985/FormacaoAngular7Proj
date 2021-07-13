import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  	JogoDaVelhaComponent
  ],
  exports: [
  	JogoDaVelhaComponent
  ],
  providers: [
  	JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
