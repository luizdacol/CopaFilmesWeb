import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Filme } from 'src/app/interfaces/filme';

import { CardFilmeComponent } from './card-filme.component';

describe('CardFilmeComponent', () => {
  let component: CardFilmeComponent;
  let fixture: ComponentFixture<CardFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmeComponent);
    component = fixture.componentInstance;
    component.filme = {id: "1", titulo: "Titulo do filme", ano: 2000};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
