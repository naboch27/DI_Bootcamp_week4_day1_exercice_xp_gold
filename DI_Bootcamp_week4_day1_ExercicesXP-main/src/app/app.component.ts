import { Component, OnInit } from '@angular/core';
import { ApiJsonService } from './api-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'ExerciceXPGold';
  datejour : Date = new Date();
  time : any;

  constructor(public apijson : ApiJsonService) { }
  ngOnInit(): void {
    this.time = this.apijson.getData();
  }
  /*creation darticle*/

  jsonArticle = { 
    nomArticle : "Lenovo",
    marqueArticle :"Thinkpad",
    quantite :5
  }
}
