export class UserInfoDTO {
	userId: number;
    firstName: string;
	lastName: string;
	neigborhood: string;
    city: string;
	state: string;

	constructor(userId: number, firstName: string, lastName: string, neigborhood: string, city: string, state: string){
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.neigborhood = neigborhood;
		this.city = city;
		this.state = state;
	}
}