import { UserEntity } from "src/app/user-profile-arm/models/UserEntity";

export class ForumPost {
    id: number;
    userEntity: UserEntity;
	title: string;
	description: string;
	category: string;

	constructor(title: string, description: string, userEntity: UserEntity, category: string){
		this.title = title;
		this.description = description;
		this.userEntity = userEntity;
		this.category = category;
	}
}