import { UserDmHistory } from "./UserDmHistory";
import { UserEntity } from "./UserEntity";
import { UserInformation } from "./UserInformation";

export class ViewUserBundle {
	viewUser: UserEntity;
	viewUserInformation: UserInformation;
	viewUserDmHistory: UserDmHistory;
	updatedPostHistoryViewUser: any[];

	constructor(viewUser: UserEntity, viewUserInformation: UserInformation, viewUserDmHistory: UserDmHistory, updatedPostHistoryViewUser: any[]){
		this.viewUser = viewUser,
		this.viewUserInformation = viewUserInformation,
		this.viewUserDmHistory = viewUserDmHistory,
		this.updatedPostHistoryViewUser = updatedPostHistoryViewUser
	}

}