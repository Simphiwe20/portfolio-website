import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contactForm: FormGroup
  emailPattern: any = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  numberPattern: any = /^[0-9]/
  isSubmitted: boolean = false

  constructor(private api: ApiServicesService, private snackar: MatSnackBar) {

    this.contactForm = new FormGroup({
      fullName: new FormControl('',[Validators.required, Validators.min(3)]),
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      cellNumber: new FormControl('',[Validators.required]),
      comment: new FormControl(''),

    })
  }

  submit(): any {
    if(!this.contactForm.valid) return

    let contactInfor = this.contactForm.value

    this.api.genericPost('/add-comments', contactInfor)
      .subscribe({
        next: (res) => {
          this.isSubmitted = true
          console.log(res)
          this.snackar.open('Comment Added successfully', 'OK', {duration: 3000})
        },
        error: (err) => {
          console.log(err)
          this.snackar.open(err.error.Error, 'OK', {duration: 3000})
        },
        complete: () => {}
      })

    
  }
}
