import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomapiService } from '../customapi.service';

@Component({
  selector: 'app-custom-api-practice',
  templateUrl: './custom-api-practice.component.html',
  styleUrls: ['./custom-api-practice.component.scss']
})
export class CustomApiPracticeComponent {
  userDetails!: FormGroup;
  constructor(private api: CustomapiService) {
    this.userDetails = new FormGroup({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required)
    })
  }
  onSubmit() {
    if (this.userDetails.valid) {
      let formValue = this.userDetails.value;
      this.api.postCustomApi(this.userDetails.value);
    }

  }
}
