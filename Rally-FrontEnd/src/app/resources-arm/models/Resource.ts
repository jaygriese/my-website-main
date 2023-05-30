export class Resource {
    id: string; 
    resourceName: string;
    category: String;
    address: string;
    website: string;
    telephoneNumber: string;
    email: string;
    description: string;
    
    constructor(id: string, resourceName: string, category: String, address: string, website: string, telephoneNumber: string, email: string, description: string){
        this.id = id;
        this.resourceName = resourceName;
        this.category = category;
        this.address = address;
        this.website = website;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.description = description;
    }
}