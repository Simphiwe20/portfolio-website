import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// typical import
import gsap from "gsap";
import { Draggable, Flip, MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import { fromEvent } from 'rxjs';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('home', { static: true }) home!: ElementRef<HTMLDivElement>
  // @ViewChild('cursor') cursor!: ElementRef
  cursor: any;
  menuItems: any = [
    {name: 'about', label: 'About', route: '/home/about' },
    {name: 'projects', label: 'Projects', route: '/home/projects' },
    {name: 'contacts', label: 'Contacts', route: '/home/contacts' },
  ]
  section: any;
  icons: any[] = [{name: 'LinkedIn icon', iconLink: '../../../assets/linkedin.svg', tooltip: 'Check my linkedIn account'}, {name: 'Github icon', iconLink: '../../../assets/github.svg', tooltip: 'Check my github account'},
                    {name: 'Facebook icon', iconLink: '../../../assets/facebook.svg', tooltip: 'Check my favenook account'}, {name: 'Instagram icon', iconLink: '../../../assets/instagram.svg', tooltip: 'Check my instagram account'}];
  Isnavigated: boolean = false
  isShowMore: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.listenToRoute()
    this.cursor = document.querySelector('#cursor')
  }

  ngAfterViewInit() {
    this.landing()
    this.section = document.querySelector('section')
  }

  navigate(fragment: any): void {
    // this.Isnavigated = true
    this.router.navigateByUrl(`home#${fragment}`)
  }

  listenToRoute(): void {
    this.router.events.subscribe(event => {
      console.log(event)
      if(event instanceof NavigationEnd) {
        this.menuItems.forEach((menu: any) => {
          if(menu.name === event.url.split('#')[1]) {
            this.Isnavigated = true
          }

        })
      }
    })
    console.log(this.Isnavigated)
  }

  hideOthers(status: boolean): void {
    this.isShowMore = status
    console.log(this.isShowMore)
  }


  landing(): void {
    gsap.from('.initials', {
      duration: .8,
      x: -20,
      opacity: 0,
      ease: 'expo.inOut'
    })
    gsap.from('.menu', {
      duration: .8,
      delay: 0.5,
      y: -20,
      stagger: .3,
      opacity: 0,
      ease: '.inOut'
    })
    gsap.from('section', {
      duration: 1,
      delay: 1.3,
      y: -20,
      stagger: .3,
      opacity: 0,
      ease: 'expo.easeInOut'
    })
    gsap.from('section .anime', {
      duration: 1,
      delay: 1.3,
      y: -20,
      stagger: .3,
      opacity: 0,
      ease: 'expo.easeInOut'
    })
    gsap.from('img', {
      duration: 1,
      delay: 3,
      y: -20,
      stagger: .3,
      opacity: 0,
      ease: 'expo.easeInOut'
    })
  }


}
