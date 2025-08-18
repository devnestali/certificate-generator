import { Component } from '@angular/core';
import { ItemCertificate } from "../../components/item-certificate/item-certificate";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
}
