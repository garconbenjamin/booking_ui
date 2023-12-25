import { useEffect, useState } from 'react';

import { INITIAL_ROOM_RESULT } from '../../constants';
import RoomItem from './RoomItem';
import RoomsInfo from './RoomInfo';

type RoomResult = {
  id: string;
  adult: number;
  child: number;
};
type RoomFormProps = {
  guest: number;
  room: number;
  onChange: (result: RoomResult[]) => void;
};

function RoomForm(props: RoomFormProps) {
  const { guest, room, onChange: onResultChange } = props;
  const [rooms, setRooms] = useState<RoomResult[]>(INITIAL_ROOM_RESULT);
  const remainingPeople = guest - rooms.reduce((acc, room) => acc + room.adult + room.child, 0);

  useEffect(() => {
    onResultChange(rooms);
  }, [rooms]);
  return (
    <div>
      <RoomsInfo guest={guest} room={room} remainingPeople={remainingPeople} />

      {rooms.map(({ adult, child, id }, index) => {
        return (
          <RoomItem
            adult={adult}
            child={child}
            remainingPeople={remainingPeople}
            key={id}
            index={index}
            className={index === rooms.length - 1 ? '' : 'border-b'}
            setRooms={setRooms}
          />
        );
      })}
    </div>
  );
}
export default RoomForm;
export type { RoomResult };
