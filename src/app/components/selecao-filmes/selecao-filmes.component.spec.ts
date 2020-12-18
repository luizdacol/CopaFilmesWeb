import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';
import { FilmesService } from 'src/app/services/filmes.service';
import { CardFilmeComponent } from '../card-filme/card-filme.component';

import { SelecaoFilmesComponent } from './selecao-filmes.component';

describe('SelecaoFilmesComponent:Methods', () => {

  let component: SelecaoFilmesComponent;
  let fixture: ComponentFixture<SelecaoFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoFilmesComponent],
      providers: [
        SelecaoFilmesComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    component = TestBed.inject(SelecaoFilmesComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should habilitarBotao return true', () => {
    component.filmesSelecionados.push("1", "2", "3", "4", "5", "6", "7", "8");
    fixture.detectChanges();

    expect(component.habilitarBotao()).toBe(true);
  });

  it('should habilitarBotao return true', () => {
    component.filmesSelecionados.push("1", "2", "3", "4", "5", "6", "7", "8");
    fixture.detectChanges();

    expect(component.habilitarBotao()).toBe(true);
  });

  it('should habilitarBotao return false', () => {
    component.filmesSelecionados.push("1");
    fixture.detectChanges();

    expect(component.habilitarBotao()).toBe(false);
  });

  it('should add item in filmesSelecionado', () => {
    let evento = { target: { id: "id1", checked: true } };
    component.alteraSelecao(evento);

    expect(component.filmesSelecionados.length).toBe(1);
  });

  it('should remove item in filmesSelecionado', () => {
    let evento = { target: { id: "id1", checked: true } };
    component.alteraSelecao(evento);

    evento = { target: { id: "id1", checked: false } };
    component.alteraSelecao(evento);

    expect(component.filmesSelecionados.length).toBe(0);
  });

});

describe('SelecaoFilmesComponent', () => {
  let httpClient: HttpClient;
  let router: Router;
  let filmesService: FilmesService;
  let component: SelecaoFilmesComponent;
  let fixture: ComponentFixture<SelecaoFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoFilmesComponent],
      providers: [
        SelecaoFilmesComponent,
        { provider: FilmesService, useClass: MockFilmesServices }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    component = TestBed.inject(SelecaoFilmesComponent);
    filmesService = TestBed.inject(FilmesService);
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecaoFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockFilmesServices {
  obterFilmes() { return [] };
}
