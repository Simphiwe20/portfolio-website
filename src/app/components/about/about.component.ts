import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
// typical import
import gsap from "gsap";
import { Draggable, Flip, MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {

  @Output() isReadMore = new EventEmitter<boolean>()

  isShowMore: boolean = false
  skills: any[] = [{ name: 'HTML', exp: '6 months', icon: '../../../assets/skills-icons/HTML5.png', per: '80%', value: 80 },
  { name: 'CSS3', exp: '6 months', icon: '../../../assets/skills-icons/CSS3.png', per: '80%', value: 80 },
  { name: 'JavaScript', exp: '5 months', icon: '../../../assets/skills-icons/JavaScript.png', per: '70%', value: 70 },
  { name: 'TypeScript', exp: '3 months', icon: '../../../assets/skills-icons/TypeScript.png', per: '90%', value: 90 },
  { name: 'Angular', exp: '3 months', icon: '../../../assets/skills-icons/AngularJS.png', per: '60%', value: 60 },
  { name: 'Node.js', exp: '1 months', icon: '../../../assets/skills-icons/Node.js.png', per: '40%', value: 40 },
  { name: 'Express', exp: '1 months', icon: '../../../assets/skills-icons/Express.png', per: '60%', value: 60 },
  { name: 'Postman', exp: '1 months', icon: '../../../assets/skills-icons/Postman.png', per: '55%', value: 55 },
  { name: 'Python', exp: '1 year', icon: '../../../assets/skills-icons/Python.png', per: '60%', value: 60 },
]

  ngAfterViewInit(): void {
    gsap.from('.about-anime', {
      duration: 1,
      y: 150,
      x: -100,
      delay: 0.8,
      stagger: .3,
      // y: -0,
      // scale: 50,
      opacity: 0,
      // rotation: 60,
      // ease: 'expo.inOut',
      scrollTrigger: '.about-anime'
    })
    gsap.from('.title', {
      duration: 1.5,
      y: 50,
      x: -150,
      // y: -0,
      // scale: 50,
      opacity: 0,
      // rotation: 60,
      // ease: 'expo.inOut',
      scrollTrigger: '.title'
    })
  }

  showMore(): void {
    this.isShowMore = true
    this.isReadMore.emit(true)
  }


}
