import { Component } from '@angular/core';
import { ItemCertificate } from "../../components/item-certificate/item-certificate";

@Component({
  selector: 'app-certificates',
  imports: [ItemCertificate],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {
}
