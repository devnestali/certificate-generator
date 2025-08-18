import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { BaseUi } from "./components/base-ui/base-ui";
import { CertificateService } from './services/certificate';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('certificate-generator');
  public showNavbar: boolean = true;

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    const certificatesOnLocalStorage = localStorage.getItem('@CertificateGenerator:certificates')
    this.certificateService.certificates =
      certificatesOnLocalStorage
      ? JSON.parse(certificatesOnLocalStorage)
      : []
  }
}
