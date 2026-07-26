import { Component } from '@angular/core';
interface Faq {

  question: string;

  answer: string;

  open: boolean;

}

@Component({
  selector: 'app-contact-cta',
  imports: [],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.css',
})
export class ContactCta {
  faqs: Faq[] = [

  {
    question: 'What does Lotina Investments do?',
    answer: 'Lotina Investments builds, invests in and supports businesses that create long-term economic value across multiple sectors.',
    open: true
  },

  {
    question: 'Do you invest in startups?',
    answer: 'Yes. We evaluate innovative startups that demonstrate strong teams, scalable business models and sustainable growth potential.',
    open: false
  },

  {
    question: 'How can I become a partner?',
    answer: 'You can submit a partnership inquiry through our contact form or email us directly. Our team will review your proposal and respond promptly.',
    open: false
  },

  {
    question: 'Which industries do you focus on?',
    answer: 'Our interests include technology, commerce, healthcare, mobility, education, agriculture, logistics and digital transformation.',
    open: false
  },

  {
    question: 'Where is your headquarters?',
    answer: 'Lotina Investments is headquartered in Jinja, Uganda, while pursuing opportunities across East Africa and beyond.',
    open: false
  },

  {
    question: 'How long does it take to receive a response?',
    answer: 'Most enquiries receive a response within one to two business days.',
    open: false
  },

  {
    question: 'Can I submit a business proposal?',
    answer: 'Absolutely. We welcome proposals from entrepreneurs, founders and organizations seeking strategic investment or collaboration.',
    open: false
  },

  {
    question: 'Do you operate internationally?',
    answer: 'Yes. While our roots are in Uganda, our vision includes partnerships and investments throughout Africa and selected global markets.',
    open: false
  }

];
toggleFaq(index: number): void {

  this.faqs[index].open = !this.faqs[index].open;

}
}
