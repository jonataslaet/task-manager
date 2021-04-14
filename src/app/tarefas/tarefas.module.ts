import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './tarefa.service';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';



@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule {

  constructor(){

  }

  
}
