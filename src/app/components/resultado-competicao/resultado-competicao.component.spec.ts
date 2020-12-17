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
    } as any)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoCompeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
