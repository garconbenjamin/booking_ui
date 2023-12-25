import { Dispatch, SetStateAction } from 'react';
import CustomInputNumber from '../CustomInputNumber';
import { PEOPLE_PER_ROOM } from '../../constants';

type RoomResult = {
  id: string;
  adult: number;
  child: number;
};

enum PEOPLE_TYPE {
  ADULT = 'adult',
  CHILD = 'child',
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

export default RoomItem;
