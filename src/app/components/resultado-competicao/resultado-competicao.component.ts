import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Finalistas } from 'src/app/interfaces/finalistas';

@Component({
  selector: 'app-resultado-competicao',
  templateUrl: './resultado-competicao.component.html',
  styleUrls: ['./resultado-competicao.component.scss']
})
export class ResultadoCompeticaoComponent implements OnInit {

  finalista: Finalistas;
  titulo: string = "Resultado Final";
  descricao: string = "Veja o resultado final do Campeonato de filmes de forma simples e rápida";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.finalista = this.router.getCurrentNavigation().extras.state as Finalistas;

  }

  iniciarCampeonato(): void {
    this.router.navigate(['/selecao-filmes']);
  }

}
