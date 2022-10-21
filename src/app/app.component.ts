import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';

  @Input() habilita:any;

  teste(habilita:any){
    this.habilita = habilita;
    console.log('output');
    console.log(habilita);
  }
}
