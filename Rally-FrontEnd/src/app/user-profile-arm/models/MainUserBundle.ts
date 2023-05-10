import { MainUserDmHistory } from "./MainUserDmHistory";
import { UserEntity } from "./UserEntity";
import { UserInformation } from "./UserInformation";

export class MainUserBundle {
	viewUser: UserEntity;
	viewUserInformation: UserInformation;
	viewMainUserDmHistory: MainUserDmHistory;

	constructor(viewUser: UserEntity, mainUserInformation: UserInformation, targetDirectMessages: MainUserDmHistory){
		this.viewUser = viewUser,
		this.viewUserInformation = mainUserInformation,
		this.viewMainUserDmHistory = targetDirectMessages
	}
}