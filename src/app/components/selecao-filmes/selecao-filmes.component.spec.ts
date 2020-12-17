import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FilmesService } from 'src/app/services/filmes.service';

import { SelecaoFilmesComponent } from './selecao-filmes.component';

describe('SelecaoFilmesComponent', () => {
  let httpClient: HttpClient;
  let router: Router;
  let filmesService: FilmesService;
  let component: SelecaoFilmesComponent;
  let fixture: ComponentFixture<SelecaoFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoFilmesComponent ],
      providers:[
        SelecaoFilmesComponent,
        {provider: FilmesService, useClass: MockFilmesServices}
      ],
      imports:[
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
