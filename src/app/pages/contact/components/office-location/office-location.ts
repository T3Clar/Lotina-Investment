import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-office-location',
  imports: [FormsModule],
  templateUrl: './office-location.html',
  styleUrl: './office-location.css',
})
export class OfficeLocation {
   fullName = '';
  company = '';
  email = '';
  phone = '';
  inquiry = '';
  message = '';

  inquiryTypes = [
    'General Inquiry',
    'Investment Opportunity',
    'Strategic Partnership',
    'Media & Press',
    'Careers',
    'Other'
  ];

  submit() {

    console.log({
      fullName: this.fullName,
      company: this.company,
      email: this.email,
      phone: this.phone,
      inquiry: this.inquiry,
      message: this.message
    });

  }

}
