import { User } from "./user";

export class ScheduleEvent {
    id: number;
    date: Date;
    title: string;
    description: string;
    isDeadline: boolean;
    users: User[] = [];

    constructor() { }
}
