export class HidePostDTO {

	postType: string;
    hidePostId: number;
    userId: number;
	
	constructor(postType: string, hidePostId: number, userId: number){
		this.postType = postType;
		this.hidePostId = hidePostId;
        this.userId = userId;
	}
}