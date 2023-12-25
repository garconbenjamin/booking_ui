import RoomForm, { RoomResult } from './components/RoomForm';
import { GUEST, ROOM } from './constants';

function App() {
  const onChange = (result: RoomResult[]) => {
    console.log(result);
  };
  return (
    <div className="bg-gray-200 h-screen w-screen pt-8">
      <div className="mx-auto w-1/3 rounded-md overflow-hidden min-w-[340px]">
        <div className="bg-blue-600 text-white text-2xl p-4 font-bold">Rooms</div>
        <div className="mx-auto bg-white pt-4 px-2 rounded-md ">
          <RoomForm guest={GUEST} room={ROOM} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
