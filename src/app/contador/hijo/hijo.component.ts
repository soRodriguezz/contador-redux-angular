import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {

  contador: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador );
  }

  multipicar() {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
  }

  dividir() {
    // this.contador /= 2;
    this.store.dispatch(actions.dividir({ numero: 3 }));
  }
  
  resetNieto( nuevoContador: number ) {
    // this.contador = nuevoContador
    // this.cambioContador.emit(this.contador);
  }

}
