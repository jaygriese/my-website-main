export class ServiceDTO {
    userName: string;
	description: string;
    category: String;
    days: string;
    email: string;
    service: string;
    time: string;
    type: string;


	constructor(userName: string, description: string, category: String, days: string, email: string, service: string, time: string, type: string){
        this.userName = userName;
		this.description = description;
        this.category = category;
        this.days = days;
        this.email = email;
        this.service = service;
        this.time = time;
        this.type = type;

	}
}

// Attempting validation
export class Name {
    constructor (
        public userName: String,
        public service: String,
        public description: String,
        public email: String
    ) {}
}
