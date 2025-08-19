import { Component, OnInit } from '@angular/core';
import { ItemCertificate } from "../../components/item-certificate/item-certificate";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { CertificateService } from '../../services/certificate';
import { CertificateProps } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates implements OnInit{
  certificateList: CertificateProps[] = []

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateList = this.certificateService.certificates
  }
}
