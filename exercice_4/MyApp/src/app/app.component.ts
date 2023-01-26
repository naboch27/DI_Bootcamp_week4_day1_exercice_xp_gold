import { Component } from '@angular/core';


import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 
  title = 'MyApp';

   //Creation de la date  pour afficher des donnees formater

  maDate  = new Date();

   //Creation d'objet  pour afficher des donnees json

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

//Creation des async pour afficher des donnees json
  message$: Observable<string>;

private messages = [
'You are my hero!',
'You are the best hero!',
'Will you be my hero?'
];

constructor() {
this.message$ = this.getResendObservable();
}

resend() {
this.message$ = this.getResendObservable();
}

private getResendObservable() {
return interval(500).pipe(
map(i => this.messages[i]),
take(this.messages.length)
);
}
}
