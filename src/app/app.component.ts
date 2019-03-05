import { Component, OnInit, EventEmitter } from '@angular/core';
import { Contact } from './models/contact.model';
import {ContactService} from './services/contact.service';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contactApp';
  myContact: Contact;
  contactList: Contact[];

  constructor(private service: ContactService) {  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
      this.fetchContactList();

  }

  handleData(event: Contact): void {
    console.log('Data received: ', event.email);
  }

  createContact(event: Contact) {
    this.service.addContact(event).subscribe(() => this.fetchContactList());
  }

  handleUpdate($event: Event) {
    this.fetchContactList();
  }

  private fetchContactList(): void {
     this.service.getContactList().subscribe(data => this.contactList = data);
  }
}

