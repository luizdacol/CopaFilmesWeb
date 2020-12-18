import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Finalistas } from 'src/app/interfaces/finalistas';

import { ResultadoCompeticaoComponent } from './resultado-competicao.component';

describe('ResultadoCompeticaoComponent', () => {
  let component: ResultadoCompeticaoComponent;
  let fixture: ComponentFixture<ResultadoCompeticaoComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoCompeticaoComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'getCurrentNavigation').and.returnValue({
      extras: {
        state: { campeao: "Campeao", viceCampeao: "Vice Campeao" }
      }
    } as any);

    spyOn(router, 'navigate');

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCompeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should finalistas info appears', () => {
    let elemento = fixture.debugElement.nativeElement;
    expect(elemento.querySelectorAll('.finalista')[0].textContent).toEqual('1º Campeao');
    expect(elemento.querySelectorAll('.finalista')[1].textContent).toEqual('2º Vice Campeao');
  })

  it('should navigate to selecao-filmes page', () => {

    let botao = fixture.debugElement.nativeElement.querySelector('.botao');
    botao.click();

    expect(router.navigate).toHaveBeenCalledWith(["/selecao-filmes"]);
  });

});
