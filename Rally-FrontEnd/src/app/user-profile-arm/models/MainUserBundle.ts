import { UserDmHistory } from "./UserDmHistory";
import { UserEntity } from "./UserEntity";
import { UserInformation } from "./UserInformation";
import { UserPostHistory } from "./UserPostHistory";

export class MainUserBundle {
	viewUser: UserEntity;
	viewUserInformation: UserInformation;
	viewUserDmHistory: UserDmHistory;
	viewUserPostHistory: UserPostHistory;

	constructor(viewUser: UserEntity, 
				viewUserInformation: UserInformation, 
				viewUserDmHistory: UserDmHistory,
				viewUserPostHistory: UserPostHistory){
		this.viewUser = viewUser,
		this.viewUserInformation = viewUserInformation,
		this.viewUserDmHistory = viewUserDmHistory,
		this.viewUserPostHistory = viewUserPostHistory
	}
}