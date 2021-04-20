import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private el: ElementRef) { this.tarefaConcluida = null ? false : true}

  ngOnInit(): void {
    if (this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
