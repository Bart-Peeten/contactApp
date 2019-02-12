export class Contact {
    name: string;
    email: string;
    phone: string;
    isFavotite: boolean;
    avater: string;


  constructor(name: string,
              email: string,
              phone: string,
              isFavorite = false,
              avatar: 'assets/avatar.jpg') {
                this.name = name;
                this.email = email;
                this.phone = phone;
                this.isFavotite = isFavorite;
                this.avater = avatar;
              }

}
