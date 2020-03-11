import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subTitle: string;
  public web: string;
  
  constructor() {
    this.title = "Oscar Nelson";
    this.subTitle = "Desarrollador WEB y Formador";
    this.web = "oscarweb.es";
  }

  ngOnInit() {
    
  }

}
