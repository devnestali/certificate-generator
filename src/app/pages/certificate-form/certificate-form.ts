import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CertificateProps } from '../../interfaces/certificate';
import { CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css'
})
export class CertificateForm {
  activity: string = ''

  certificate: CertificateProps = {
    name: '',
    activityList: [],
    date: ''
  };

  constructor(private certificateService: CertificateService) {}

  invalidField(control: NgModel) {
    return control.invalid && control.touched
  }

  validForm() {
    return this.certificate.activityList.length > 0 && this.certificate.name.length > 0
  }

  addActivityToList() {
    this.certificate.activityList.push(this.activity)
    this.activity = ''
  }

  removeActivityToList(index: number) {
    this.certificate.activityList.splice(index, 1)
  }

  submit() {
    if(!this.validForm()) {
      return
    }

    this.certificate.date = this.handleCurrentDate()

    this.certificateService.addCertificate(this.certificate)
  }

  handleCurrentDate() {
    const currentDate = new Date()

    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const year = String(currentDate.getFullYear())

    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  }
}
