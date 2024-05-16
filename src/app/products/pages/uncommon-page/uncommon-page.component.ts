import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select...
  public name: string = 'Saimon';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invetarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  };

  //i18n Plural...
  public clients: string[] = ['Saimon', 'Melisa', 'Fernando', 'Josue', 'Pablo', 'carlos', 'Noter'];
  public clientsMap = {
    '=0': 'No tenemos clientes en espera...',
    '=1': 'tenemos un cliente en espera...',
    '=2': 'tenemos 2 clientes en espera...',
    'other': 'tenemos # clientes esperando...',
  }

  delectClient(): void {
    this.clients.shift();
  };

  //keyValue Pipe...
  public person = {
    name: 'saimon',
    age: 37,
    address: 'Ottawa, Canada'
  };

  //Async Pipe...
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value) )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos Data en la promesa.');
    }, 3500)
  });

};
