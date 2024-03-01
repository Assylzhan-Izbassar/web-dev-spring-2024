import { User } from "./user.model";

export class Comment {
    id: number;
    postId: number;
    body: string;
    user: User;

    constructor(id: number, postId: number, body: string, user: User) {
        this.id = id;
        this.postId = postId;
        this.body = body;
        this.user = user;
    }
}
