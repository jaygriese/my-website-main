import { Event } from "./event";

export class JoinEvent {
    id: number;
    userName: string;
    event: Event;
    attending: string;
    contactEmail: string;
    numAttending: number;   
    comment: string;

    constructor( id: number, userName: string, event: Event, attending: string, contactEmail: string, numAttending: number, comment: string) {
        this.id = id;
        this.userName = userName;
        this.event = event;
        this.attending = attending;
        this.contactEmail = contactEmail;
        this.numAttending = numAttending;
        this.comment = comment;
    }
}