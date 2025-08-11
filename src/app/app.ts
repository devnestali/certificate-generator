import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from "./components/primary-button/primary-button";
import { SecondaryButton } from './components/secondary-button/secondary-button';
import { CommonModule } from '@angular/common';
import { ItemCertificate } from "./components/item-certificate/item-certificate";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, CommonModule, ItemCertificate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate-generator');
  public showNavbar: boolean = true;
}
