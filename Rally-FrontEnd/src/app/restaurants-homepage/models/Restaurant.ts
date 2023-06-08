export class Restaurant {
    id: string;
    restauntName: string;
    address: string;
    conactInfo: string;
    neighborhood: string;
   restaurantType: string;

   constructor(id: string, restauntName: string, address: string, conactInfo: string, neighborhood: string, restaurantType: string) {
    this.id = id;
    this.restauntName= restauntName;
    this.address = address;
    this.conactInfo = conactInfo;
    this.neighborhood = neighborhood;
    this.restaurantType = restaurantType;
   }

}