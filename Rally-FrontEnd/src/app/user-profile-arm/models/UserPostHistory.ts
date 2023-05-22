import { Event } from "src/app/Events/models/event";
import { HiddenPost } from "./HiddenPost";

export class UserPostHistory {

    viewUserHiddenPost: HiddenPost[];
    // viewUserFavoritePost: FavoritePost[];
    viewUserForumPost: any[];
    viewUserForumReplies: any[];
    viewUserEventPost: Event[];
    viewUserServicePost: any[];
    viewUserResourcePost: any[];
    // viewUserRestaurantReviews: Restaurant[];
    constructor(viewUserHiddenPost: HiddenPost[], 
                viewUserForumPost: any[], 
                viewUserForumReplies: any[],
                viewUserEventPost: Event[],
                viewUserServicePost: any[], 
                viewUserResourcePost: any[]) {
        this.viewUserHiddenPost = viewUserHiddenPost;
        this.viewUserForumPost = viewUserForumPost;
        this.viewUserForumReplies = viewUserForumReplies;
        this.viewUserEventPost = viewUserEventPost;
        this.viewUserServicePost = viewUserServicePost;
        this.viewUserResourcePost = viewUserResourcePost;
    }

}