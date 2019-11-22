import { User } from '../user/user.model'

export interface Board{
    id?: string;
    title? : string;
    tiles?: Tile[];
    createdOn : Date;
}

export interface Tile{
    index?: number;
    occupier?: User;
}