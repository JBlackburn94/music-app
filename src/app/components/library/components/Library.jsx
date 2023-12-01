import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";

export default function Library() {
  return (
    <div className="mt-4 flex justify-between text-gray-400">
      <CiSearch className="text-xl hover:text-white duration-200" />
      <span className="hover:text-white duration-200 flex items-center">
        <p>Recents</p>
        <FaList className="ml-2" />
      </span>
    </div>
  );
}
