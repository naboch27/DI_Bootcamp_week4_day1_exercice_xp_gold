import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent {

  listItems = ["mange","banana","pomme","orange"]

 //listItem avec objet

 bookList = [
  {
      name: 'eXtreme Programming Explained'
  },
  {
      name: 'Clean Code'
  },
  {
    name: 'Clean 1'
},
{
  name: 'Clean 2'
}
];
}

