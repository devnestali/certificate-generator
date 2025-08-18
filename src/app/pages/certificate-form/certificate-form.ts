import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  name: string = ''
  activity: string = ''
  activityList: string[] = []

  invalidField(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.activityList.length > 0 && this.name.length > 0
  }

  addActivityToList() {
    this.activityList.push(this.activity)
    this.activity = ''
  }

  removeActivityToList(index: number) {
    this.activityList.splice(index, 1)
  }
}
