import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.scss']
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // + converte valor para dado númerico
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscaPorId(id);
  }

  atualizar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
