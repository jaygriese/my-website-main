import { HiddenPost } from "./HiddenPost";
import { MainUserDmHistory } from "./MainUserDmHistory";
import { UserEntity } from "./UserEntity";
import { UserInformation } from "./UserInformation";
import { UserPostHistory } from "./UserPostHistory";

export class MainUserBundle {
	viewUser: UserEntity;
	viewUserInformation: UserInformation;
	viewMainUserDmHistory: MainUserDmHistory;
	viewUserPostHistory: UserPostHistory;

	constructor(viewUser: UserEntity, 
				mainUserInformation: UserInformation, 
				targetDirectMessages: MainUserDmHistory,
				viewUserPostHistory: UserPostHistory){
		this.viewUser = viewUser,
		this.viewUserInformation = mainUserInformation,
		this.viewMainUserDmHistory = targetDirectMessages,
		this.viewUserPostHistory = viewUserPostHistory
	}
}