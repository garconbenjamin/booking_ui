import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import CustomInputNumber from './CustomInputNumber';
import { INITIAL_ROOM_RESULT, PEOPLE_PER_ROOM } from '../constants';

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
enum PEOPLE_TYPE {
  ADULT = 'adult',
  CHILD = 'child',
}

function RoomsInfo(props: { guest: number; room: number; remainingPeople: number }) {
  const { guest, room, remainingPeople } = props;
  return (
    <div className="px-4">
      <div className="mb-3 font-bold">
        住客人數：{guest} 人 / {room} 房
      </div>
      <div className="bg-blue-50 border border-bg-blue-200 text-gray-500 py-2 px-3 rounded-sm">
        尚未分配人數： {remainingPeople} 人
      </div>
    </div>
  );
}
function RoomItem(props: {
  adult: number;
  child: number;
  remainingPeople: number;
  index: number;
  setRooms: Dispatch<SetStateAction<RoomResult[]>>;
  className?: string;
}) {
  const { adult, child, remainingPeople, className, setRooms, index } = props;
  const disabledAdd = remainingPeople === 0;
  const handleRoomChange = ({ value, type }: { value: number; type: PEOPLE_TYPE }) => {
    const updatedRooms = (rooms: RoomResult[]) =>
      rooms.map((room, roomIndex) => {
        if (roomIndex === index) {
          return {
            ...room,
            [type]: value,
          };
        }
        return room;
      });
    setRooms(updatedRooms);
  };
  return (
    <div className={`p-4 ${className}`}>
      <div className="mb-3 font-bold">房間：{adult + child} 人</div>
      <div className=" ">
        <div className="flex justify-between mb-3 flex-wrap">
          <div>
            <div className="font-bold whitespace-nowrap">大人</div>
            <div className="text-gray-500 whitespace-nowrap">年齡 20+</div>
          </div>
          <CustomInputNumber
            value={adult}
            min={1}
            max={disabledAdd ? adult : PEOPLE_PER_ROOM - child}
            onChange={(e) => {
              handleRoomChange({
                value: Number(e.target.value),
                type: PEOPLE_TYPE.ADULT,
              });
            }}
          />
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="font-bold whitespace-nowrap">小孩</div>
          <CustomInputNumber
            value={child}
            min={0}
            max={disabledAdd ? child : PEOPLE_PER_ROOM - adult}
            onChange={(e) => {
              handleRoomChange({
                value: Number(e.target.value),
                type: PEOPLE_TYPE.CHILD,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

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
