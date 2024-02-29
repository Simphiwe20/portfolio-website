import { AfterViewInit, Component } from '@angular/core';

import gsap from "gsap";
import { Draggable, Flip, MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit{

  projects: any[] = [
  {name: 'Operations Systems', year: 'Feb 2024', technologies: 'Angular JS & Express JS'},
  {name: 'Weather App', year: 'Dec 2023', technologies:'HTML, CSS & JS'},
  {name: 'Basic Calculator', year: 'Nov 2023', technologies: 'HTML, CSS, JS'},
  {name: 'Web-based portfolio', year: 'Nov 2023', technologies: 'HTML, CSS'}
]
  cursor: any

  ngAfterViewInit() {

  }
  
}
