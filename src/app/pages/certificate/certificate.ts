import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificateService } from '../../services/certificate';
import { CertificateProps } from '../../interfaces/certificate';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificate.html',
  styleUrl: './certificate.css'
})
export class Certificate implements OnInit{
  id: string | null = null
  certificate: CertificateProps | undefined

  constructor(private certificateService: CertificateService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificate = this.certificateService.certificates.find(item => item.id == this.id)
    })
  }
}
