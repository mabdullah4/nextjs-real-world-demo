import { IUser } from "./userType";

export type IComment = {
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: IUser;
};

export type IComments = IComment[];

export type ISingleComment = {
    comment: IComment;
};

export type IMultipleComments = {
    comments: IComments;
};
