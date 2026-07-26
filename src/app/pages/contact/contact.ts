import { Component } from '@angular/core';
import { ContactHero } from "./components/contact-hero/contact-hero";
import { ContactMethods } from "./components/contact-methods/contact-methods";
import { OfficeLocation } from "./components/office-location/office-location";
import { ContactCta } from "./components/contact-cta/contact-cta";
import { ContactMap } from "./components/contact-map/contact-map";

@Component({
  selector: 'app-contact',
  imports: [ContactHero, ContactMethods, OfficeLocation, ContactCta, ContactMap],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
