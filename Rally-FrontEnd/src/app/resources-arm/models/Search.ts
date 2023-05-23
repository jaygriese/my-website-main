export class Category {
    category: string;
    constructor(category: string) {
        this.category = category;
    }
}

export class Resource {
    id: string;
    resourceName: string;
    category: Category;
    address: string;
    website: string;
    telephoneNumber: string;
    email: string;
    description: string;

    constructor(id: string, resourceName: string, category: Category, address: string, website: string, telephoneNumber: string, email: string, description: string){
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