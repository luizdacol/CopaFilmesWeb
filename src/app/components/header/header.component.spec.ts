import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should h1 shows titulo value', () => {
    component.titulo = "Titulo do Header";
    fixture.detectChanges();

    let elemento = fixture.debugElement.nativeElement;

    expect(elemento.querySelector('h1').textContent).toEqual('Titulo do Header');
  })

  it('should element with class descricao shows descricao value', () => {
    component.descricao = "Descricao do header";
    fixture.detectChanges();

    let elemento = fixture.debugElement.nativeElement;

    expect(elemento.querySelector('.descricao').textContent).toEqual('Descricao do header');
  })
});
