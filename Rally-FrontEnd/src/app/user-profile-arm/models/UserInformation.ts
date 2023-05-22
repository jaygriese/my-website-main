import { ProfilePicture } from "./ProfilePicture";
import { UserEntity } from "./UserEntity";

export class UserInformation {

    id: number;
    user: UserEntity;
    profilePic: ProfilePicture;
    firstName: string;
    lastName: string;
    neighborhood: string;
    city: string;
    state: string;
    
	constructor(id: number, user: UserEntity, firstName: string, lastName: string, neighborhood: string, city: string, state: string){
		this.id = id;
        this.user = user;
		this.firstName = firstName;
        this.lastName = lastName;
        this.neighborhood = neighborhood;
		this.city = city;
        this.state = state;
	}
}