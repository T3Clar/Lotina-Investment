import { Component } from '@angular/core';
interface ContactMethod {

  title: string;

  line1: string;

  line2: string;

  line3?: string;

  icon: 'email' | 'phone' | 'location' | 'partnership';

}

@Component({
  selector: 'app-contact-methods',
  imports: [],
  templateUrl: './contact-methods.html',
  styleUrl: './contact-methods.css',
})
export class ContactMethods {
  methods: ContactMethod[] = [

    {
      title: 'Email',
      line1: 'info@lotinainvestments.com',
      line2: 'We aim to respond',
      line3: 'within 24 hours',
      icon: 'email'
    },

    {
      title: 'Phone',
      line1: '+256 700 123 456',
      line2: 'Mon – Fri: 8:00 AM – 5:00 PM',
      line3: '(EAT)',
      icon: 'phone'
    },

    {
      title: 'Office Location',
      line1: 'Lotina Investments',
      line2: 'Jinja, Uganda',
      line3: 'East Africa',
      icon: 'location'
    },

    {
      title: 'Partnerships',
      line1: 'Strategic partnerships',
      line2: 'Investment opportunities',
      line3: 'partner@lotinainvestments.com',
      icon: 'partnership'
    }

  ];

}
