import { UserEntity } from "src/app/user-profile-arm/models/UserEntity";

export class ForumPostLike {
    likes: number;
    userEntity: UserEntity[];
    
	constructor(likes: number, userEntity: UserEntity[]){
		this.likes = likes;
		this.userEntity = userEntity;
	}
}