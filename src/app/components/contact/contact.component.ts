import { Contact } from './../../models/contact.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  phone: string;
  email: string;
  isFavorite: boolean;

  @Input() contact: Contact;
  @Output() onsubmit: EventEmitter<Contact> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.com';
    this.phone = '+11 11 101010';
    this.isFavorite = false;
  }

  onClick(): void {
    console.log('Button is clicked, status of favorite is: ' + this.isFavorite);
  }

  submit(): void {
    this.onsubmit.emit(this.contact);
  }

}
