import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nameList : string[] = ["Afred","Roland","Charles","Renard","Afr"]
  constructor() { }

  ngOnInit(): void {
  }

}
