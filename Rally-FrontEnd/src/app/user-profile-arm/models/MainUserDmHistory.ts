import { DirectMessage } from "./Directmessage";
import { UserEntity } from "./UserEntity";

export class MainUserDmHistory {

    userEntities: UserEntity[];
    directMessageList: DirectMessage[];

	constructor(uniqueUserConversations: UserEntity[], directMessageList: DirectMessage[]){
        this.userEntities = uniqueUserConversations,
        this.directMessageList = directMessageList
	}
}