export class ReplyDTO {
    description: string;
    username: string;
    id: number;

    constructor(description: string, username: string, id: number){
        this.description = description;
        this.username = username;
        this.id = id;
    }
}