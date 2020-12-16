import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/interfaces/filme';
import { Finalistas } from 'src/app/interfaces/finalistas';
import { FilmesService } from 'src/app/services/filmes.service';


@Component({
  selector: 'app-selecao-filmes',
  templateUrl: './selecao-filmes.component.html',
  styleUrls: ['./selecao-filmes.component.scss']
})
export class SelecaoFilmesComponent implements OnInit {

  ngOnInit(): void {
  }

  title = 'CopaFilmesWeb';
  filmesSelecionados: string[] = [];
  filmes: Filme[];
  titulo: string = "Fase de Seleção";
  descricao: string = "Selecione 8 filmes que você deseja que entrem na competição e depois pressione o botão Gerar Meu Campeonato para prosseguir";

  constructor(private filmesService: FilmesService,
    private router: Router) {
    this.filmesService.obterFilmes().subscribe((data: Filme[]) => this.filmes = data);
  }

  alteraSelecao(evento: any): void {
    if (evento.target.checked) {
      this.filmesSelecionados.push(evento.target.id);
    } else {
      let index = this.filmesSelecionados.indexOf(evento.target.id);
      this.filmesSelecionados.splice(index, 1);
    }
  }

  habilitarBotao(): boolean {
    return this.filmesSelecionados.length == 8;
  }

  enviarFilmesSelecionados(): void {
    this.filmesService.enviarFilmes(this.filmesSelecionados).subscribe((finalistas: Finalistas) => {
      this.router.navigate(['/resultado-competicao'], { state: { campeao: finalistas.campeao, viceCampeao: finalistas.viceCampeao } });
    });

  }

}
