import { UserEntity } from "src/app/user-profile-arm/models/UserEntity";
import { ForumPostLike } from "./ForumPostLike";

export class ForumPost {
    id: number;
    userEntity: UserEntity;
	title: string;
	forumPostLike: 	ForumPostLike;
	description: string;
	category: string;

	constructor(title: string, description: string, userEntity: UserEntity, category: string, forumPostLike: ForumPostLike){
		this.title = title;
		this.description = description;
		this.userEntity = userEntity;
		this.category = category;
		this.forumPostLike = forumPostLike;
	}
}