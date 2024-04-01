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

  viewCount: number = 0
  likeCount: number = 0

  @ViewChild('home', { static: true }) home!: ElementRef<HTMLDivElement>
  @ViewChild('menuIcon') menuIcon!: ElementRef
  @ViewChild('menu') menu!: ElementRef

  cursor: any;
  menuItems: any = [
    { name: 'about', label: 'About', route: '/home/about', clickedOn: false },
    { name: 'projects', label: 'Projects', route: '/home/projects', clickedOn: false },
    { name: 'contacts', label: 'Contacts', route: '/home/contacts', clickedOn: false },
  ]
  section: any;
  icons: any[] = [{ name: 'LinkedIn icon', iconLink: '../../../assets/linkedin.svg', tooltip: 'Check my linkedIn account', link: 'https://www.linkedin.com/in/simphiwe-gift-nene-2460151a2/' }, { name: 'Github icon', iconLink: '../../../assets/github.svg', tooltip: 'Check my github account', link: 'https://github.com/Simphiwe20' },
  { name: 'Facebook icon', iconLink: '../../../assets/facebook.svg', tooltip: 'Check my favebook account', link: 'https://www.facebook.com/mbhele.dlamini/' }, { name: 'Instagram icon', iconLink: '../../../assets/instagram.svg', tooltip: 'Check my instagram account', link: 'https://www.instagram.com/ebouy_gift/' }];
  Isnavigated: boolean = false
  isShowMore: boolean = false

  constructor(private router: Router) {
    this.viewCount++
  }

  ngOnInit(): void {
    this.listenToRoute()
    this.cursor = document.querySelector('#cursor')

  }

  ngAfterViewInit() {
    this.landing()
    this.section = document.querySelector('section')
    console.log(this.menu.nativeElement.style.display === "")
  }

  navigate(fragment: any): void {
    // this.Isnavigated = true
    this.router.navigateByUrl(`home#${fragment}`)
  }

  listenToRoute(): void {
    this.router.events.subscribe(event => {
      console.log(event)
      if (event instanceof NavigationEnd) {
        this.menuItems.forEach((menu: any) => {
          menu['clickedOn'] = false
          if (event.url.includes(menu.name)) {
            this.Isnavigated = true
            menu['clickedOn'] = true

          }
        })
      }
    })
    console.log(this.Isnavigated)
  }

  toHome() {
    this.router.navigate(['/home'])
    this.isShowMore = false
  }

  viewMenu() {
    if(this.menu.nativeElement.style.display === 'block') {
      this.menu.nativeElement.style.display = 'none'
    }else if(this.menu.nativeElement.style.display === 'none') {
      this.menu.nativeElement.style.display = 'block'
    }else {
      this.menu.nativeElement.style.display = 'block'
    }
    console.log(this.menu.nativeElement.style.display)
  }

  countLike(): void {
    this.likeCount++
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
