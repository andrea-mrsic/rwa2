import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  title = 'Kontaktirajte nas';
  contactInfo = 'Za sve informacije, slobodno nas kontaktirajte na: info@fitlife.com ili pozovite 012-345-6789.';
}

