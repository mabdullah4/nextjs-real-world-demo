export type ILogin = {
    email: string;
    password: string;
};

export type IRegister = {
    username: string;
    email: string;
    password: string;
};

export type IUpdateUser = {
    email: string;
    bio: string;
    image: string;
};

export type IProfile = {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string | null;
};

export type IUser = {
    username: string;
    bio: string;
    image: string;
    following: boolean;
};
