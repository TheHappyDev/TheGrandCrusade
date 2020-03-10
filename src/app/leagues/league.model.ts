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
}
export interface Season  {
    start?: Timestamp;
    end?: Timestamp;
    table?: table[];
    seasonNumber: number;
}
export interface table {
    userid: string,
    gameswon?: number;
    gameslost?: number;
    user? : Observable<User>;
}