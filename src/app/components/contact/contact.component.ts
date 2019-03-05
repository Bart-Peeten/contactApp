import { Contact } from './../../models/contact.model';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule} from '@angular/forms';
import {ContactService} from '../../services/contact.service';

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
  @Input() index: number;
  @Output() Update: EventEmitter<any> = new EventEmitter();

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.com';
    this.phone = '+11 11 101010';
    this.isFavorite = false;
  }

  toggleFavorite(id: string, isFavorite: boolean): void {
        this.service.updateContact(id, {isFvorite: isFavorite}).subscribe(() => this.Update.emit);
  }
}
