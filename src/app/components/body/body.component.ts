import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrarLogo: boolean = true;
  paginas: Pagina[] = [
    {
      titulo: "Tour of Heroes",
      link: "https://angular.io/tutorial"
    },
    {
      titulo: "CLI Documentation",
      link: "https://github.com/angular/angular-cli/wiki"
    },
    {
      titulo: "Angular blog",
      link: "https://blog.angular.io/"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Pagina {
  titulo: string,
  link
}