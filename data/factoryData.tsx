import { Card, SetFormat, UserFormat } from "./data";

export const demoUser: UserFormat = {
    name: 'demo',
    email: 'demo@demo.com',
    password: 'demo',
    savedSet: [],
    doneSet: [],
    createdSet: [],
    imgAddress: 'https://owasp.org/assets/images/people/staff_andrew.jpg',
}

export const demoUser2: UserFormat = {
    name: 'demo2222',
    email: 'demo@demo2222.com',
    password: 'demo',
    savedSet: [],
    doneSet: [],
    createdSet: [],
    imgAddress: 'placeholder.jpeg',
}

export let demoSets: SetFormat[] = [
    {
        id: 'B1',
        name: 'B1 Vocabularies',
        author: demoUser,
        description: 'This set is for B1 level English learners',
        rate: {
            star: 5,
            total: 10,
        },
        private: true,
        isSaved: false,
        numberOfSaved: 6,
        isDone: false,
        deskList: [
            {
                title: 'Desk 1',
                isDone: false,
                repeatSchedule: {},
                cardList: [
                    {
                        front: 'front 1',
                        back: 'back 1',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: true,
                        repeatToday: true,
                    },
                    {
                        front: 'front 2',
                        back: 'back 2',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: true,
                        repeatToday: true,
                    },
                ],
            },
            {
                title: 'Desk 2',
                isDone: false,
                repeatSchedule: {},
                cardList: [
                    {
                        front: 'front 1',
                        back: 'back 1',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: true,
                        repeatToday: true,
                    },
                    {
                        front: 'front 2',
                        back: 'back 2',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: true,
                        repeatToday: false,
                    },
                ],
            },
            {
                title: 'Desk 3',
                isDone: false,
                repeatSchedule: {},
                cardList: [
                    {
                        front: 'front 1',
                        back: 'back 1',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                    {
                        front: 'front 2',
                        back: 'back 2',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                ],
            },
        ]
    },
    {
        id: 'B1 pro',
        name: 'B1 Vocabularies vip pro',
        author: demoUser2,
        description: 'This set is for B1 level English learners',
        rate: {
            star: 5,
            total: 10,
        },
        private: false,
        isSaved: false,
        numberOfSaved: 6,
        isDone: false,
        deskList: [
            {
                title: 'Desk 1',
                isDone: false,
                repeatSchedule: {},
                cardList: [
                    {
                        front: 'front 1',
                        back: 'back 1',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                    {
                        front: 'front 2',
                        back: 'back 2',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                ],
            },
            {
                title: 'Desk 2',
                isDone: false,
                repeatSchedule: {},
                cardList: [
                    {
                        front: 'front 1',
                        back: 'back 1',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                    {
                        front: 'front 2',
                        back: 'back 2',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                ],
            },
            {
                title: 'Desk 3',
                isDone: false,
                repeatSchedule: {},
                cardList: [
                    {
                        front: 'front 1',
                        back: 'back 1',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                    {
                        front: 'front 2',
                        back: 'back 2',
                        imgAddress: 'assets/image/placeholder.jpeg',
                        memorized: false,
                        repeatToday: false,
                    },
                ],
            },
        ]
    },
]