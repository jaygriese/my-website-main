import { UserEntity } from "./UserEntity";
import { UserInformation } from "./UserInformation";

export class ViewUserBundle {
	viewUser: UserEntity;
	viewUserInformation: UserInformation;

	constructor(viewUser: UserEntity, viewUserInformation: UserInformation){
		this.viewUser = viewUser,
		this.viewUserInformation = viewUserInformation
	}
}