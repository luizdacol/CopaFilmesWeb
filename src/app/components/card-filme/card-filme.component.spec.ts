import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Filme } from 'src/app/interfaces/filme';

import { CardFilmeComponent } from './card-filme.component';

describe('CardFilmeComponent', () => {
  let component: CardFilmeComponent;
  let fixture: ComponentFixture<CardFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardFilmeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should movie info appears', () => {
    component.filme = { id: "1", titulo: "Titulo do filme", ano: 2000 };
    fixture.detectChanges();

    let element = fixture.debugElement.nativeElement;
    expect(element.querySelector('.titulo').textContent).toEqual('Titulo do filme');
    expect(element.querySelector('.ano').textContent).toEqual('2000');
  })

  it('should movie info default appears', () => {
    fixture.detectChanges();

    let element = fixture.debugElement.nativeElement;
    expect(element.querySelector('.titulo').textContent).toEqual('-');
    expect(element.querySelector('.ano').textContent).toEqual('0');
  })

  it('should checkbox emit an event', () => {
    component.filme = { id: "1", titulo: "Titulo do filme", ano: 2000 };
    spyOn(component.notify, 'emit');

    fixture.detectChanges();
    
    let element = fixture.debugElement.nativeElement;
    let checkbox = element.querySelector('input[type=checkbox]');

    expect(checkbox.checked).toBe(false);
    checkbox.click();

    expect(checkbox.checked).toBe(true);
    expect(component.notify.emit).toHaveBeenCalled();
  })

});
