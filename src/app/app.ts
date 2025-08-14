import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";


import { CommonModule } from '@angular/common';

import { BaseUi } from "./components/base-ui/base-ui";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('certificate-generator');
  public showNavbar: boolean = true;
}
