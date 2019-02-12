import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contactApp';
  myContact: Contact;
  contactList: Contact[] = [
    new Contact('Jane Doe', 'jane.doe@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg'),
    new Contact('John Doe', 'john.doe@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg'),
    new Contact('Bart Peeten', 'bart.peeten@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg'),
    new Contact('Katleen Brouwers', 'katleen.brouwers@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg')
  ];

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.myContact = new Contact('John Doe',
                                  'john.doe@gmail.com',
                                  '+32-11-111111',
                                  true,
                                  'assets/avatar.jpg');

  }

  handleData(event: Contact): void {
    console.log('Data received: ', event.email);
  }
}
