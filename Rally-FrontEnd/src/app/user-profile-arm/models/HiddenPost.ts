export class HiddenPost {

	id: string;
    hidePostId: number;
    userId: number;

	
	constructor(id: string, hidePostId: number, userId: number){
		this.id = id;
		this.hidePostId = hidePostId;
        this.userId = userId;
	}
}