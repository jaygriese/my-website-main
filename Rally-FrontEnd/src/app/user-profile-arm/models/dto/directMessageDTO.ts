export class DirectMessageDTO {
    receivedByUserId: string;
    receivedByUserName: string;
    sentByUserId: string;
    sentByUserName: string;
    messageContent: string;

	constructor(receivedByUserId: string, receivedByUserName: string, sentByUserId: string, sentByUserName: string, messageContent: string){
        this.receivedByUserId = receivedByUserId,
        this.receivedByUserName = receivedByUserName,
        this.sentByUserId = sentByUserId,
        this.sentByUserName = sentByUserName,
        this.messageContent = messageContent		
	}
}