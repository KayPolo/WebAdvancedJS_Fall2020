import { Component, OnInit } from '@angular/core';
import {projects} from '../projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	  // data = [
  //   {
  //     name: 'Awosome Project',
  //     description: 'This is the best you\'ve seen'
      
  //   },
  //   {
  //     name: 'Great Project',
  //     description: 'A great project ... hire me'
  //   },
  //   {
  //     name: 'Super Cool Project',
  //     description: 'What else do you wanna know?'
  //   }
  // ];
  




  data = projects;
  constructor() { }

  ngOnInit() {
  }

}
