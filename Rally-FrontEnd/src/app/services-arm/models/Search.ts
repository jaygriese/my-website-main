export class Type {
    type: string;

    constructor(type: string) {
        this.type = type;
    }
}

export class Category {
    category: string;

    constructor(category: string) {
        this.category = category;
    }
}

export class Service {
    id: string;
    name: string;
	description: string;
    category: Category;
    day: string;
    email: string;
    service: string;
    time: string;
    type: Type;


	constructor(id: string, name: string, description: string, category: Category, day: string, email: string, service: string, time: string, type: Type){
        this.id = id;
        this.name = name;
		this.description = description;
        this.category = category;
        this.day = day;
        this.email = email;
        this.service = service;
        this.time = time;
        this.type = type;

	}


}
