export class ResourceDTO {
    resourceName: string;
    category: string;
    address: string;
    website: string;
    telephoneNumber: string;
    email: string;
    description: string;
    
    constructor(resourceName: string, category: string, address: string, website: string, telephoneNumber: string, email: string, description: string){
        this.resourceName = resourceName;
        this.category = category;
        this.address = address;
        this.website = website;
        this.telephoneNumber = telephoneNumber;
        this.email = email;
        this.description = description;
    }
}