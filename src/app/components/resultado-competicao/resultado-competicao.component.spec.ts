import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCompeticaoComponent } from './resultado-competicao.component';

describe('ResultadoCompeticaoComponent', () => {
  let component: ResultadoCompeticaoComponent;
  let fixture: ComponentFixture<ResultadoCompeticaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoCompeticaoComponent ]
    })
    .compileComponents();
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
