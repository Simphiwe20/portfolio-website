import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contactForm: FormGroup
  emailPattern: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  numberPattern: any = /^(\+27|0)[6-8][0-9]{8}$/

  constructor() {

    this.contactForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.min(3)]),
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      number: new FormControl('',[Validators.required, Validators.min(10), Validators.max(13)]),
      comment: new FormControl(''),

    })
  }

  submit(): any {
    if(!this.contactForm.valid) return
    
  }
}
