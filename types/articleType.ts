import { IUser } from "./userType";

export type IArticle = {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: false;
    favoritesCount: number;
    author: IUser;
};

export type IArticles = IArticle[];

export type ISingleArticle = {
    article: IArticle;
};

export type IMultipleArticles = {
    articles: IArticles;
};
