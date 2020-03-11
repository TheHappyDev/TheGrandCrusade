import { User } from './../user/user.model';
import { Timestamp } from '@firebase/firestore-types';
import { Observable } from 'rxjs';

export interface League  {
    uid: string,
    description?: string;
    members?: string[];
    pendingInvites?: string[];
    name?: string;
    private?: boolean;
    user? : User;
}
export interface Season  {
    start?: Timestamp;
    end?: Timestamp;
    table?: table[];
    seasonNumber: number;
    user? : User;
}
export interface table {
    userid: string,
    gameswon?: number;
    gameslost?: number;
    user? : User;
}