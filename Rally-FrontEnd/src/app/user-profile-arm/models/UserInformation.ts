import { UserEntity } from "./UserEntity";

export class UserInformation {

    id: number;
    user: UserEntity;
    firstName: string;
    lastName: string;
    neigborhood: string;
    city: string;
    state: string;
    
	constructor(id: number, user: UserEntity, firstName: string, lastName: string, neigborhood: string, city: string, state: string){
		this.id = id;
        this.user = user;
		this.firstName = firstName;
        this.lastName = lastName;
        this.neigborhood = neigborhood;
		this.city = city;
        this.state = state;
	}
}