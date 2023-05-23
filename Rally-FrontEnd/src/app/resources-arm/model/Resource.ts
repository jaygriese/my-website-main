import { UserEntity } from "src/app/user-profile-arm/models/UserEntity";
export class ResourceDTO {
    resourceName: string;
    category: string;
    address: string;
    website: string;
    telephoneNumber: string;
    emailAddress: string;
    description: string;
    
    constructor(resourceName: string, category: string, address: string, website: string, telephoneNumber: string, emailAddress: string, description: string){
        this.resourceName = resourceName;
        this.category = category;
        this.address = address;
        this.website = website;
        this.telephoneNumber = telephoneNumber;
        this.emailAddress = emailAddress;
        this.description = description;
    }
}