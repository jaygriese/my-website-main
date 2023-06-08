export class ReviewDTO {
    description: String;
    name: String;
    restaurantId: Number;

    constructor(description: String, name: String, restaurantId: Number) {
        this.description= description;
        this.name = name;
        this.restaurantId = restaurantId;
    }
}