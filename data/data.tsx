
export interface User {
    name: string;
    email: string;
    password: string;
    savedSet: Set[];
    doneSet: Set[];
    createdSet: Set[];
    imgAddress: string;
}

export interface Card {
    front: string;
    back: string;
    imgAddress: string;
    isReviewed: boolean;
}

export interface Desk {
    title: string;
    isDone: boolean;
    repeatSchedule: {};
    cardList: Card[];
}

export interface Set {
    id: string;
    name: string;
    author: User;
    description: string;
    rate: {
        star: number;
        total: number;
    },
    private: boolean;
    isSaved: boolean;
    numberOfSaved: number;
    isDone: boolean;
    deskList: Desk[];
    // desk.length
    // card need memorize progress
    // inner set view: card need today / card all time / desk completed
}