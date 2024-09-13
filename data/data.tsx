
export interface UserFormat {
    name: string;
    email: string;
    password: string;
    savedSet: SetFormat[];
    doneSet: SetFormat[];
    createdSet: SetFormat[];
    imgAddress: string;
}

export interface Card {
    front: string;
    back: string;
    imgAddress: string | null;
    memorized: boolean,
    repeatToday: boolean,
}

export interface Desk {
    title: string;
    isDone: boolean;
    repeatSchedule: Array<'M' | 'T' | 'W' | 'TH' | 'F' | 'S' | 'SU' | 'all' | null>
    cardList: Card[];
}

export interface SetFormat {
    id: string;
    name: string;
    author: UserFormat;
    description: string;
    category?: string;
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

export const setList: SetFormat[] = [
]

function getDayOfWeek() {
    let today = new Date();
    let day = today.getDay();
    let days = ['SU', 'M', 'T', 'W', 'TH', 'F', 'S'];
    return days[day] as 'SU' | 'M' | 'T' | 'W' | 'TH' | 'F' | 'S';
}
export const currentDay: 'SU' | 'M' | 'T' | 'W' | 'TH' | 'F' | 'S' = getDayOfWeek();