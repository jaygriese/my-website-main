export class EventDTO {
    id: number;
    // id: string;
    userName: string;
    eventHost: string;
    contactEmail: string;
    eventTitle: string;   
    datetime: string;
    eventAddress: string;
    eventCategory: string;
    description: string;
    imageId: string;

    constructor( id: number, userName: string, eventHost: string, contactEmail: string, eventTitle: string, datetime: string, eventAddress: string, eventCategory: string, description: string, imageId: string) {
        this.id = id;
        this.userName = userName;
        this.eventHost = eventHost;
        this.contactEmail = contactEmail;
        this.eventTitle = eventTitle;
        this.datetime = datetime;
        this.eventAddress = eventAddress;
        this.eventCategory = eventCategory;
        this.description = description;
        this.imageId = imageId;
    }



}