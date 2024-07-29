import DonutChart from "./DonutChart";
import Shortcut from "./Shortcut";
import User from "./User";

const Profile = ({darkMode}) => {
  return (
    <div className="px-2 py-4 bg-gray-200 rounded-lg 
    w-full dark:bg-gray-700 lg:w-60 xl:w-80 flex flex-col
    justify-between gap-4" >
      <User/>
      <Shortcut/>
      <DonutChart darkMode={darkMode}/>
    </div>
  );
}

export default Profile;
