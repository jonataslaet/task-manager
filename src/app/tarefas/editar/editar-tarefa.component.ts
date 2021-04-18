import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa.model';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa!: NgForm;
  tarefa: Tarefa = new Tarefa();

  constructor(
    private tarefaService: TarefaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
    console.log('this is ' + this.tarefa.id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
