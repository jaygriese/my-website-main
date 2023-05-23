import { Roles } from "./Roles";

export class UserEntity {

	id: string;
    userName: string;
	roles: Roles[];
	
	constructor(id: string, userName: string,  roles: Roles[]){
		this.id = id;
		this.userName = userName;
		this.roles = roles;
	}
}