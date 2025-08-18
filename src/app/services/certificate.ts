import { Injectable } from '@angular/core';
import { CertificateProps } from '../interfaces/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificates: CertificateProps[] = []

  constructor() {}

  addCertificate(certificate: CertificateProps) {
    this.certificates.push({ ...certificate })

    const toObjectJSON = JSON.stringify(this.certificates)

    localStorage.setItem('@CertificateGenerator:certificates', toObjectJSON)
  }
}
