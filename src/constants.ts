import { RoomResult } from './components/RoomForm';
import { v4 as uuid } from 'uuid';

export const GUEST = 10;
export const ROOM = 3;
export const PEOPLE_PER_ROOM = 4;
export const INITIAL_ROOM_RESULT: RoomResult[] = [
  { id: uuid(), adult: 1, child: 0 },
  { id: uuid(), adult: 1, child: 0 },
  { id: uuid(), adult: 1, child: 0 },
];
