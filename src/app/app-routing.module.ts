import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoCompeticaoComponent } from './components/resultado-competicao/resultado-competicao.component';
import { SelecaoFilmesComponent } from './components/selecao-filmes/selecao-filmes.component';

const routes: Routes = [
  { path: 'selecao-filmes', component: SelecaoFilmesComponent },
  { path: 'resultado-competicao', component: ResultadoCompeticaoComponent },
  { path: '', redirectTo: '/selecao-filmes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
