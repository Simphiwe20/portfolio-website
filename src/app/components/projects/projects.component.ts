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

    { name: 'Claims Management Systems', year: 'November 2024', descriprion: "Claims Management System was a 2024 group project designed to streamline the insurance claims process by enabling users to submit, track, and manage claims efficiently", technologies: 'MEAN STACK(MongoDB, Express JS, Angular JS and Node JS)', link: 'https://github.com/Simphiwe20/cms.git' },
    { name: 'Medi-center Management System', year: 'June 2024', descriprion: "Medi-Center System was a 2024 group project developed using MEAN Stack. It was designed to streamline medical appointments by allowing doctors to manage their schedules and patients to book appointments based on doctor availability", technologies: 'MEAN STACK(MongoDB, Express JS, Angular JS and Node JS)', link: 'https://github.com/Simphiwe20/medical-center-systems.git' },
    { name: 'Operations Systems', year: 'April 2024', descriprion: "Web-based system developed using MEAN Stack. It aimed to automate manual organizational operations such as leave requests, transport requests, and visa applications, improving efficiency for employees, managers, HR personnel, and admins", technologies: 'MEAN STACK(MongoDB, Express JS, Angular JS and Node JS)', link: 'https://github.com/Simphiwe20/operations-systems2.0' }
  ]
  cursor: any

  ngAfterViewInit() {

  }

}
