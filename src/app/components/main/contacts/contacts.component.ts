import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  formData!: FormGroup;

  emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(private builder: FormBuilder, private contact: ContactsService) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(40), Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      project: new FormControl('', [Validators.required, Validators.maxLength(200)])
    })
  }

  onSubmit(formData: any) {
    this.contact.postMessage(formData)
      .subscribe( response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
    this.formData.reset();
  }

}
