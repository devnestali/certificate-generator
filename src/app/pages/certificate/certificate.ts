import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class Certificate implements OnInit{
  constructor(private certificateService: CertificateService){}

  ngOnInit(): void {
    console.log(this.certificateService.certificates)
  }
}
