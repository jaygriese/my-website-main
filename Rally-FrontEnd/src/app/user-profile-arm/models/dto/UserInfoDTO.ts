export class UserInfoDTO {
    firstName: string;
	lastName: string;
	neighborhood: string;
    city: string;
	state: string;

	constructor(firstName: string, lastName: string, neighborhood: string, city: string, state: string){
		this.firstName = firstName;
		this.lastName = lastName;
		this.neighborhood = neighborhood;
		this.city = city;
		this.state = state;
	}
}