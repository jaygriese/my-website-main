export class ResourceDTO {
    id: number; 
    resourceName: string;
    category: String;
    neighborhood: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    website: string;
    telephoneNumber: string;
    email: string;
    description: string;
    
    constructor(id: number, resourceName: string, category: String, neighborhood: string, address: string, city: string, state: string, zip: string, website: string, telephoneNumber: string, email: string, description: string){
        this.id = id;
        this.resourceName = resourceName;
        this.category = category;
        this.neighborhood = neighborhood;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.website = website;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.description = description;
    }
}