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
export default RoomsInfo;
