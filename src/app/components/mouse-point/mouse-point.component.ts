import { Component, HostListener } from '@angular/core';
import gsap from 'gsap';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-mouse-point',
  templateUrl: './mouse-point.component.html',
  styleUrls: ['./mouse-point.component.scss']
})
export class MousePointComponent {

  cursor: any;
  mouseX: number = 0
  mouseY: number = 0
  mouse$ = fromEvent<MouseEvent>(document.body, 'mouseMove')
    .subscribe({
      next: (res) => {console.log(res)}
    })

    ngOnInit(): void {
      this.cursor = document.querySelector('#cursor')
  
    }

    // hover() {   
    //   gsap.to({}, 0.016, {
    //     duration: 0.2,
    //     repeat: -1,
        
    //     onRepeat: () => {
    //       gsap.set(this.cursor, {
    //         css: {
    //           left: this.mouseX,
    //           right: this.mouseY,
    //         }
    //       })
    //     }
    //     })
  
    // }
  
    // @HostListener('window:mouseover', ['$event'])
    // onMouseOver(event: MouseEvent) {
    //   this.mouseX = event.clientX
    //   this.mouseY = event.clientY
    //   console.log('X', this.mouseX)
    //   console.log('Y', this.mouseY)
    //   this.hover()
    // }
  
}
