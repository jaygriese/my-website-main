export class HiddenPost {

	id: string;
	postType: string;
    hidePostId: number;
    userId: number;

	
	constructor(id: string, postType: string, hidePostId: number, userId: number){
		this.id = id;
		this.postType = postType;
		this.hidePostId = hidePostId;
        this.userId = userId;
	}
}