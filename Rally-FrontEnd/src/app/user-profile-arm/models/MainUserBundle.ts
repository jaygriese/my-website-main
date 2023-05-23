import { UserEntity } from "./UserEntity";
import { UserInformation } from "./UserInformation";

export class MainUserBundle {
	mainUser: UserEntity;
	viewUserInformation: UserInformation;


	constructor(mainUser: UserEntity, mainUserInformation: UserInformation){
		this.mainUser = mainUser,
		this.viewUserInformation = mainUserInformation
	}
}