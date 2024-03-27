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
export class ProjectsComponent implements AfterViewInit {

  projects: any[] = [

    { name: 'Claims Management Systems', year: 'March 2024', technologies: 'MEAN STACK(MongoDB, Express JS, Angular JS and Node JS)', link: 'https://github.com/Simphiwe20/cms.git' },
    { name: 'Medi-center Management System', year: 'March 2024', technologies: 'MEAN STACK(MongoDB, Express JS, Angular JS and Node JS)', link: 'https://github.com/Simphiwe20/medical-center-systems.git' },
    { name: 'Operations Systems', year: 'Feb 2024', technologies: 'MEAN STACK(MongoDB, Express JS, Angular JS and Node JS)', link: 'https://github.com/Simphiwe20/operations-system.git' },
    { name: 'Weather App', year: 'Dec 2023', technologies: 'HTML, CSS & JS', link: 'https://github.com/Simphiwe20/My-Weather-App.git' },
    { name: 'Basic Calculator', year: 'Nov 2023', technologies: 'HTML, CSS, JS', link: 'https://github.com/Simphiwe20/operations-system.git' },
  ]
  cursor: any

  ngAfterViewInit() {

  }

}
