import { User } from 'firebase';

export interface Match  {
    uid?: string;
    gametype?: string;
    players?: string[];
    rounds?: Round[];
}
export interface Round  {
    roundnumber?: number;
    points?: RoundPoint[];
}
export interface RoundPoint  {
    player?: number;
    vp?: number;
}

export interface Team{
    id: string,
    name: string;
    members?: User[]
}
export interface GameType {
    value: string;
    viewValue: string;
  }

  export interface Mission {
    id?: number;
    name: string;
    type: string;
    description: string;
    imageUrl: string;
  }

  export interface Deployment {
    id?: number;
    name: string;
    type: string;
    description: string;
    imageUrl: string;
    selected?: boolean;
  }
  export interface Secondary{
      id: number;
      name: string;
      description: string;
      type: string;
  }