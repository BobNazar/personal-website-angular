import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  formData!: FormGroup;

  private api = 'http//mailthis.to/Bobinio'

  emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  constructor(private builder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(40), Validators.pattern(this.emailPattern)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      project: new FormControl('', [Validators.required, Validators.maxLength(200)])
    })
  }

  postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

  onSubmit(formData: any) {
    this.postMessage(formData)
      .subscribe((response: any) => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, (error: any) => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

}
