export class ProfilePicture {

	id: string;
    userId: string;
    type: string;
    image: string;
	
	constructor(id: string, userId: string, type: string, image: string){
		this.id = id;
		this.userId = userId;
        this.type = type;
        this.image = image;
	}
}