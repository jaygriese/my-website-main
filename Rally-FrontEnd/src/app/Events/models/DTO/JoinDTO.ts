export class JoinDTO {
    id: number;
    name: string;
    contactEmail: string;
    numAttending: number;   
    comment: string;

    constructor( id: number, name: string, contactEmail: string, numAttending: number, comment: string) {
        this.id = id;
        this.name = name;
        this.contactEmail = contactEmail;
        this.numAttending = numAttending;
        this.comment = comment;
    }



}