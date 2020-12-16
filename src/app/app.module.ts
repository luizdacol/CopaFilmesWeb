import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardFilmeComponent } from './components/card-filme/card-filme.component';
import { HttpClientModule } from '@angular/common/http';
import { SelecaoFilmesComponent } from './components/selecao-filmes/selecao-filmes.component';
import { ResultadoCompeticaoComponent } from './components/resultado-competicao/resultado-competicao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardFilmeComponent,
    SelecaoFilmesComponent,
    ResultadoCompeticaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
