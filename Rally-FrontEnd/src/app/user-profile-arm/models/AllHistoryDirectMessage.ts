import { DirectMessage } from "./Directmessage";
import { UserEntity } from "./UserEntity";

export class AllHistoryDirectMessage {

    uniqueUserConversations: UserEntity[];
    directMessageList: DirectMessage[];

	constructor(uniqueUserConversations: UserEntity[], directMessageList: DirectMessage[]){
        this.uniqueUserConversations = uniqueUserConversations,
        this.directMessageList = directMessageList
	}
}