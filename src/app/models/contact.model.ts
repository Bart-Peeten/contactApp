export class Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    isFavotite: boolean;
    avater: string;


  constructor(id: string,
              name: string,
              email: string,
              phone: string,
              isFavorite = false,
              avatar: 'assets/avatar.jpg') {
                this.id = id;
                this.name = name;
                this.email = email;
                this.phone = phone;
                this.isFavotite = isFavorite;
                this.avater = avatar;
              }

}
