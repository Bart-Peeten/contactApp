import {Injectable} from '@angular/core';
import {Contact} from '../models/contact.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';


@Injectable()
export class ContactService {
    BASEAPIURL = 'https://webexpert1718.firebaseio.com/contacts.json';
    CONTACTAPIURL = 'https://webexpert1718.firebaseio.com/contacts/';
    contactList: Contact[];
    /*contactList: Contact[] = [
        new Contact('Jane Doe', 'jane.doe@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg'),
        new Contact('John Doe', 'john.doe@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg'),
        new Contact('Bart Peeten', 'bart.peeten@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg'),
        new Contact('Katleen Brouwers', 'katleen.brouwers@gmail.com', '+32 11 11 11 11', true, 'assets/avatar.jpg')
    ];*/

    constructor(private http: HttpClient) {}

    getContactList(): Observable<Contact[]> {
        return this.http.get(this.BASEAPIURL).pipe(
            map(this.parseContactData)
        );
    }

    addContact(contact: Contact): Observable<any> {
        return this.http.post(this.BASEAPIURL, contact);
    }

    parseContactData(rawContacts: any[]): Contact[] {
        return Object.keys(rawContacts).map(key => {
            const contact = rawContacts[key];
            return new Contact(key,
                                contact.name,
                                contact.email,
                                contact.phone,
                                contact.isFavotite,
                                contact.avatar);
        });
    }

    updateContact(id: string, data: any): Observable<any> {
        const url = `${this.CONTACTAPIURL}${id}.json`;
        return this.http.patch(url, data);
    }
}
